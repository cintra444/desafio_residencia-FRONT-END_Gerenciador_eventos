import React, { createContext, useState } from 'react';

export const UserActionContext = createContext();

export const UserActionProvider = ({ children }) => {
    const [actions, setActions] = useState([]);
    const [eventos, setEventos] = useState([]);

    const registerAction = (action) => {
        setActions((prevActions) => [...prevActions, action]);
        console.log(`Ação registrada: ${action}`);
    };

    const fetchEventos = async () => {
        try {
            const response = await fetch('/api/eventos');
            if (!response.ok) {
                throw new Error('Falha ao carregar eventos');
            }
            const data = await response.json();
            setEventos(data);
            registerAction('Eventos carregados');
        } catch (error) {
            console.error('Erro ao buscar eventos:', error);
        }
    };

    const addEvento = async (evento) => {
        try {
            const response = await fetch('/api/eventos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(evento),
            });
            if (!response.ok) {
                throw new Error('Falha ao adicionar evento');
            }
            const newEvento = await response.json();
            setEventos((prevEventos) => [...prevEventos, newEvento]);
            registerAction('Evento adicionado: ${newEvento.nome}');
        } catch (error) {
            console.error('Erro ao adicionar evento:', error);
        }
        };
        const editEvento = async (evento) => {
            try {
                const response = await fetch(`/api/eventos/${evento.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(evento),
                });
                if (!response.ok) {
                    throw new Error('Falha ao editar evento');
                }
                const updatedEvento = await response.json();
                setEventos((prevEventos) =>
                    prevEventos.map((e) => (e.id === evento.id ? updatedEvento : e))
                );
                registerAction('Evento editado: ${updatedEvento.nome}');
            } catch (error) {
                console.error('Erro ao editar evento:', error);
            }
            };
            const deleteEvento = async (eventoId) => {
                try {
                    const response = await fetch(`/api/eventos/${eventoId}`, {  
                        method: 'DELETE',
                    });
                    if (!response.ok) {
                        throw new Error('Falha ao excluir evento');
                    }
                    setEventos((prevEventos) =>
                        prevEventos.filter((evento) => evento.id !== eventoId)
                    );
                    registerAction('Evento excluido: ${eventoId}');
                } catch (error) {
                    console.error('Erro ao excluir evento:', error);    
                    }
                };

    return (
        <UserActionContext.Provider 
        value={{ 
            actions,
            registerAction,
            deleteEvento,
            editEvento,
            addEvento
            }}
            >
            {children}
        </UserActionContext.Provider>
    );
};
