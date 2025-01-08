import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import CadastroPage from './Pages/CadastroPage/CadastroPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import User from './components/User/User';
import EventoList from './components/Eventos/EventoList';
import NotFoundPage from './pages/NotFoundPage';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/cadastro" component={CadastroPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/user" component={User} />
                <Route path="/eventos" component={EventoList} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default AppRoutes;