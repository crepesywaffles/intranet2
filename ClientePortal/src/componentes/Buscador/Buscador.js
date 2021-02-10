import React, { Component } from 'react'
import apiURL from "../../utils/apiURL";
import "../Buscador/Buscador.css"

export default class Buscador extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            user: [],
            value: ""
        };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        fetch(`${apiURL}/empleados?documento_contains=${this.state.value}`)
            .then((res) => res.json())
            .then((res) => this.setState({ user: res }));
    }


    // componentDidMount() {
        
    // }



    render() {

        const users = this.state.user
        console.log(this.state.value)
        return (
            <div>
                <input type="search" value={this.state.value} onChange={this.handleChange} placeholder="Ingrese el documento" />
                <div className="usuarios">
                    <table className="tabla-u">
                        <tr>
                            <th>Nombre</th>
                            <th>Documento</th>
                            <th>Cumpleaños</th>
                            <th>Entrenamiento</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Final</th>
                            <th>Lugar Entrenamiento</th>
                            <th>Calificación</th>
                        </tr>
                        {users && users
                            
                            .map((u) => (
                                <tr key={u.documento}>
                                    <td>{u.nombre}</td>
                                    <td>{u.documento}</td>
                                    <td>{u.fecha_nacimiento}</td>
                                    <td>
                                        {u.Entrenamientos.map((e) => (<tr>{e.Nombre}</tr>))}
                                    </td>
                                    <td>
                                        {u.Entrenamientos.map((e) => (<tr>{e.fecha_inicio}</tr>))}
                                    </td>
                                    <td>
                                        {u.Entrenamientos.map((e) => (<tr>{e.fecha_final}</tr>))}
                                    </td>
                                    <td>
                                        {u.Entrenamientos.map((e) => (<tr>{e.lugar_de_entrenamiento}</tr>))}
                                    </td>
                                    <td>
                                        {u.Entrenamientos.map((e) => (<tr>{e.calificacion}</tr>))}
                                    </td>
                                </tr>
                            ))}
                    </table>
                </div>
            </div>
        )
    }
}

