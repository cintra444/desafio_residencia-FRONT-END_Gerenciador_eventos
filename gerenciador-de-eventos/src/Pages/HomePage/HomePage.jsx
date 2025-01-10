import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <h1>Bem-vindo ao sistema</h1>
            <p>Por favor, faça login para acessar os eventos.</p>
        </div>
    );
};

export default HomePage;
