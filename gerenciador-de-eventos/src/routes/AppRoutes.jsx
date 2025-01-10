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
                {/* A HomePage deve ser renderizada com base no login */}
                <Route index element={<HomePage />} />
                
                {/* Página de Login */}
                <Route path='/login' element={<LoginPage />} />

                {/* Página de Cadastro */}
                <Route path='/cadastro' element={<CadastroPage />} />

                {/* Página de Eventos com parâmetro id */}
                <Route path='/eventos/:id' element={<EventPage />} />

                {/* Página para rotas não encontradas */}
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
