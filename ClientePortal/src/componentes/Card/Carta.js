import React from 'react'
import { Card, Image, Divider, Button } from 'semantic-ui-react'
import "../Card/Carta.css"



export default function Carta(props) {
  const { children } = props;
  return (
    <Card>
      <Image size={props.size} src={props.img}/>
      <Card.Content>
        CONVOCATORIA
      <Card.Header>{props.titulo}</Card.Header>
        <Card.Meta>
          <span className="date">{props.cargo}</span>
        </Card.Meta>
        <Card.Description>
          {props.intro}
          <br />
          <br />
          {props.direccion}
          <br />
          <br />
          <strong>
            {props.motivacion}
          </strong>
          <br />
        ​Condiciones para participar en el proceso:
        <br />
          <br />
          <div className="ul-carta">
            <ul>
              <li>{props.condicion1}</li>
              <li>{props.condicion2}</li>
              <li>{props.condicion3}</li>
            </ul>
          </div>

          <h5>{props.fecha}</h5>
        </Card.Description>
        <Divider hidden />
        <Button href={props.href} target="_blank">Aplica ahora</Button>
      </Card.Content>
    </Card>
  )
}
