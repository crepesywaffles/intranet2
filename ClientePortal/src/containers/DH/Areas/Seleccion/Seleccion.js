import React, { Component } from 'react'
import Layout from "../../../../componentes/Layout/Layout"
import { btn1, btn2, Header,Info,ConvocaExternas,ConvocaInternas } from "../../../../assets/dh/seleccion/index"
import { Grid, Container, Image, Divider } from "semantic-ui-react";
import Grupobtn from "../../../../componentes/GrupoBtn/Grupobtn1";
import Modal from "../../../../componentes/Modal/Modal"
import apiURL from "../../../../utils/apiURL";
import Carusel from "../../../../componentes/Carusel/Carusel";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import *as paths from "../../../../config/routing/paths";
import Directorio from "../../../../componentes/Directorio/Directorio";
import Carta from "../../../../componentes/Card/Carta"
import "../Seleccion/Seleccion.css"

export default class Seleccion extends Component {

    state = {
        img: [],
        conv: []
    };

    componentDidMount() {
        fetch(`${apiURL}/seleccions`)
            .then((res) => res.json())
            .then((res) => this.setState({ img: res }));
        fetch(`${apiURL}/convocatorias-selecs`)
            .then((res) => res.json())
            .then((res) => this.setState({ conv: res }));

    }
    render() {
        const sml = this.state.img[0]
        const con = this.state.conv
        console.log(con)
        return (
            <Layout>
                <Image as={Link} to={paths.CON_DH} src={Header} />
                <Image src={Info} />
                <Carusel>
                    {sml && (
                        sml.slider.map((sl) => (
                            <Carousel.Item key={sl.id}>
                                <img className=" d-block w-100"
                                    src={`${apiURL}${sl.url}`}
                                />
                            </Carousel.Item>

                        ))
                    )}
                </Carusel>
                
                <Divider hidden />
                <Divider hidden />
                <Grid centered stackable columns={3}>
                    <Grid.Column>
                        <Container stakcable aling="center">
                            {sml && (
                                sml.directorio.map((sml) => (
                                    <Directorio
                                        key={sml.id}
                                        nombre={sml.Nombre}
                                        extension={sml.Extension}
                                        // email={sml.Correo}
                                    />
                                )))}
                        </Container>

                    </Grid.Column>
                    <Grid.Column>
                        <Container stackable centered aling="center">
                            {/* Convocatorias */}
                            
                            <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} src={btn1}  centered />}
                                size={"fullscreen"}

                            >
                                <div className="cartas">
                                    {con && (
                                        con.map((co) => (
                                            <div className="cartas-carta">
                                                <Carta key={co.id}
                                                    img={`${apiURL}${co.Imagen.url}`}
                                                    size="medium"
                                                    titulo={co.titulo}
                                                    cargo={co.cargo}
                                                    intro={co.intro}
                                                    direccion={co.direccion}
                                                    motivacion={co.motivacion}
                                                    condicion1={co.condicion1}
                                                    condicion2={co.condicion2}
                                                    condicion3={co.condicion3}
                                                    condicion4={co.condicion4}
                                                    href={co.url}
                                                >
                                                </Carta>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </Modal>
                            {/* Hojas de vida Familiares */}
                            <Modal
                                open={false}
                                btn={<Grupobtn as={"a"} href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwVhFKEtt0mNGsJMOl9urY_dUOTIzRUo5RzRQNjJXMEU2Sk1KWkdGOFJXNi4u" target="_blank" class={"botonimg btn"}  src={btn2} />}
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

