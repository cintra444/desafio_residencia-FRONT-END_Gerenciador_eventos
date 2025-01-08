import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <>
            
            <div className="notfound-container">
                <h1>404 - Página Não Encontrada</h1>
                <p>A página que você está procurando não existe.</p>
                <button className="go-home-btn" onClick={() => navigate('/')}>
                    Voltar para a página inicial
                </button>
            </div>
           
        </>
    );
};

export default NotFoundPage;
