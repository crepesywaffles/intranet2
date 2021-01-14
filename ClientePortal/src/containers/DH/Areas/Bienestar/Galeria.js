import React, { Component } from 'react'
import Layout from "../../../../componentes/Layout/Layout";
import {Segment,Image, Container,Grid} from "semantic-ui-react"
import apiURL from "../../../../utils/apiURL";
import*as paths from "../../../../config/routing/paths";
import Header from "../../../../assets/dh/CabezoteBienestar.png"
import {Link} from "react-router-dom"
import Grupobtn from "../../../../componentes/GrupoBtn/Grupobtn1";
import Modal from "../../../../componentes/Modal/Modal"
export default class Galeria extends Component {

    state = {
        img: []
        
    };
    componentDidMount() {
        fetch(`${apiURL}/galeria-bienestars`)
            .then((res) => res.json())
            .then((res) => this.setState({ img: res }));
    }
    render() {
        const titulo = this.state.img.map((galeria)=>(galeria)).map((gl)=>(gl))
        
        console.log(titulo)
        return (
          <Layout>
            <Image as={Link} to={paths.CON_DH_BIENESTAR} src={Header} />
            <Segment>
              {titulo &&
                titulo.map((ti) => (
                  <Modal
                    btn={
                      <Grupobtn
                        as={"button"}
                        class={"botonimg btn"}
                        size="medium"
                        label={ti.Evento}
                      />
                    }
                    key={ti.id}
                    size={"fullscreen"}
                  >
                    <Grid  stackable centered>
                    {ti.Fotos.map((ft) => (
                      <Image className="botonimg" size="medium" src={`${apiURL}${ft.url}`} />
                    ))}
                    </Grid>
                  </Modal>
                ))}
            </Segment>
          </Layout>
        );}
}

