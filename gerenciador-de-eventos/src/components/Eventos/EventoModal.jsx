import React, { useState } from 'react';
import './EventoModal.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const EventoModal = ({ show, handleClose, handleSave }) => {
    const [evento, setEvento] = useState({
        nome: '',
        data: '',
        localizacao: '',
        imagem: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvento({ ...evento, [name]: value });
    };

    const handleImageChange = (e) => {
        setEvento({ ...evento, imagem: e.target.files[0] });
    };

    const handleSubmit = (e) => {
         const { nome, data, localizacao, imagem } = evento;
         if (nome && data && localizacao && imagem) {
            handleSave(evento);
            handleClose();
        } else {
            alert('Preencha todos os campos!');
            return;
        }
        const novoEvento = { 
            id: Date.now(),
            nome: nome, 
            data: data, 
            localizacao: localizacao, 
            imagem: imagem ,
        };
        handleSave(novoEvento);
    };


    return (
        <>
        <Navbar/>
        <div className='evento-modal'>
            <div className='evento-modal-content'>
                <h2>Novo Evento</h2>
                <div className='evento-modal-body'>
                    <label>Nome do Evento</label>
                    <input
                        type='text'
                        value={evento.nome}
                        onChange={handleChange} 
                    />
                    <div className='evento-modal-body'>
                        <label>Data do Evento</label>
                        <input
                            type='date'
                            value={evento.data}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='evento-modal-body'>
                        <label>Localização do Evento</label>
                        <input
                            type='text'
                            value={evento.localizacao}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='evento-modal-body'>
                        <label>Imagem do Evento</label>
                        <input
                            type='file'
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className='evento-modal-actions'>
                        <button className='modal-button' onClick={handleSubmit}>Salvar</button>
                        <button className='modal-button-close' onClick={handleClose}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
                            </>
    );
};

export default EventoModal;