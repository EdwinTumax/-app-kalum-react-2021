import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
<<<<<<< HEAD
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
=======
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
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
        }
        if(!isObjectEmpty(errores)){
            setErrores = (errores);
            return;
        }
<<<<<<< HEAD
        try{
            registro.fechaAsignacion = moment(new Date()).format("YYYY-MM-DD");
            registro.alumno.carne = user.carne;
            registro.clase.claseId = uuid;
            const response = await axios.post(`${ASIGNACIONES_ENDPOINT}`,registro);
            console.log(registro);
            Swal.fire({
                icon: 'success',
                title: 'Registro de clase',
=======
        console.log('inciando proceso registro');
        try{
            registro.fechaAsignacion = moment(new Date()).format('YYYY-MM-DD');
            registro.alumno.carne = user.carne;
            registro.clase.claseId = uuid;
            const response = await axios.post(`${ASIGNACIONES_ENDPOINT}`,registro);
            Swal.fire({
                icon: 'success',
                title: 'Asignación de clase',
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
                text: `${response.data.Mensaje}`,
                footer: '<a href="#">Kalum v1.0.0</a>'
            }).then(result => {
                if(result.isConfirmed){
<<<<<<< HEAD
                    history.push('/asignaciones-alumno');    
                }
            })
        } catch(error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Registro de clase',
=======
                    history.push('/clases');
                }
            });
        }catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Asignación de clase',
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
                text: `${errores.message}`,
                footer: '<a href="#">Kalum v1.0.0</a>'
            }).then(result => {
                if(result.isConfirmed){
<<<<<<< HEAD
                    setErrores({ message: error.response.data.Mensaje});
=======
                    setErrores({message: error.response.data.Mensaje});
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
                }
            });
        }
    }
<<<<<<< HEAD

=======
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
    return (
        <Container className="mt-5">
            <Col sm="12" md={{span:8,offset:2}} lg={{span:6, offset:3}}>
                <Card body>
<<<<<<< HEAD
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
=======
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
>>>>>>> ec64b409081217a3599d3c3e4044db5be26d0235
    )
}
