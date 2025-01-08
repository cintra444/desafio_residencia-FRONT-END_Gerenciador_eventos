import React from 'react';
import './HomePage.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
    return (
        <>
        <Navbar />
        <div className="homepage">
            <h1>Bem-vindo ao Gerenciador de Eventos</h1>
            <p>
                Este projeto foi desenvolvido para facilitar a organização e gerenciamento de eventos. 
                Aqui você pode criar, editar e visualizar eventos de forma simples e intuitiva.
            </p>
        </div>
        <Footer/>   
        </>
    );
};

export default HomePage;