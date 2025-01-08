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
        e.preventDefault(); // Evita recarregamento da página

        const { nome, data, localizacao, imagem } = evento;
        
        if (nome && data && localizacao && imagem) {
            // Cria o evento com ID baseado no timestamp (não é ideal para produção, mas pode servir aqui)
            const novoEvento = { 
                id: Date.now(),
                nome: nome, 
                data: data, 
                localizacao: localizacao, 
                imagem: imagem
            };
            
            // Chama a função handleSave passando o novo evento
            handleSave(novoEvento);
            handleClose(); // Fecha o modal após salvar
        } else {
            alert('Preencha todos os campos!');
        }
    };

    return (
        <>
            
            <div className='evento-modal'>
                <div className='evento-modal-content'>
                    <h2>Novo Evento</h2>
                    <div className='evento-modal-body'>
                        <label>Nome do Evento</label>
                        <input
                            type='text'
                            name='nome'
                            value={evento.nome}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='evento-modal-body'>
                        <label>Data do Evento</label>
                        <input
                            type='date'
                            name='data'
                            value={evento.data}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='evento-modal-body'>
                        <label>Localização do Evento</label>
                        <input
                            type='text'
                            name='localizacao'
                            value={evento.localizacao}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='evento-modal-body'>
                        <label>Imagem do Evento</label>
                        <input
                            type='file'
                            name='imagem'
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className='evento-modal-actions'>
                        <button className='modal-button' onClick={handleSubmit}>Salvar</button>
                        <button className='modal-button-close' onClick={handleClose}>Cancelar</button>
                    </div>
                </div>
            </div>
          
        </>
    );
};

export default EventoModal;
