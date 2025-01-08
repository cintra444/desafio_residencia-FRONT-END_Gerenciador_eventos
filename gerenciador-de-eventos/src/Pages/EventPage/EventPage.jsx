import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const EventPage = () => {
    const { id } = useParams();

    return (
        <>
        <Navbar/>
        <div>
            <h1>Event Page</h1>
            <p>Detalhes do evento com ID: {id}</p>
        </div>
        <Footer/>
        </>
    );
};

export default EventPage;