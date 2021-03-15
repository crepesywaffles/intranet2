import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import Modal from "../../componentes/Modal/Modal"
import {  Container,Image } from "semantic-ui-react";
import {HeaderCalidad} from "../../assets/calidad/index"
import *as paths from "../../config/routing/paths"
import {Link} from "react-router-dom"
import "./Indicadores.css"

export default class Indicadores extends Component {
    render() {
        return (
            <Layout>
                <Image as={Link} src={HeaderCalidad} to={paths.CON_CALIDAD}/>
                <div className="galeria_contenedor">
                <Modal
                    btn={<div as="buttom"className="div-btn">Carretinos</div>}
                    size={"fullscreen"}
                    
                 >
                    <Container>
                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=tu3wi55tk5" width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                    </Container>
                 </Modal>
                 <Modal
                    btn={<div as="buttom"className="div-btn">Heladerías</div>}
                    size={"fullscreen"}
                    
                 >
                     <Container>
                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=h30zy223f2" width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                    </Container>
                 </Modal>
                 <Modal
                    btn={<div as="buttom"className="div-btn">Restaurantes</div>}
                    size={"fullscreen"}
                    
                 >
                 <Container>
                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=hja7eyym8y"  width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                    </Container>
                 </Modal>
                </div>
            </Layout>
        )
    }
}
