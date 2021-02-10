import React, { Component } from 'react'
import Layout from "../../../../componentes/Layout/Layout"
import { btn1, btn2, Header } from "../../../../assets/dh/Admonp/index"
import { Grid, Container, Image, Divider } from "semantic-ui-react";
import Grupobtn from "../../../../componentes/GrupoBtn/Grupobtn1";
import Modal from "../../../../componentes/Modal/Modal"
import apiURL from "../../../../utils/apiURL";
import Carusel from "../../../../componentes/Carusel/Carusel";
import { Link } from "react-router-dom";
import *as paths from "../../../../config/routing/paths";
import Directorio from "../../../../componentes/Directorio/Directorio";

export default class Seleccion extends Component {
    state = {
        img: []

    };
    componentDidMount() {
        fetch(`${apiURL}/Admonps`)
            .then((res) => res.json())
            .then((res) => this.setState({ img: res }));
    }
    render() {
        const sml = this.state.img[0]
        console.log(sml)
        return (
            <Layout>
                <Container fluid align="center">
                    <Image as={Link} to={paths.CON_DH} src={Header} />
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
                                        extension={sml.Extension}
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
                                btn={<Grupobtn as={"a"} href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwYLboO2wkWpLhv60s2CmKIVUMUVJQlI5U1hMOEQ5WU9JOE43VFY1NUs4NC4u" target="_blank" class={"botonimg btn"} size="medium" src={btn1} />}
                                size={"fullscreen"}

                            >
                            </Modal>
                        </Container>
                        <Container stackable centered aling="center">
                            {/* Reporte AT */}
                            <Modal
                                open={false}
                                btn={<Grupobtn as={"a"} href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwVf8h5h1vF9KkioirAzwpGZUNFdDUjBZRkFOUE5IMkcxQzZCSlhSNjRSVi4u" target="_blank" class={"botonimg btn"} size="medium" src={btn2} />}
                                size={"fullscreen"}

                            >
                            </Modal>
                        </Container>
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}