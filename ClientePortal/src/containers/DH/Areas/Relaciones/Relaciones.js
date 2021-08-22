import React, { Component } from 'react'
import Layout from "../../../../componentes/Layout/Layout"
import { btn1, btn2, btn3, btn4,btn5,btn6, Header ,btn7,Info } from "../../../../assets/dh/Relaciones/index"
import { Grid, Container, Image, Divider } from "semantic-ui-react";
import Grupobtn from "../../../../componentes/GrupoBtn/Grupobtn1";
import Modal from "../../../../componentes/Modal/Modal"
import apiURL from "../../../../utils/apiURL";
import { Link } from "react-router-dom";
import *as paths from "../../../../config/routing/paths";
import Directorio from "../../../../componentes/Directorio/Directorio";

export default class Seleccion extends Component {
    state = {
        img: []

    };
    componentDidMount() {
        fetch(`${apiURL}/relaciones`)
            .then((res) => res.json())
            .then((res) => this.setState({ img: res }));
    }

    render() {
        const sml = this.state.img[0]
        console.log(sml)
        return (
            <Layout>
                <Divider hidden />
                <Container fluid align="center">
                    <Image as={Link} to={paths.CON_DH} src={Header} />
                </Container>
                <Container fluid align="center">
                    <Image  src={Info} />
                </Container>
                <Divider hidden />
                <Grid centered stackable columns={4}>
                    <Grid.Column>
                        <Container stakcable aling="center">
                            {sml && (
                                sml.directorio.map((sml) => (
                                    <Directorio
                                        key={sml.id}
                                        nombre={sml.Nombre}
                                        // extension={sml.Extension}
                                        email={sml.Correo}
                                    />
                                )))}
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                    
                        <Modal
                            btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn1} />}
                            size={"fullscreen"}

                        >
                            <iframe src="https://outlook.office365.com/owa/calendar/14233adb853d4e3bbd213c8d6813f476@crepesywaffles.com/d2fafc38fb2548fba982252ff717f7a16610153096679833633/calendar.html" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen />
                        </Modal>
                        
                        {/* <Modal
                            btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn5} />}
                            size={"fullscreen"}

                        >
                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=vt86pccbdc" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                        </Modal> */}
                        <Modal
                            open={false}
                            btn={<Grupobtn as={"a"} href="https://docs.google.com/forms/d/e/1FAIpQLSfn-7HCDG_hXzT7cixD2bdKrxIduMeEdiw_ks4fRKo9Nd8hgw/viewform" target="_blank" class={"botonimg btn"} size="medium" src={btn7} />}
                            size={"fullscreen"}
                        >
                        </Modal>
                        
                    </Grid.Column>
                    <Grid.Column>
                            {/* Reporte AT */}
                        <Modal
                            btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn3} />}
                            size={"fullscreen"}

                        >
                             <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=7tnwkkxwb1" width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                        </Modal>
                        <Modal
                            btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn4} />}
                            size={"fullscreen"}

                        >
                            <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=vclrleqjiq" width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen> </iframe>"
                        </Modal>
                        
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}
