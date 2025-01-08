import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import CadastroPage from '../Pages/CadastroPage/CadastroPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import EventPage from '../Pages/EventPage/EventPage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/cadastro' element={<CadastroPage />} />
                <Route path='/eventos' element={<EventPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>

    );
};

export default AppRoutes;