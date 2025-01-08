import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import CreateEventPage from './pages/CreateEventPage';
import NotFoundPage from './pages/NotFoundPage';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/event/:id" component={EventPage} />
                <Route path="/create-event" component={CreateEventPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default AppRoutes;