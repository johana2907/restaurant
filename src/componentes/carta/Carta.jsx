import React from 'react';
import './carta.css';
import { hamburguesas, bebidas, postres } from './productos';
import { Card, Button } from 'react-bootstrap'



const Carta = () => {
  return (
  <div className='carta-contenedor'>
    <h3>NUESTRAS HAMBURGUESAS</h3>
    <div className='carta-productos'>{hamburguesas.map( (h, index) => {
      return(
        <Card
          className='card-menu'
          key={index}
          style={{ width: '18rem', 
            background: 'transparent', 
            color: "white", 
            border: "1px solid #ad7626", 
            padding: "14px" }}
        >
        <Card.Img variant="top" src={h.img} alt={h.nombre} style={{ maxWidth: '250px', background: 'white' }} />
        <Card.Body>
          <Card.Title>{h.nombre}</Card.Title>
          <Card.Text>
          {h.descripcion}
          </Card.Text>
          <Button variant="primary">{h.precio}</Button>
        </Card.Body>
      </Card>
      )
    })}
    </div>
    <h3>BEBIDAS</h3>
    <div className='carta-productos'>{bebidas.map( (h, index) => {
      return(
        <Card
          className='card-menu'
          key={index}
          style={{ width: '18rem', 
            background: 'transparent', 
            color: "white", 
            border: "1px solid #ad7626", 
            padding: "14px" }}
        >
        <Card.Img variant="top" src={h.img} alt={h.nombre} style={{ maxWidth: '250px', background: 'white' }} />
        <Card.Body>
          <Card.Title>{h.nombre}</Card.Title>
          <Card.Text>
          {h.descripcion}
          </Card.Text>
          <Button variant="primary">{h.precio}</Button>
        </Card.Body>
      </Card>
      )
    })}
    </div>
    <h3>POSTRES</h3>
    <div className='carta-productos'>{postres.map( (h, index) => {
      return(
        <Card
          className='card-menu'
          key={index}
          style={{ width: '18rem', 
            background: 'transparent', 
            color: "white", 
            border: "1px solid #ad7626", 
            padding: "14px" }}
        >
        <Card.Img variant="top" src={h.img} alt={h.nombre} style={{ maxWidth: '250px', background: 'white' }} />
        <Card.Body>
          <Card.Title>{h.nombre}</Card.Title>
          <Card.Text>
          {h.descripcion}
          </Card.Text>
          <Button variant="primary">{h.precio}</Button>
        </Card.Body>
      </Card>
      )
    })}
    </div>
    
  </div>
  )
};

export default Carta;
