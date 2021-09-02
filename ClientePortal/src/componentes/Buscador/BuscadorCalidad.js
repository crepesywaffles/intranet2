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
        fetch(`${apiURL}/productos?producto_contains=${this.state.value}`)
            .then((res) => res.json())
            .then((res) => this.setState({ user: res }));
    }





    render() {

        const users = this.state.user
        console.log(users)
        return (
            <div>
                <input type="search" value={this.state.value} onChange={this.handleChange} placeholder="Ingrese el producto a consultar" />
                <div className="usuarios container-fluid">
                    <table className="tabla-u container-fluid">
                        <tr>
                            <th>Producto</th>
                            <th>Carta</th>
                            <th>vegetariano</th>
                            <th>vegano</th>
                            <th>Alergenos</th>
                            <th>Ingredientes especiales</th>
                        </tr>
                        {users && users
                            
                            .map((u) => (
                                <tr key={u.producto}>
                                    <td>{u.producto}</td>
                                    <td>{u.Cartas}</td>
                                    <td>{ u.vegetariano ? "si" : "no"}</td>
                                    <td>{ u.vegano ? u.vegano : "no"}</td>
                                    <td>
                                        {u.alergenos.map((e) => (<tr>{e.alergeno}</tr>))}
                                    </td>
                                    <td>
                                        {u.ingredientes_especiales.map((e) => (<tr>{e.ingredienteEsp  ?   e.ingredienteEsp : "no contiene"  }</tr>))}
                                    </td>
                                </tr>
                            ))}
                    </table>
                </div>
            </div>
        )
    }
}

