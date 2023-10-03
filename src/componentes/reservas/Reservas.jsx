import React, { useState } from "react"; 
import { Button, Form } from 'react-bootstrap';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import db from '../../servicios/firebase';
import swal from "sweetalert";
import './Reservas.css';


const Reservas
 = () => {
    const [reservas, setReservas] = useState([]);
    const [form, setForm] = useState({
        nombre: "",
        celular: "",
        fecha: "",
        hora: "",
        correo: "",
        asistentes:"",
    })

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    console.log('formulario', form)


    const onSave = (e) => {

        console.log('si estamos en el onSave')
        
        /*Guardar la reservacion*/
        e.preventDefault();
        addDoc(collection(db, 'reserva'), form).
            then(resp => swal("Reserva exitosa", "Gracias por tu reservacion", "success")).
            catch(err => swal("Error!", "Tu reserva no fue exitosa ", "error"))
            
    };

    

    return (
        <div className="reservas-contenedor">
            <div className="formulario-contenedor">
                <Form className="form-reserva" onSubmit={onSave}>
                    <Form.Label>Nombre Completo</Form.Label> 
                    <Form.Control type='text' name='nombre' value={form.nombre} onChange={onChangeInput} placeholder='Escribe tu nombre' />
                    <Form.Label>Celular</Form.Label> 
                    <Form.Control type='text' name='celular' value={form.celular} onChange={onChangeInput} placeholder='Escribe tu celular' />
                    <Form.Label>Fecha de Reservacion:</Form.Label>
                    <Form.Control type="date" name='fecha' value={form.fecha} onChange={onChangeInput} />
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" name='correo' value={form.correo} onChange={onChangeInput} placeholder='Escribe tu correo' />
                    <Form.Label>Hora de reserva</Form.Label>
                    <Form.Control type="time" name='hora' value={form.hora} onChange={onChangeInput} />
                    <Form.Label>Numero de Asistentes</Form.Label>
                    <Form.Control type="number" name='asistentes' value={form.asistentes} onChange={onChangeInput} />

                    <Button type="submit" className='formButton'>
                    Enviar Reserva 
                    </Button>
                </Form>
            </div>
            <div className='Column'>
                <table className='tabla-reserva'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>celular</th>
                            <th>Fecha</th>
                            <th>correo</th>
                            <th>Hora</th>
                            <th>asistentes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(reservas)}
                        {
                            reservas.map((reserva, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{reserva.nombre}</td>
                                        <td>{reserva.telefono}</td>
                                        <td>{reserva.fecha}</td>
                                        <td>{reserva.correo}</td>
                                        <td>{reserva.hora}</td>
                                        <td>{reserva.comensales}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Reservas;


