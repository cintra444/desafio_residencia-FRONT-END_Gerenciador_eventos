import React, { useEffect, useState } from 'react';
import { getEventos, excluirEvento, criarEvento } from '../../services/api';
import EventoItem from './EventoItem';
import EventoModal from './EventoModal';
import './EventoList.css';

const EventoList = ({ adminId }) => {
    const [eventos, setEventos] = useState([]);
    const [modalShow, setModalShow] = useState(false);  // Controle de exibição do modal

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const eventosData = await getEventos(adminId);
                setEventos(eventosData);
            } catch (error) {
                console.error('Erro ao buscar eventos:', error);
            }
        };
        fetchEventos();
    }, [adminId]);

    // Função para excluir evento
    const handleDeleteEvento = async (eventoId) => {
        try {
            await excluirEvento(eventoId);
            setEventos(eventos.filter(evento => evento.id !== eventoId));
        } catch (error) {
            console.error('Erro ao excluir evento:', error);
        }
    };

    const handleOpenModal = () => {
        setModalShow(true);
    };

    const handleCloseModal = () => {
        setModalShow(false);
    };

    const handleSaveEvento = async (eventoData) => {
        try {
            const novoEvento = await criarEvento(eventoData);
            setEventos([...eventos, novoEvento]);
        } catch (error) {
            console.error('Erro ao criar evento:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Eventos</h2>
            <button onClick={handleOpenModal}>Criar Novo Evento</button>

            <EventoModal
                show={modalShow}
                handleClose={handleCloseModal}
                handleSave={handleSaveEvento}
            />

            {/* Exibir lista de eventos */}
            {eventos.length > 0 ? (
                eventos.map((evento) => (
                    <EventoItem
                        key={evento.id}
                        evento={evento}
                        onDelete={handleDeleteEvento}
                    />
                ))
            ) : (
                <p>Nenhum evento encontrado.</p>
            )}
        </div> 
    );
};

export default EventoList;