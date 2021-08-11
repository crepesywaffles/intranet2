import React, { Component } from 'react';
import Layout from "../../../componentes/Layout/Layout";
import {procesos,aspectosGenerales,Indicadores,Mundodehoy,NoticiasMA} from "../../../assets/calidad/M.A/index"
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
                    <Grid stackable centered>
                    <Grid.Column width={7}>
                                {directorio && directorio.map((dir)=>(
                                    <Directorio
                                        key={dir.id}
                                        nombre={dir.Nombre}
                                        // extension={dir.Extension}
                                        email={dir.Correo}
                                    />
                                ))}
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <Grid.Row >
                        <Image as={Link} to={paths.CON_MEDIOAMBIENTE_ASPECTOSGENERALES} src={aspectosGenerales} size="small" className="botonimg p-2"/>
                        <Image src={procesos} size="small" className="botonimg p-2"/>
                        <Image as={Link} to={paths.CON_MEDIOAMBIENTE_MUNDODEHOY}src={Mundodehoy} size="small" className="botonimg p-2"/>
                    </Grid.Row>
                    <Divider hidden/>
                    <Grid.Row>
                        <Image src={NoticiasMA} size="small" className="botonimg p-2"/>
                        <Image src={Indicadores} size="small" className="botonimg p-2"/>
                    </Grid.Row>
                    </Grid.Column>
                    </Grid>
                </Container>
            </Layout>
        )
    }
}
