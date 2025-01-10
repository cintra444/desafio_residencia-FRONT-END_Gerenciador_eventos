import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEventoById } from '../service/api'; // Importando a função para buscar evento
import './EventPage.css';

const EventPage = () => {
    const { id } = useParams();
    const [evento, setEvento] = useState(null);

    useEffect(() => {
        const fetchEventoDetails = async () => {
            try {
                const data = await getEventoById(id); // Usando a função do api.js
                setEvento(data);
            } catch (error) {
                console.error('Erro ao buscar detalhes do evento:', error);
            }
        };

        fetchEventoDetails();
    }, [id]);

    if (!evento) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="event-page">
            <h1>Detalhes do Evento: {evento.nome}</h1>
            <p><strong>Data:</strong> {evento.data}</p>
            <p><strong>Localização:</strong> {evento.localizacao}</p>
            <div>
                <img src={evento.imagem} alt={evento.nome} />
            </div>
            <p><strong>Descrição:</strong> {evento.descricao}</p>
        </div>
    );
};

export default EventPage;
