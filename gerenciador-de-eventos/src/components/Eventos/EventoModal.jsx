import React, { useState } from 'react';
import './EventoModal.css';

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
        e.preventDefault(); 
        if(evento.nome && evento.data && evento.localizacao && evento.imagem) {
            handleSave(evento);
            handleClose();
        } else {
            alert('Preencha todos os campos!');
        }
        };

        if(!show) {
            return null;
        }
        
    return (
        <>
            
            <div className='evento-modal'>
                <div className='evento-modal-content'>
                    <h2>Criar Novo Evento</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Nome do Evento</label>
                        <input 
                        type='text' 
                        name='nome' 
                        value={evento.nome} 
                        onChange={handleChange}
                        required
                        />
                        <label>Data do Evento</label>
                        <input 
                        type='date' 
                        name='data' 
                        value={evento.data} 
                        onChange={handleChange}
                        required
                        />
                        <label>Localização do Evento</label>
                        <input 
                        type='text' 
                        name='localizacao' 
                        value={evento.localizacao} 
                        onChange={handleChange}
                        required
                        />
                        <label>Imagem do Evento</label>
                        <input 
                        type='file' 
                        name='imagem' 
                        onChange={handleImageChange}
                        required
                        />
                        <div className='evento-modal-actions'>

                            <button className='modal-button' type='submit'>Salvar</button>
                            <button className='modal-button' type='button' onClick={handleClose}>Cancelar</button>

                        </div>
                    </form>
                </div>
                </div>
                </>
                );
            };

export default EventoModal;