import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import "../../DH/Areas/SST/Galeria.css"
import apiURL from '../../../utils/apiURL';

export default class Galeria extends Component {
    state = {
        img: []
    };
    componentDidMount() {
        fetch(`${apiURL}/vacunacions`)
            .then((res) => res.json())
            .then((res) => this.setState({ img: res }));
    }
    render() {
        const ft = this.state.img
        const fotos= ft.map((fotos)=>(fotos.fotos))[0]
        console.log(fotos)
        return (
            <Layout>
                <div className="galeria_contenedor">
                    {fotos && fotos.map((i) => (
                        <div key={i.id} className="galeria_item">
                            <img as="button" onClick={this.handleImg} className="galeria_img " src={`${i.url}`} />
                        </div> 
                    ))}
                </div>
            </Layout>
        )
    }
}
