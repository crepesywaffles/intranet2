import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import { Grid, Container,Image} from "semantic-ui-react";
import {btnAlergenos,btnHabladores,btnInstructivos,btnNoticias,btnProcedimientos,Beatriz,Eduardo} from "../../../assets/calidad/main/index"
import {HeaderCalidad,InfoCalidad,creencia1,creencia2,creencia3} from "../../../assets/calidad/index"
import Grupobtn from "../../../componentes/GrupoBtn/Grupobtn1";
import Modal from "../../../componentes/Modal/Modal"
import BucadorCalidad from "../../../componentes/Buscador/BuscadorCalidad"
import { Link } from "react-router-dom"
import *as paths from "../../../config/routing/paths";
import apiURL from "../../../utils/apiURL"
import Directorio from '../../../componentes/Directorio/Directorio';


export default class CalidadMain extends Component {
    state = {
        directorio : []
    };
    componentDidMount(){
        fetch(`${apiURL}/calidads`)
          .then((res) => res.json())
          .then((res) => this.setState({ directorio: res }));
    }
    render() {
        const directorio = this.state.directorio.map((dir)=>(dir.directorioCalidad))[0]
        return (
            <Layout>
                <Image as={Link} to={paths.CON_CALIDAD} src={HeaderCalidad} fluid />
                <Image  src={InfoCalidad} />
                <Grid centered>
                    <Grid.Column width={8}>
                    <Image  src={Beatriz} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <Image  src={Eduardo} />
                    </Grid.Column>;
                </Grid>
                <Grid centered>
                    <Grid.Column width={5}>
                    <Image  src={creencia1} />
                    </Grid.Column>
                    <Grid.Column width={5}>
                    <Image  src={creencia2} />
                    </Grid.Column>;
                    <Grid.Column width={5}>
                    <Image  src={creencia3} />
                    </Grid.Column>;
                </Grid>
                <Container stackable align="center">
                    <Grid stackable centered >
                            <Grid.Column width={5}>
                                {directorio && directorio.map((dir)=>(
                                    <Directorio
                                        key={dir.id}
                                        nombre={dir.Nombre}
                                        extension={dir.Extension}
                                        // email={dir.Correo}
                                    />
                                ))}
                            </Grid.Column>
                            
                            <Grid.Column width={4}>
                                <Modal
                                    btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btnAlergenos} />}
                                    size={"fullscreen"}
                                >
                                    <BucadorCalidad />
                                </Modal>
                                <Modal
                                    open= {false}
                                    btn={<Grupobtn as={"a"} href={paths.CON_CALIDAD_HABLADORES} class={"botonimg btn"} size="medium" src={btnHabladores} />}
                                    size={"fullscreen"}
                                >
                                    
                                </Modal>
                                <Modal
                                    btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btnInstructivos} />}
                                    size={"fullscreen"}
                                >
                                <Modal
                                    btn={<div as="buttom" className="item">Higienización Restaurantes</div>}
                                    size={"fullscreen"}

                                >
                                    <Container>
                                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=hj0zy223f2" width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                                    </Container>
                                </Modal>
                                <Modal
                                    btn={<div as="buttom" className="item">Higienización Heladerías</div>}
                                    size={"fullscreen"}

                                >
                                    <Container>
                                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=ti2h6ggf0g" width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                                    </Container>
                                </Modal>
                                </Modal>
                            </Grid.Column>
                            <Grid.Column width={4}>
                            <Modal
                                    open="false"
                                    btn={<Grupobtn as={Link} path={paths.CON_CALIDAD_NOTICIAS} class={"botonimg btn"} size="medium" src={btnNoticias} />}
                                    size={"fullscreen"}

                                >

                                </Modal>
                                <Modal
                                    open={false}
                                    btn={<Grupobtn as={Link} path={paths.CON_CALIDAD_PROCEDIMIENTOS} class={"botonimg btn"} size="medium" src={btnProcedimientos} />}
                                    size={"fullscreen"}
                                >

                                </Modal>
                                
                                {/* <Modal
                                    open={false}
                                    btn={<Grupobtn as={Link} path={paths.CON_CALIDAD_REQUISITOS} class={"botonimg btn"} size="small" src={btnRequisitos} />}
                                    size={"fullscreen"}

                                >

                                </Modal> */}
                            </Grid.Column>
                       
                    </Grid>
                </Container>
            </Layout>
        )
    }
}
