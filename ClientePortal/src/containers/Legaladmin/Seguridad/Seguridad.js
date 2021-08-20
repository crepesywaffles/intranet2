import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import apiURL from '../../../utils/apiURL'
import {Protocolos,Recomendaciones,Reglamentación,Headerseguridad} from "../../../assets/dir.admon/Seguridad/index"
import { Image,Grid,Divider,Container} from 'semantic-ui-react'
import {Link} from "react-router-dom"
import *as paths from "../../../config/routing/paths"
import Modal from "../../../componentes/Modal/Modal"
import Grupobtn from '../../../componentes/GrupoBtn/Grupobtn1'

export default class Seguridad extends Component {
    state = {
        media: [],
        
    };

    componentDidMount() {
        fetch(`${apiURL}/dirlegals`)
            .then((res) => res.json())
            .then((res) => this.setState({ media: res }));
    }
    render() {
        const info=this.state.media
        const Recomen= info && info[2]
        const recourl= Recomen && Recomen.media.map((img)=>(img.url))
        return (
            <Layout>
                <Image as={Link} to={paths.CON_LEGAL} src={Headerseguridad} fluid/>
                <Divider hidden/>
                <Grid centered stackable>
                    <Grid.Column width={4}>
                    <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} src={Protocolos} size="medium" centered />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=cpfrm5pvxn" width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                                </Container>
                            </Modal>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <Modal
                                open={false}
                                btn={<Grupobtn as={"a"} href={`${apiURL}${recourl}`}
                                    target="_blank" class={"botonimg btn"} size="medium" src={Recomendaciones} />}
                            ></Modal>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} src={Reglamentación} size="medium" centered />}
                                size={"fullscreen"}
                            >
                                <Container>
                                <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=7p8o9ikrzp" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                                </Container>
                            </Modal>
                    </Grid.Column>
                </Grid>
                <Divider hidden/>
            </Layout>
        )
    }
}
