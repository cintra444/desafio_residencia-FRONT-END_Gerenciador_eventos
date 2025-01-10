import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Aqui você pode fazer uma requisição à API que você deseja
                const response = await axios.get('/api/someEndpoint'); // Exemplo de endpoint

                // Se não encontrar a resposta ou receber um erro 404
                if (response.status === 404) {
                    setError('Página não encontrada na API.');
                    navigate('/notfound');
                }
            } catch (err) {
                setError('Erro de conexão ou erro na API');
                navigate('/notfound');
            }
        };

        fetchData();
    }, [navigate]);

    if (error) {
        return (
            <div className="notfound-container">
                <h1>404 - Página Não Encontrada</h1>
                <p>{error}</p>
                <button className="go-home-btn" onClick={() => navigate('/')}>
                    Voltar para a página inicial
                </button>
            </div>
        );
    }

    // Se não houver erro, pode exibir um estado de carregamento ou a página normal
    return <div>Carregando...</div>;
};

export default NotFoundPage;
