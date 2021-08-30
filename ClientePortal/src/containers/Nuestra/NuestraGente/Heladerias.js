import React, { Component } from 'react'
import Layout from '../../../componentes/Layout/Layout'
import apiURL from '../../../utils/apiURL';

export default class Heladerias extends Component {
    state = {
        img: []
    };
    componentDidMount() {
        fetch(`${apiURL}/nuestra-gentes`)
            .then((res) => res.json())
            .then((res) => this.setState({ img: res }));
    }
    render() {
        const ft = this.state.img[5]
        const fotos= ft && ft.imagenes.map((fotos)=>(fotos))
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
