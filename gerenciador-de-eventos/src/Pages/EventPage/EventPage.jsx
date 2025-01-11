import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './EventPage.css';

const EventPage = () => {
    const { id } = useParams(); // Obtém o ID do evento da URL
    const [evento, setEvento] = useState(null);
    const [error, setError] = useState(null); // Armazena o erro

    useEffect(() => {
        // Função para buscar o evento
        const fetchEventoDetails = async () => {
            try {
                const response = await api.get(`/api/eventos/${id}`);
                setEvento(response.data); 
            } catch (error) {
                console.error('Erro ao acessar a API:', error.response ? error.response.data : error.message);
                setError('Ocorreu um erro ao carregar os dados do evento.'); 
            }
        };

        fetchEventoDetails();
    }, [id]); 

    if (error) {
        return <div className='error-message'>{error}</div>; 
    }

    if (!evento) {
        return <div className='loading'>Carregando...</div>; 
    }

    return (
        <>
            <div className="event-page">
                <h1>Detalhes do Evento: {evento.nome}</h1>
                <p><strong>Data:</strong> {evento.data}</p>
                <p><strong>Localização:</strong> {evento.localizacao}</p>
                <div>
                    <img src={evento.imagem} alt={`Imagem do evento ${evento.nome}`} />
                </div>
                <p><strong>Descrição:</strong> {evento.descricao}</p>
            </div>
        </>
    );
};

export default EventPage;
