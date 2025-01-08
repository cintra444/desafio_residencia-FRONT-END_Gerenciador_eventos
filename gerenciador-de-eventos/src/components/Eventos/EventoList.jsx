import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventoList.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const EventoList = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        axios.get('/api/eventos')
            .then(response => {
                setEventos(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the events!', error);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div>
                <h1>Lista de Eventos</h1>
                <ul>
                    {eventos.map(evento => (
                        <li key={evento.id}>
                            <h2>{evento.nome}</h2>
                            <p>{evento.descricao}</p>
                            <p>{evento.data}</p>
                            <p>{evento.localizacao}</p>
                            <img src={evento.imagem} alt={evento.nome} />
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default EventoList;