import React, { Component } from 'react'
import Layout from "../../../../componentes/Layout/Layout"
import Header from "../../../../assets/dh/CabezoteBienestar.png"
import { Image, Divider, Container, Grid } from "semantic-ui-react"
import *as paths from "../../../../config/routing/paths";
import { Link } from "react-router-dom"
import { btn15, btn16 } from "../../../../assets/dh/Bienestar/index"
import Modal from "../../../../componentes/Modal/Modal"
import Grupobtn from "../../../../componentes/GrupoBtn/Grupobtn1";
import apiURL from "../../../../utils/apiURL";

export default class Apoyo extends Component {
    state = {
        link: []
    };
    componentDidMount() {
        fetch(`${apiURL}/bienestarlinks`)
            .then((res) => res.json())
            .then((res) => this.setState({ link: res }));
    }
    render() {
        const link = this.state.link[0]
        return (
            <Layout>
                <Image as={Link} to={paths.CON_DH_BIENESTAR} src={Header} />
                <Divider hidden />
                <Grid stackable verticalAlign="middle" textAlign="center" columns={2}>
                    <Grid.Column>
                        <Modal
                            open={false}
                            btn={<Grupobtn as={"a"} href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwVf8h5h1vF9KkioirAzwpGZURTVMMlUxSzhCSDAwMUozQTRJWjdHSjhOWC4u"
                                target="_blank" class={"botonimg btn"} size="medium" src={btn15} />}
                        ></Modal>
                    </Grid.Column>
                    <Grid.Column>
                        <Modal
                            btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn16} AssetsBinestar />}
                        >
                            <Container>
                                {link && (
                                    <Image src={`${link.Imagenes[8].url}`} size="massive" />
                                )}
                            </Container>
                        </Modal>
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}
