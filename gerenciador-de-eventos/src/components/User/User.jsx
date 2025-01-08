import React, { useState, useEffect } from 'react';
import EventoModal from '../EventoModal/EventoModal';
import './User.css';

const User = () => {
    const [eventos, setEventos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEvento, setSelectedEvento] = useState(null);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const response = await fetch('/api/eventos');
                if (!response.ok) {
                    throw new Error('Falha ao carregar eventos');
                }
                const data = await response.json();
                setEventos(data);
            } catch (error) {
                console.error('Erro ao buscar eventos:', error);
            }
        };

        fetchEventos();
    }, []);

    const handleEdit = (evento) => {
        setSelectedEvento(evento);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Você tem certeza que deseja excluir este evento?')) {
            setEventos(eventos.filter(evento => evento.id !== id));
        }
    };

    const handleAddEvento = () => {
        setSelectedEvento(null);
        setShowModal(true);
    };

    const handleSaveEvento = (evento) => {
        if (!evento.nome || !evento.data || !evento.localizacao || !evento.imagem) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        if (selectedEvento) {
            setEventos(eventos.map(e => (e.id === evento.id ? evento : e)));
        } else {
            setEventos([...eventos, evento]);
        }
        setShowModal(false);
    };

    return (
        <>
           
            <div className="user-page">
                <h1>Meus Eventos</h1>
                <button onClick={handleAddEvento}>Adicionar Evento</button>
                <div className="eventos-list">
                    {eventos.map(evento => (
                        <div key={evento.id} className="evento-card">
                            <img src={evento.imagem} alt={evento.titulo} />
                            <h2>{evento.titulo}</h2>
                            <p>Data: {evento.data}</p>
                            <p>Localização: {evento.localizacao}</p>
                            <button onClick={() => handleEdit(evento)}>Editar</button>
                            <button onClick={() => handleDelete(evento.id)}>Excluir</button>
                        </div>
                    ))}
                </div>
                {showModal && (
                    <EventoModal
                        evento={selectedEvento}
                        onSave={handleSaveEvento}
                        onClose={() => setShowModal(false)}
                    />
                )}
            </div>
           
        </>
    );
};

export default User;
