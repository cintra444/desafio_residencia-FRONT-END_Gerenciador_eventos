import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    // Função para realizar logout
    const handleLogout = () => {
        localStorage.removeItem('user'); // Limpa o usuário do localStorage
        window.location.reload(); // Redefine a página (opcional, dependendo do seu fluxo)
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" aria-label="Página inicial">Gerenciador de Eventos</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" aria-label="Página inicial">Home</Link>
                <Link to="/eventos" aria-label="Eventos">Eventos</Link>
                <Link to="/login" aria-label="Login">Login</Link>
                <Link to="/cadastro" aria-label="Cadastro">Cadastro</Link>
                <button onClick={handleLogout} className="navbar-logout" aria-label="Sair">Sair</button>
            </div>
        </nav>
    );
};

export default Navbar;
