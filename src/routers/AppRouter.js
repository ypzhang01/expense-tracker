import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../components/Home';
import Help from '../components/Help';
import Header from '../components/Header';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/create" component={AddExpensePage} />
                    <Route path="/edit/:id" component={EditExpensePage} />
                    <Route path="/help" component={Help} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;