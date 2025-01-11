import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    
    const handleLogout = () => {
        localStorage.removeItem('admin'); 
        navigate('/login'); 
    };

    // Verifica se o administrador está logado
    const isAuthenticated = localStorage.getItem('admin');

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" aria-label="Página inicial">Gerenciador de Eventos</Link>
            </div> 
            <div className="navbar-links">
                <Link to="/" aria-label="Página inicial">Home</Link>
                {isAuthenticated && <Link to="/eventos" aria-label="Eventos">Eventos</Link>}
                {!isAuthenticated ? (
                    <>
                        <Link to="/login" aria-label="Login">Login</Link>
                        <Link to="/cadastro" aria-label="Cadastro">Cadastro</Link>
                    </>
                ) : (
                    <button onClick={handleLogout} className="navbar-logout" aria-label="Sair">Sair</button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
