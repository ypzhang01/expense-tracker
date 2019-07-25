import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'
import Login from '../components/Login'
import Home from '../components/Home';
import Help from '../components/Help';
import Header from '../components/Header';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute'

export const history = createBrowserHistory()

function App() {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute path="/dashboard" component={Home} />
                    <PrivateRoute path="/create" component={AddExpensePage} />
                    <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                    <Route path="/help" component={Help} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;