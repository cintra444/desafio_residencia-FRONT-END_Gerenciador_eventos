import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Gerenciador de Eventos</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/eventos">Eventos</Link>
                <Link to="/">Sair</Link>
            </div>
        </nav>
    );
};

export default Navbar;