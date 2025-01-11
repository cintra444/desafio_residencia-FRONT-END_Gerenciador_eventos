import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HomePage from '../Pages/HomePage/HomePage';
import CadastroPage from '../Pages/CadastroPage/CadastroPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import EventPage from '../Pages/EventPage/EventPage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <div className="App">
        <Navbar />
                <main className='main-content'>
            <Routes>        
                <Route index element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/cadastro' element={<CadastroPage />} />
                <Route path='/eventos/:id' element={<EventPage />} />

                {/* Página para rotas não encontradas */}
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            </main>
            <Footer />
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;
