import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navigation from './layouts/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CarrerasTecnicas from './pages/CarrerasTecnicas';
import Login from './pages/Login';
import store from './store';
import { Provider } from 'react-redux';
import checkForToken from './utils/checkForToken';
import PrivateRoute from './utils/PrivateRoute';

checkForToken();

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Navigation></Navigation>
                </div>
                <Container>
                    <Switch>
                        <PrivateRoute exact path="/carreras-tecnicas" component={CarrerasTecnicas}></PrivateRoute>
                        <Route exact path="/login" component={Login}></Route>
                    </Switch>
                </Container>
            </Router>
        </Provider>
    )
}

export default App;
