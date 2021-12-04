import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import validator from 'validator';
import axios from 'axios';
import { isObjectEmpty } from '../utils/helpers';
import { Col, Container, Card, Alert } from 'react-bootstrap';
import AsignacionClaseForm from '../components/forms/AsignacionClaseForm';
import { ASIGNACIONES_ENDPOINT, CLASES_ENPOINT } from '../utils/endPoints';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import moment from 'moment';

export default function AsignacionClase() {
    const history = useHistory();
    const [errores, setErrores] = useState({});    
    const user = useSelector(state => state.auth.user);
    const { uuid } = useParams();
    const [clase, setClase] = useState(null);
    const [fetching,setFetching] = useState(true);
    const [registro,setRegistro] = useState({fechaAsignacion: '', alumno: { carne: ''},clase: {claseId:''}});
    useEffect(() => {
        axios.get(`${CLASES_ENPOINT}/${uuid}`).then(response => {
            setClase(response.data);            
            setFetching(false);
        }).catch(e => {
            setFetching(false);
        });
    },[uuid]);

    const registrarAsignacion = async() => {
        const errores = {};
        setErrores(errores);
        if(validator.isEmpty(user.carne)){
            errores.carne = 'El número de carné no es valido';
        }
        if(validator.isEmpty(uuid)){
            errores.uuid = 'El id del curso no es valido';
        }
        if(!isObjectEmpty(errores)){
            setErrores = (errores);
            return;
        }
        try{
            registro.fechaAsignacion = moment(new Date()).format("YYYY-MM-DD");
            registro.alumno.carne = user.carne;
            registro.clase.claseId = uuid;
            const response = await axios.post(`${ASIGNACIONES_ENDPOINT}`,registro);
            console.log(registro);
            Swal.fire({
                icon: 'success',
                title: 'Registro de clase',
                text: `${response.data.Mensaje}`,
                footer: '<a href="#">Kalum v1.0.0</a>'
            }).then(result => {
                if(result.isConfirmed){
                    history.push('/asignaciones-alumno');    
                }
            })
        } catch(error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Registro de clase',
                text: `${errores.message}`,
                footer: '<a href="#">Kalum v1.0.0</a>'
            }).then(result => {
                if(result.isConfirmed){
                    setErrores({ message: error.response.data.Mensaje});
                }
            });
        }
    }

    return (
        <Container className="mt-5">
            <Col sm="12" md={{span:8,offset:2}} lg={{span:6, offset:3}}>
                <Card body>
                    { errores.message && <Alert variant="danger">{errores.message}</Alert>}
                    <h3>Confirmación de registro</h3>
                    <hr></hr>
                    {
                        clase && <AsignacionClaseForm 
                            parametroDescripcion={clase.descripcion} 
                            errores={errores} 
                            onSubmitCallback={registrarAsignacion} 
                            user={user} ></AsignacionClaseForm>
                    }                    
                    <div className="mt-4">
                        <Link to={"/clases"}>Listado de clases</Link>
                    </div>
                </Card>
            </Col>
        </Container>
    )
}
