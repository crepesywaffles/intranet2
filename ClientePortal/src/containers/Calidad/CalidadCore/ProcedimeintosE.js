import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import Modal from "../../../componentes/Modal/Modal"
import {  Container } from "semantic-ui-react";

export default class ProcedimeintosE extends Component {
    render() {
        return (
            <Layout>
                <div className="galeria_contenedor">
                <Modal
                    btn={<div as="buttom"className="item">Manejo de Alimentos cierre PDV</div>}
                    size={"fullscreen"}
                    
                 >
                    <Container>
                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=xjiblssk9s" width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                    </Container>
                 </Modal>
                 <Modal
                    btn={<div as="buttom"className="item">Navidad Artesano</div>}
                    size={"fullscreen"}
                    
                 >
                     <Container>
                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=ztn23ii1ci" width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                    </Container>
                 </Modal>
                 <Modal
                    btn={<div as="buttom"className="item">Navidad Restaurantes</div>}
                    size={"fullscreen"}
                    
                 >
                 <Container>
                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=vcm68ffunf"   width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                    </Container>
                 </Modal>
                </div>
            </Layout>
        )
    }
}
