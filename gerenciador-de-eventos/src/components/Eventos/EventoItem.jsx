import React from 'react';
import './EventoItem.css';

const EventoItem = ({ evento, onDelete }) => {
    const handleDeleteClick = () => {
        onDelete(evento.id); 
    };

    return (
        <div className="evento-item">
            <img
                src={evento.imagem || "default-image.jpg"}
                alt={evento.nome || "Evento sem nome"}
                className="evento-imagem"
            />
            <h2 className="evento-nome">{evento.nome}</h2>
            <p className="evento-localizacao">{evento.localizacao}</p>
            <p className="evento-data">{evento.data}</p>
            <button onClick={handleDeleteClick} className="evento-excluir-btn">Excluir</button>
        </div>
    );
};

export default EventoItem;
