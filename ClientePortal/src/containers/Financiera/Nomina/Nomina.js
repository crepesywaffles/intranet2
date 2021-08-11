import React, { Component } from 'react'
import Layout from '../../../componentes/Layout/Layout'
import {HeaderNomina} from "../../../assets/financiera/index"
import {Image,Divider,Grid,Container} from "semantic-ui-react"
import {Link} from "react-router-dom"
import *as paths from "../../../config/routing/paths"
import {Lactancia,Recomendaciones,Marcaciones} from "../../../assets/financiera/Nomina/index"
import Modal from "../../../componentes/Modal/Modal"
import Grupobtn from '../../../componentes/GrupoBtn/Grupobtn1'
import apiURL from '../../../utils/apiURL'


export default class Nomina extends Component {
    state = {
        img: [],
    };

    componentDidMount() {
        fetch(`${apiURL}/nominas`)
            .then((res) => res.json())
            .then((res) => this.setState({ img: res }));
    }
    render() {
        const file = this.state.img[0]
        const pdf1= file && file.files[0].url
        const pdf2= file && file.files[1].url
        return (
            <Layout>
               <Image as={Link} to={paths.CON_FINANCIERA} src={HeaderNomina} fluid/>
               <Divider hidden/>
               <Grid centered>
                <Grid.Column width={4}>
                <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={Lactancia} />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=xmsvimco7k" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                                </Container>
                            </Modal>
                </Grid.Column>
                <Grid.Column width={4}>
                <Modal
                                open={false}
                                btn={<Grupobtn as={"a"} href={`${apiURL}${pdf2}`}
                                    target="_blank" class={"botonimg btn"} size="medium" src={Marcaciones} />}
                ></Modal>
                </Grid.Column>
                <Grid.Column width={4}>
                <Modal
                                open={false}
                                btn={<Grupobtn as={"a"} href={`${apiURL}${pdf1}`}
                                    target="_blank" class={"botonimg btn"} size="medium" src={Recomendaciones} />}
                ></Modal>
                </Grid.Column>
               </Grid>
            </Layout>
        )
    }
}
