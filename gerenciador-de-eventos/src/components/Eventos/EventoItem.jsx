import React from 'react';
import './EventoItem.css';

const EventoItem = ({ evento, onDelete }) => {
    const handleEditClick = () => {
        alert('Funcionalidade ainda não implementada');
    };

    const handleDeleteClick = () => {
        onDelete(evento.id);
    };

    return (
        <>
      
        <div className="evento-item">
            <img src={evento.imagem || "defaut-image.jpg"} alt={evento.nome || "Evento sem nome"} className="evento-imagem" />
            <h2 className="evento-nome">{evento.nome}</h2>
            <p className="evento-localizacao">{evento.localizacao}</p>
            <p className="evento-data">{evento.data}</p>
            <button onClick={handleEditClick} className="evento-editar-btn">Editar</button>
            <button onClick={() => onDelete(evento.id)} className="evento-excluir-btn">Excluir</button>
        </div>
    
        </>
    );
};

export default EventoItem;