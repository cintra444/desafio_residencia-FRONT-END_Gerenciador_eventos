import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventoList.css';

// Configura o axios para usar a URL base da Mock API
axios.defaults.baseURL = 'https://your-mock-api-url.mockapi.io'; // Altere com a URL do seu Mock API

const EventoList = () => {
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);  // Para indicar carregamento
    const [error, setError] = useState(null);  // Para erros

    useEffect(() => {
        // Requisição para buscar eventos
        axios.get('/api/eventos') // Use o endpoint correto da Mock API
            .then(response => {
                setEventos(response.data);
                setLoading(false);  // Finaliza o carregamento
            })
            .catch(error => {
                console.error('There was an error fetching the events!', error);
                setError('Erro ao carregar eventos');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div>Carregando eventos...</div>
        );
    }

    if (error) {
        return (
            <div>{error}</div>
        );
    }

    return (
        <>
          
            <div>
                <h1>Lista de Eventos</h1>
                <ul>
                    {eventos.map(evento => (
                        <li key={evento.id} className="evento-item">
                            <h2>{evento.nome}</h2>
                            <p>{evento.descricao}</p>
                            <p>{evento.data}</p>
                            <p>{evento.localizacao}</p>
                            <img src={evento.imagem} alt={evento.nome} className="evento-imagem" />
                        </li>
                    ))}
                </ul>
            </div>
           
        </>
    );
};

export default EventoList;
