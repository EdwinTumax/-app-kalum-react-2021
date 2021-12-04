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
import RegisterUser from './pages/RegisterUser';
import Clases from './pages/Clases';
import AsignacionClase from './pages/AsignacionClase';
<<<<<<< HEAD
import AsignacionesPorAlumno from './pages/AsignacionesPorAlumno';
=======
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235

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
                        <PrivateRoute exact path="/clases" component={Clases}></PrivateRoute>
                        <PrivateRoute exact path="/asignacion-clase/:uuid" component={AsignacionClase}></PrivateRoute>
<<<<<<< HEAD
                        <PrivateRoute exact path="/asignaciones-alumno" component={AsignacionesPorAlumno}></PrivateRoute>
=======
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/register-user" component = {RegisterUser}></Route>
                    </Switch>
                </Container>
            </Router>
        </Provider>
    )
}

export default App;
