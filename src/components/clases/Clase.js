import React from 'react'
import {Card, Badge, Button} from 'react-bootstrap';
<<<<<<< HEAD
import { Link, NavLink} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function Clase({claseData}) {
    const history = useHistory();

    const asignarClase = (uuid) => {
=======
import { Link, NavLink, useHistory} from 'react-router-dom';

export default function Clase({claseData}) {

    const history = useHistory();

    const procesarAsignacion = (uuid) => {
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
        history.push(`/asignacion-clase/${uuid}`);
    }

    return (
        <Card className="mb-4">
            <Card.Header className="d-flex justify-content-between">
                <div>
                    <Badge variant="secondary" className="mr-2">Instructor: {claseData.instructor.apellidos} {claseData.instructor.nombres}</Badge>
                </div>
                <div>
<<<<<<< HEAD
                    <Button onClick={() => asignarClase(claseData.claseId)} 
                        variant="primary" size="sm" className="mr-2">Asignar</Button>
=======
                    <Button onClick={() => procesarAsignacion(claseData.claseId)} variant="primary" size="sm" className="mr-2">Asignar</Button>
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <Link to={`/asignacion-clase/${claseData.claseId}`}>Clase: {claseData.descripcion}</Link>
                </Card.Title>
                <Card.Text>
                    Ciclo: {claseData.ciclo}
                </Card.Text>
                <Card.Text>
                    Horario: {claseData.horario.horarioInicio} {claseData.horario.horarioFinal}
                </Card.Text>
                <Card.Text>
                    Cupo: Maximo: {claseData.cupoMaximo} Minimo: {claseData.cupoMinimo}
                </Card.Text>
                <Card.Text>
                    Ubicación: Salon {claseData.salon.nombreSalon} - {claseData.salon.descripcion}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
