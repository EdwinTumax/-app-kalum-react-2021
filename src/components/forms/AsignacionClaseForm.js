import React, { useState } from 'react'
<<<<<<< HEAD
import { Form, Button } from 'react-bootstrap';

export default function AsignacionClaseForm({parametroDescripcion,errores,
        onSubmitCallback,user}) {
    const [carne,setCarne] = useState(user.carne);
    const [apellidos,setApellidos] = useState(user.apellidos);
    const [nombres,setNombres] = useState(user.nombres);
    const [descripcion, setDescripcion] = useState(parametroDescripcion);
    
=======
import { Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux';

export default function AsignacionClaseForm({parametroDescripcion, errores, onSubmitCallback}) {
    const user = useSelector(state => state.auth.user);
    const [carne,setCarne] = useState(user.carne);
    const [apellidos,setApellidos] = useState(user.apellidos);
    const [nombres, setNombres] = useState(user.nombres);
    const [descripcion, setDescripcion] = useState(parametroDescripcion);
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
    const registrarAsignacion = (e) => {
        e.preventDefault();
        onSubmitCallback();
    }
<<<<<<< HEAD

    return (
        <Form onSubmit={registrarAsignacion}>
            <Form.Group control = "carne">
                <Form.Label>Carné</Form.Label>
                <Form.Control type="text" value={carne} 
                    onChange={ e => setCarne(e.target.value)} 
                    placeholder="Número de Carné" isInvalid={errores.carne}/>
=======
    return (
        <Form onSubmit={registrarAsignacion}>
            <Form.Group control="carne">
                <Form.Label>Carné</Form.Label>
                <Form.Control type="text" value={carne} onChange={e => setCarne(e.target.value)} placeholder="Número de carné" 
                    isInvalid={errores.carne}/>
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
                <Form.Control.Feedback type="invalid">
                    {errores.carne}
                </Form.Control.Feedback>
            </Form.Group>
<<<<<<< HEAD
            <Form.Group control = "Apellidos">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" value={apellidos} onChange={ e => setApellidos(e.target.value)}  placeholder="Apellidos de alumno" isInvalid={errores.apellidos}/>
=======
            <Form.Group control="apellidos">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" value={apellidos} onChange={e => setApellidos(e.target.value)} placeholder="Apellidos del alumno" 
                    isInvalid={errores.apellidos}/>
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
                <Form.Control.Feedback type="invalid">
                    {errores.apellidos}
                </Form.Control.Feedback>
            </Form.Group>
<<<<<<< HEAD
            <Form.Group control = "Nombres">
                <Form.Label>Nombres</Form.Label>
                <Form.Control type="text" value={nombres} onChange={ e => setNombres(e.target.value)} placeholder="Nombres de alumno" isInvalid={errores.nombres}/>
=======
            <Form.Group control="nombres">
                <Form.Label>Nombres</Form.Label>
                <Form.Control type="text" value={nombres} onChange={e => setNombres(e.target.value)} placeholder="Nombres del alumno" 
                    isInvalid={errores.nombres}/>
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
                <Form.Control.Feedback type="invalid">
                    {errores.nombres}
                </Form.Control.Feedback>
            </Form.Group>
<<<<<<< HEAD
            <Form.Group control = "Clase">
                <Form.Label>Clase</Form.Label>
                <Form.Control type="text" value={descripcion} onChange={ e => setDescripcion(e.target.value)} placeholder="Descripcion del curso" isInvalid={errores.descripcion}/>
=======
            <Form.Group control="descripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" value={descripcion} onChange={e => setDescripcion(e.target.value)} placeholder="Nombre de la clase" 
                    isInvalid={errores.descripcion}/>
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
                <Form.Control.Feedback type="invalid">
                    {errores.descripcion}
                </Form.Control.Feedback>
            </Form.Group>
<<<<<<< HEAD
            <Button variant="primary" type="submit">Crear registro</Button>
=======
            <Button variant="primary" type="submit">Generar registro</Button>
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
        </Form>
    )
}
