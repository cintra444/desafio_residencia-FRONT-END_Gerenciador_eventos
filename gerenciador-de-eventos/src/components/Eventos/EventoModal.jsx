import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './EventoModal.css';

const EventoModal = ({ show, handleClose, handleSave }) => {
    const [evento, setEvento] = useState({
        nome: '',
        data: '',
        localizacao: '',
        imagem: null
    });

    const handleChange = (e) => {
        if (!nome || !data || !localizacao) {
            alert('Preencha todos os campos!');
            return;
        }

        const novoEvento = {
            id: Date.now(),
            nome,
            data,
            localizacao,
            imagem,
        };

        handleSave(novoEvento);
    };

    return (
        <div className='evento-modal'>
            <div className='evento-modal-content'>
                <h2>Novo Evento</h2>
                <div className='evento-modal-body'>
                    <label>Nome do Evento</label>
                    <input
                        type='text'
                        value={nome}
                        onChange={(e) => setEvento({ ...evento, nome: e.target.value })}
                    />
                    <div className='evento-modal-body'>
                        <label>Data do Evento</label>
                        <input
                            type='date'
                            value={data}
                            onChange={(e) => setEvento({ ...evento, data: e.target.value })}
                        />
                    </div>
                    <div className='evento-modal-body'>
                        <label>Localização do Evento</label>
                        <input
                            type='text'
                            value={localizacao}
                            onChange={(e) => setEvento({ ...evento, localizacao: e.target.value })}
                        />
                    </div>
                    <div className='evento-modal-body'>
                        <label>Imagem do Evento</label>
                        <input
                            type='file'
                            onChange={(e) => setEvento({ ...evento, imagem: e.target.files[0] })}
                        />
                    </div>
                    <div className='evento-modal-actions'>
                        <button className='modal-button' onClick={() => handleSave(evento)}>Salvar</button>
                        <button className='modal-button-close' onClick={handleClose}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventoModal;