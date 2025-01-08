import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>

            <div className="homepage">
                <h1>Bem-vindo ao Gerenciador de Eventos</h1>
                <p>
                    Este projeto foi desenvolvido para facilitar a organização e gerenciamento de eventos.
                    Aqui você pode criar, editar e visualizar eventos de forma simples e intuitiva.
                </p>
                <div className="homepage-buttons">
                    <Link to="/eventos" className="button">Ver Eventos</Link>
                    <Link to="/cadastro" className="button">Cadastre-se</Link>
                    <Link to="/login" className="button">Login</Link>
                </div>
            </div>

        </>
    );
};

export default HomePage;
