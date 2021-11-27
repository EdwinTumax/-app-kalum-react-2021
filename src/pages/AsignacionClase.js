import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios';
import { Card, Col, Container } from 'react-bootstrap';
import AsignacionClaseForm from '../components/forms/AsignacionClaseForm';
import { ASIGNACIONES_ENDPOINT, CLASES_ENPOINT } from '../utils/endPoints';
import validator from 'validator';
import { isObjectEmpty } from '../utils/helpers';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

export default function AsignacionClase() {
    const [errores,setErrores] = useState({});
    const [clase, setClase] = useState(null);
    const [registro,setRegistro] = useState({fechaAsignacion: '', alumno: {carne: ''}, clase: {claseId: ''}});
    const user = useSelector(state => state.auth.user);
    const history = useHistory();    
    const { uuid } = useParams()
    useEffect(() => {
        axios.get(`${CLASES_ENPOINT}/${uuid}`).then(response => {
            setClase(response.data);
        })
    },[]);
    const ejecutarRegistro = async () => {
        const errores = {};
        setErrores(errores);
        if(validator.isEmpty(user.carne)){
            errores.carne = 'El número de carne no es válido';
        }
        if(validator.isEmpty(uuid)){
            errores.uuid = 'El id de la clase no es válido';
        }
        if(!isObjectEmpty(errores)){
            setErrores = (errores);
            return;
        }
        console.log('inciando proceso registro');
        try{
            registro.fechaAsignacion = moment(new Date()).format('YYYY-MM-DD');
            registro.alumno.carne = user.carne;
            registro.clase.claseId = uuid;
            const response = await axios.post(`${ASIGNACIONES_ENDPOINT}`,registro);
            Swal.fire({
                icon: 'success',
                title: 'Asignación de clase',
                text: `${response.data.Mensaje}`,
                footer: '<a href="#">Kalum v1.0.0</a>'
            }).then(result => {
                if(result.isConfirmed){
                    history.push('/clases');
                }
            });
        }catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Asignación de clase',
                text: `${errores.message}`,
                footer: '<a href="#">Kalum v1.0.0</a>'
            }).then(result => {
                if(result.isConfirmed){
                    setErrores({message: error.response.data.Mensaje});
                }
            });
        }
    }
    return (
        <Container className="mt-5">
            <Col sm="12" md={{span:8,offset:2}} lg={{span:6, offset:3}}>
                <Card body>
                    <h3>Confirmación de registro</h3>
                    <hr></hr>
                    {
                       clase && <AsignacionClaseForm parametroDescripcion={clase.descripcion} errores={errores} onSubmitCallback={ejecutarRegistro}></AsignacionClaseForm>
                    }
                    <div className="mt-4">
                        <Link to={"/clases"}>Regresar</Link>
                    </div>
                </Card>
            </Col>
        </Container>        
    )
}
