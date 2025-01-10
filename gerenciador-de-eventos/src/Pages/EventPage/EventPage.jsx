import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventPage = () => {
    const { id } = useParams(); // Obtém o ID do evento da URL
    const [evento, setEvento] = useState(null);
    const [error, setError] = useState(null); // Armazena o erro

    useEffect(() => {
        // Função para buscar o evento
        const fetchEventoDetails = async () => {
            try {
                const response = await axios.get(`https://sua-api.com/eventos/${id}`);
                setEvento(response.data); // Armazena os dados do evento
            } catch (error) {
                // Aqui você pode capturar o erro
                console.error('Erro ao acessar a API:', error.response ? error.response.data : error.message);
                setError('Ocorreu um erro ao carregar os dados do evento.'); // Definindo o erro para exibir na interface
            }
        };

        fetchEventoDetails();
    }, [id]); // A requisição será feita sempre que o ID mudar

    if (error) {
        return <div>{error}</div>; // Exibe a mensagem de erro se houver
    }

    if (!evento) {
        return <div>Carregando...</div>; // Exibe um texto enquanto os dados estão sendo carregados
    }

    return (
        <>
            <div className="event-page">
                <h1>Detalhes do Evento: {evento.nome}</h1>
                <p><strong>Data:</strong> {evento.data}</p>
                <p><strong>Localização:</strong> {evento.localizacao}</p>
                <div>
                    <img src={evento.imagem} alt={evento.nome} />
                </div>
                <p><strong>Descrição:</strong> {evento.descricao}</p>
            </div>
        </>
    );
};

export default EventPage;
