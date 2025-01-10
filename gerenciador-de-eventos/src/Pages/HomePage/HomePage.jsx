import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token'); // Verifique se o token existe
        if (token) {
            const admin = JSON.parse(localStorage.getItem('admin'));
            if (admin) {
                navigate(`/eventos/${admin.id}`); // Redireciona para a página de eventos com o ID do admin
            }
        }
    }, [navigate]);

    return (
        <div className="home-page">
            <h1>Bem-vindo ao sistema de gerenciamento de eventos!</h1>
            <div className="home-div">
                <h2>Organizar eventos nunca foi tão fácil e eficiente.
                    Com nossa plataforma, você tem em mãos todas as ferramentas necessárias para planejar,
                    gerenciar e executar eventos de sucesso. Seja para uma pequena reunião corporativa ou um grande festival, nosso sistema intuitivo e poderoso facilita cada etapa do processo</h2>
            </div>
            <p>Por favor, faça login para acessar os eventos.</p>
        </div>
    );
};

export default HomePage;
