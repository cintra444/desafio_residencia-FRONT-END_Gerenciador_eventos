import React from 'react';
import { Link } from 'react-router-dom';  
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 Gerenciador de Eventos. Todos os direitos reservados.</p>
                <nav className="footer-nav">
                    <Link to="/about" aria-label="Sobre">Sobre</Link>
                    <Link to="/contact" aria-label="Contato">Contato</Link>
                    <Link to="/privacy" aria-label="Política de Privacidade">Política de Privacidade</Link>
                    <Link to="/linkedin" aria-label="LinkedIn">Linkedin</Link>
                    <Link to="/github" aria-label="GitHub">GitHub</Link>
                    <Link to="/instagram" aria-label="Instagram">Instagram</Link>
                    <Link to="/email" aria-label="Email">Email</Link>
                </nav> 
            </div>
        </footer>
    );
};

export default Footer;
