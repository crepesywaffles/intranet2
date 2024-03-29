import React, { Component } from 'react'
import Layout from "../../../../componentes/Layout/Layout"
import apiURL from "../../../../utils/apiURL";
import "./Galeria.css"




export default class Galeria extends Component {
    state = {
        img: [],
        value: ""
    };
    componentDidMount() {
        fetch(`${apiURL}/covid-comunicados`)
            .then((res) => res.json())
            .then((res) => this.setState({ img: res }));
    }
    handleImg(event) {
        var obj= event.target.src
        
        console.log(obj)
    }
    render() {
        const pics = this.state.img[0]
        
        return (
            <Layout>
                
                <div className="galeria_contenedor">
                    {pics && pics.comunicados.map((i) => (
                        <div key={i.id} className="galeria_item">
                            <img as="button" onClick={this.handleImg} className="galeria_img " src={`${i.url}`} />
                        </div> 
                    ))}
                </div>
            </Layout>
        )
    }
} 
