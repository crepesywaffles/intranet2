import React, { Component } from 'react';
import Layout from "../../../componentes/Layout/Layout";
import { btnhabladores , btninstructivos, btnnoticias , btnprogramas} from "../../../assets/calidad/M.A/index"
import { Grid, Container,Image,Divider} from "semantic-ui-react";
import Modal from "../../../componentes/Modal/Modal";
import Grupobtn from "../../../componentes/GrupoBtn/Grupobtn1"
import apiURL from "../../../utils/apiURL"
import *as paths from "../../../config/routing/paths"
import {HeaderMedioA,InfoMedio} from "../../../assets/calidad/index"
import {Link} from "react-router-dom"
import Directorio from '../../../componentes/Directorio/Directorio';



export default class MedioA extends Component {
    state = {
        img: [],
        habladores:[],
        directorio:[]
    
      };
      componentDidMount() {
          fetch(`${apiURL}/noticias-inocuidads`)
              .then((res) => res.json())
              .then((res) => this.setState({ img: res }));
          fetch(`${apiURL}/habladores-calidads`)
              .then((res) => res.json())
              .then((res) => this.setState({ habladores: res }));
          fetch(`${apiURL}/calidads`)
              .then((res) => res.json())
              .then((res) => this.setState({ directorio: res }));
      }
    render() {
        const noticiasmedio = this.state.img[1]
        const habladores = this.state.habladores.filter((h)=>(h.tipo === "Artesano")).map((habladores)=>(habladores.hablador))
        const directorio = this.state.directorio.map((dir)=>(dir.directorioMeadioA))[0]
        console.log(directorio)
        return (
            <Layout>
                <Image as={Link} src={HeaderMedioA} to={paths.CON_CALIDAD} />
                <Image  src={InfoMedio}/>
                <Divider hidden />
                <Container stackable align="center">
                    <Grid stackable centered columns={3}>
                    <Grid.Column>
                                {directorio && directorio.map((dir)=>(
                                    <Directorio
                                        key={dir.id}
                                        nombre={dir.Nombre}
                                        // extension={dir.Extension}
                                        email={dir.Correo}
                                    />
                                ))}
                            </Grid.Column>
                            <Grid.Column >
                            <Modal
                                    btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btnhabladores} />}
                                    size={"fullscreen"}
                                >
                                    {habladores && habladores.map((img) => (
                                        img.map((im) => (
                                            <div className="container-habladores">
                                                <img src={`${im.url}`} />
                                            </div>

                                        ))
                                    ))}
                                </Modal>
                                <Modal
                                    btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btninstructivos} />}
                                    size={"fullscreen"}
                                >
                                    <Modal
                                        btn={<div as="buttom"className="div-btn">Abastecimiento C.C</div>}
                                        size={"fullscreen"}
                                    >
                                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=vhfra00n30" width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                                    </Modal>
                                    <Modal
                                        btn={<div as="buttom"className="div-btn">Abastecimiento punto externo</div>}
                                        size={"fullscreen"}
                                    >
                                        <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=1un23ii1ci" width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                                    </Modal>
                                </Modal>
                            </Grid.Column>
                            <Grid.Column>
                            <Modal
                                    btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btnnoticias} />}
                                    size={"fullscreen"}
                                >
                                    {noticiasmedio && noticiasmedio.noticia.map((noticia)=>(
                                        <img src={`${noticia.url}`}/>
                                    ))}
                                </Modal>
                                <Modal
                                    btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btnprogramas} />}
                                    size={"fullscreen"}
                                >
                                    
                                </Modal>
                            </Grid.Column>
                    </Grid>
                </Container>
            </Layout>
        )
    }
}
