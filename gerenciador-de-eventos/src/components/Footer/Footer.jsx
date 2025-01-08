import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 Gerenciador de Eventos. Todos os direitos reservados.</p>
                <nav className="footer-nav">
                    <a href="/about">Sobre</a>
                    <a href="/contact">Contato</a>
                    <a href="/privacy">Política de Privacidade</a>
                    <a href="/linkdin">Linkedin</a>
                    <a href="/github">Github</a>
                    <a href="/instagram">Instagram</a>
                    <a href="/email">Email</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;