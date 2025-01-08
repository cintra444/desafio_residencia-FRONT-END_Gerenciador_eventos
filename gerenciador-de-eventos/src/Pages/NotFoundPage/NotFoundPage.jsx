import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const NotFoundPage = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1>404 - Not Found</h1>
                <p>A página que você está procurando não existe.</p>
            </div>
            <Footer />
        </>
    );
};

export default NotFoundPage;