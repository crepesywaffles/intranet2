import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import Modal from "../../../componentes/Modal/Modal"
import {Container} from "semantic-ui-react"

export default class RequisitosH extends Component {
    render() {
        return (
            <Layout>
                <div className="galeria_contenedor">
                <Modal
                    btn={<div as="buttom"className="item">Requisitos Higienicos Restaurantes</div>}
                    size={"fullscreen"}
                    
                 >
                    <Container>
                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=zum68ffunf"  width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                    </Container>
                 </Modal>
                 <Modal
                    btn={<div as="buttom"className="item">Requisitos higienicos Artesano</div>}
                    size={"fullscreen"}
                    
                 >
                     <Container>
                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=13azy223f2" width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                    </Container>
                 </Modal>
                 <Modal
                    btn={<div as="buttom"className="item">Requisitos higienicos Heladerías</div>}
                    size={"fullscreen"}
                    
                 >
                 <Container>
                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=v1jwi55tk5"   width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                    </Container>
                 </Modal>
                 <Modal
                    btn={<div as="buttom"className="item">Requisitos higienicos Carretino</div>}
                    size={"fullscreen"}
                    
                 >
                 <Container>
                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=ciq1w445s4"   width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                    </Container>
                 </Modal>
                 <Modal
                    btn={<div as="buttom"className="item">Requisitos Higienicos Mambo</div>}
                    size={"fullscreen"}
                    
                 >
                 <Container>
                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=tc5osaapma"   width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                    </Container>
                 </Modal>
                </div>
            </Layout>
        )
    }
}

