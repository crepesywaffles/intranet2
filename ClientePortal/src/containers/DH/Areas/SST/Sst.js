import React, { Component } from 'react'
import Layout from "../../../../componentes/Layout/Layout"
import { btn1, btn2, btn3, btn4, btn5, Header,Info } from "../../../../assets/dh/SST/index"
import { Grid, Container, Image, Divider } from "semantic-ui-react";
import Grupobtn from "../../../../componentes/GrupoBtn/Grupobtn1";
import Modal from "../../../../componentes/Modal/Modal"
import apiURL from "../../../../utils/apiURL";
import Carusel from "../../../../componentes/Carusel/Carusel";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import *as paths from "../../../../config/routing/paths";
import Directorio from "../../../../componentes/Directorio/Directorio";


export default class Sst extends Component {

    state = {
        img: []
    };

    componentDidMount() {
        fetch(`${apiURL}/seguridady-saluds`)
            .then((res) => res.json())
            .then((res) => this.setState({ img: res }));
    }
    render() {

        const sml = this.state.img[0]
        const dir = this.state.img[1]
        console.log(dir)

        return (
            <Layout>
                <Image as={Link} to={paths.CON_DH} src={Header} />
                <Image src={Info}/>
                <Carusel>
                    {sml && (
                        sml.Slidersst.map((sl) => (
                            <Carousel.Item key={sl.id}>
                                <img className=" d-block w-100"
                                    src={`${sl.url}`}
                                />
                            </Carousel.Item>

                        ))
                    )}
                </Carusel>
                
                <Divider hidden />
                <Container fluid align="center">
                </Container>
                <Divider hidden />
                <Grid centered stackable columns={4}>
                    <Grid.Column>
                        <Container stakcable aling="center">
                            {sml && (
                                sml.directoriosst.map((sml) => (
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
                        <Container stackable centered aling="center">
                            {/* Reporte AT */}
                            <Modal
                                open={false}
                                btn={<Grupobtn as={"a"} href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwfSJHoVqmZVGnddDUfmHRTpUNk5GSlhIMTFBQk1YQjhSM1RTSVIxRzc0MSQlQCN0PWcu" target="_blank" class={"botonimg btn"} size="medium" src={btn1} />}
                                size={"fullscreen"}

                            >
                            </Modal>
                            <Modal
                                open={false}
                                btn={<Grupobtn as={"a"} href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwfSJHoVqmZVGnddDUfmHRTpUMlNPNDNLOFZBSDNURDNNQ0JDOFdXWUpQSSQlQCN0PWcu" target="_blank" class={"botonimg btn"} size="medium" src={btn2} />}
                                size={"fullscreen"}
                            >
                            </Modal>
                            {/* <Modal
                            btn={<Grupobtn as={"button"} class={"botonimg btn"} src={btn3} size="medium" centered/>}
                            size={"fullscreen"}
                        >
                        </Modal> */}
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container stackable centered aling="center">
                            <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} src={btn4} size="medium" centered />}
                                size={"fullscreen"}
                            >
                                {dir && (dir.Slidersst.map((dir) => (
                                    <Container>
                                        <Image className="dir_emergencias" key={dir.id} src={`${dir.url}`} />
                                    </Container>
                                )))}
                            </Modal>
                            <Modal
                                open={false}
                                btn={<Grupobtn as={Link} path={paths.CON_DH_SST_COVID} class={"botonimg btn"} src={btn5} size="medium" centered />}
                                size={"fullscreen"}
                            >
                                <Image />
                            </Modal>
                        </Container>
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}
