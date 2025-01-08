import React from 'react';
import './EventoItem.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const EventoItem = ({ evento, onDelete }) => {
    const handleEditClick = () => {
        alert('Funcionalidade ainda não implementada');
    };

    return (
        <>
        <Navbar/>
        <div className="evento-item">
            <img src={evento.imagem} alt={evento.nome} className="evento-imagem" />
            <h2 className="evento-nome">{evento.nome}</h2>
            <p className="evento-localizacao">{evento.localizacao}</p>
            <p className="evento-data">{evento.data}</p>
            <button onClick={handleEditClick} className="evento-editar-btn">Editar</button>
            <button onClick={() => onDelete(evento.id)} className="evento-excluir-btn">Excluir</button>
        </div>
        <Footer />
        </>
    );
};

export default EventoItem;