import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/authActions';

export default function Navigation() {
    const loggedIn = useSelector(state => state.auth.loggedIn);
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as = {NavLink} to={'/'}>
                Kalum
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-menu">
            </Navbar.Toggle>
            <Navbar.Collapse id="main-menu">
                <Nav className="mr-auto">
                    {loggedIn && <Nav.Link as = {NavLink} to="/clases">Clases</Nav.Link>}                                        
<<<<<<< HEAD
                    {loggedIn && <Nav.Link as = {NavLink} to="/clases">Carreras Técnicas</Nav.Link>}
                    {loggedIn && <Nav.Link as = {NavLink} to="/asignaciones-alumno">Mis asignaciones</Nav.Link>}                                        
=======
                    {loggedIn && <Nav.Link as = {NavLink} to="/clases">Carreras Técnicas</Nav.Link>}                                        
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
                </Nav>                
                <Nav>
                    {
                        !loggedIn ? 
                            (<React.Fragment>
                                <Nav.Link as = {NavLink} to="/login">
                                    Iniciar Sesion
                                </Nav.Link>
                            </React.Fragment>)
                            :
                            (<NavDropdown title={`${user.apellidos} ${user.nombres}`} id="menu-dropdown">
                                <NavDropdown.Item>Inscripción</NavDropdown.Item>
                                <NavDropdown.Item onClick={ () => dispatch(logoutUser())}>Logout</NavDropdown.Item>
                            </NavDropdown>)
                    }
                </Nav>                
            </Navbar.Collapse>
        </Navbar>
    )
}
