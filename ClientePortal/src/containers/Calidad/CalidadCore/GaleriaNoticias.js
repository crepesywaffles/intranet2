import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import Modal from "../../../componentes/Modal/Modal"
import apiURL from "../../../utils/apiURL";
import "./GaleriaNoticias.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class GaleriaNoticias extends Component {
    state = {
        img: []
    
      };
      componentDidMount() {
        fetch(`${apiURL}/noticias-inocuidads`)
          .then((res) => res.json())
          .then((res) => this.setState({ img: res }));
      }
    render() {
        
            
        const noticias = this.state.img[0]
        console.log(noticias)
        return (
            <Layout>
                <div className="galeria_contenedor">
                {noticias && noticias.noticia.map((noticia)=>(
                <Modal
                    btn={<div as="buttom"className="div-btn">{noticia.name.split(".jpg")}</div>}
                    size={"fullscreen"}
                    
                 >
                 <img className="noticia" src={`${noticia.url}`} />
                 </Modal>
                ))}
                </div>
            </Layout>
        )
    }
}
