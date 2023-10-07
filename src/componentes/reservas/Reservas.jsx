import React, { useState, useLayoutEffect } from "react"; 
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

    const onSave = (e) => {
        /*Guardar la reservacion*/
        e.preventDefault();
        addDoc(collection(db, 'reserva'), form).
            then(resp => { 
                swal("Reserva exitosa", "Gracias por tu reservacion", "success");
                setForm({
                    nombre: "",
                    celular: "",
                    fecha: "",
                    hora: "",
                    correo: "",
                    asistentes:"",
                })
            }).catch(err => swal("Error!", "Tu reserva no fue exitosa ", "error"))
            
    };

    const cargarReservas = async () => {
        onSnapshot(collection(db, 'reserva'), (snapshot) => {
            const list = [];
            snapshot.forEach(doc => list.push({ ...doc.data(), id: doc.id }))
            setReservas(list);
        })
        console.log(reservas);
    }

    useLayoutEffect(() => {
        cargarReservas();
    }, [])

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
                            <th>Celular</th>
                            <th>Fecha</th>
                            <th>Correo</th>
                            <th>Hora</th>
                            <th>Asistentes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(reservas)}
                        {
                            reservas.map((reserva, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{reserva.nombre}</td>
                                        <td>{reserva.celular}</td>
                                        <td>{reserva.fecha}</td>
                                        <td>{reserva.correo}</td>
                                        <td>{reserva.hora}</td>
                                        <td>{reserva.asistentes}</td>
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


