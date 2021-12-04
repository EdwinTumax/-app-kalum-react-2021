import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

export default function AsignacionClaseForm({parametroDescripcion,errores,
        onSubmitCallback,user}) {
    const [carne,setCarne] = useState(user.carne);
    const [apellidos,setApellidos] = useState(user.apellidos);
    const [nombres,setNombres] = useState(user.nombres);
    const [descripcion, setDescripcion] = useState(parametroDescripcion);
    
    const registrarAsignacion = (e) => {
        e.preventDefault();
        onSubmitCallback();
    }

    return (
        <Form onSubmit={registrarAsignacion}>
            <Form.Group control = "carne">
                <Form.Label>Carné</Form.Label>
                <Form.Control type="text" value={carne} 
                    onChange={ e => setCarne(e.target.value)} 
                    placeholder="Número de Carné" isInvalid={errores.carne}/>
                <Form.Control.Feedback type="invalid">
                    {errores.carne}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group control = "Apellidos">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" value={apellidos} onChange={ e => setApellidos(e.target.value)}  placeholder="Apellidos de alumno" isInvalid={errores.apellidos}/>
                <Form.Control.Feedback type="invalid">
                    {errores.apellidos}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group control = "Nombres">
                <Form.Label>Nombres</Form.Label>
                <Form.Control type="text" value={nombres} onChange={ e => setNombres(e.target.value)} placeholder="Nombres de alumno" isInvalid={errores.nombres}/>
                <Form.Control.Feedback type="invalid">
                    {errores.nombres}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group control = "Clase">
                <Form.Label>Clase</Form.Label>
                <Form.Control type="text" value={descripcion} onChange={ e => setDescripcion(e.target.value)} placeholder="Descripcion del curso" isInvalid={errores.descripcion}/>
                <Form.Control.Feedback type="invalid">
                    {errores.descripcion}
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">Crear registro</Button>
        </Form>
    )
}
