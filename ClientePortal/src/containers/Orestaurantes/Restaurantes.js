import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image,Container,Grid,Divider} from "semantic-ui-react"
import {Inforestaurantes} from "../../assets/Misiones/index"
import Modal from "../../componentes/Modal/Modal"
import Grupobtn from '../../componentes/GrupoBtn/Grupobtn1'
import Directorio from "../../assets/O_restaurantes/BTNDirectorioRestaurantes.png"

export default class Restaurantes extends Component {
    render() {
        return (
            <Layout>
                <Image src={Inforestaurantes}/>
                <Grid>
                <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={Directorio} />}
                                size="fullscreen"
                            >
                                <Container>
                                <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=1ufw9ipvxn" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                                </Container>
                </Modal>
                </Grid>
                <Divider hidden/>
            </Layout>
        )
    }
}
