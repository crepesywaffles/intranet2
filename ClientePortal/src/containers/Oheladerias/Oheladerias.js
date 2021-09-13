import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Container, Image,Grid,Divider} from "semantic-ui-react"
import {Infoheladerias} from "../../assets/Misiones/index"
import UnderConstruction from "../../assets/EspacioConstruccion.png"
import Directorio from "../../assets/O_heladerias/BTNDirectorioHeladerias.png"
import Modal from "../../componentes/Modal/Modal"
import Grupobtn from '../../componentes/GrupoBtn/Grupobtn1'

export default class Oheladerias extends Component {
    render() {
        return (
            <Layout>
                <Image src={Infoheladerias}/>
                <Grid>
                <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={Directorio} />}
                                size="fullscreen"
                            >
                                <Container>
                                <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=t32dsq8unf" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                                </Container>
                </Modal>
                </Grid>
                <Divider hidden />
            </Layout>
        )
    }
}
