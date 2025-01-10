import React, { useContext, useEffect } from 'react';
import { UserActionContext } from './UserActionContext';
import EventoModal from '../EventoModal/EventoModal';
import './User.css';

const User = () => {
    const { eventos, fetchEventos, addEvento, editEvento, deleteEvento } = useContext(UserActionContext);
    const [showModal, setShowModal] = useState(false);
    const [selectedEvento, setSelectedEvento] = useState(null);

    useEffect(() => {
        fetchEventos();
    }, [fetchEventos]);

    const handleEdit = (evento) => {
        setSelectedEvento(evento);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Você tem certeza que deseja excluir este evento?')) {
            deleteEvento(id);
        }
    };

    const handleAddEvento = () => {
        setSelectedEvento(null);
        setShowModal(true);
    };

    const handleSaveEvento = (evento) => {
        if (!evento.nome || !evento.data || !evento.localizacao || !evento.imagem) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        if (selectedEvento) {
            editEvento(evento);
        } else {
            addEvento(evento);
        }
        setShowModal(false);
    };

    return (
        <div className="user-page">
            <h1>Meus Eventos</h1>
            <button onClick={handleAddEvento} className="add-event-button">Adicionar Evento</button>
            <div className="eventos-list">
                {eventos.map(evento => (
                    <div key={evento.id} className="evento-card">
                        <img src={evento.imagem} alt={evento.titulo} className="evento-img" />
                        <h2>{evento.titulo}</h2>
                        <p>Data: {evento.data}</p>
                        <p>Localização: {evento.localizacao}</p>
                        <button onClick={() => handleEdit(evento)} className="edit-btn">Editar</button>
                        <button onClick={() => handleDelete(evento.id)} className="delete-btn">Excluir</button>
                    </div>
                ))}
            </div>
            {showModal && (
                <EventoModal
                    evento={selectedEvento}
                    onSave={handleSaveEvento}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default User;
