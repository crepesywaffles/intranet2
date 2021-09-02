import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import { Image,Grid,Divider } from 'semantic-ui-react'
import {Link} from "react-router-dom"
import {Artesano,Restaurantes,Heladerias,Carretinos} from "../../../assets/calidad/main/index"
import *as paths from "../../../config/routing/paths"


export default class Habladores extends Component {
    render() {
        
        return (
            <Layout>
                <Grid centered stackable>
                <Grid.Column width={4}>
                <Image as={Link}  to={paths.CON_CALIDAD_HABLADORES_RESTAURANTES}  className="botonimg" size="medium" src={Restaurantes}/>
                <Divider hidden/>
                <Image as={Link}  to={paths.CON_CALIDAD_HABLADORES_HELADERIAS}  className="botonimg" size="medium" src={Heladerias}/>
                </Grid.Column>
                <Grid.Column width={4}>
                <Image as={Link} to={paths.CON_CALIDAD_HABLADORES_ARTESANO} className="botonimg" size="medium" src={Artesano}/>
                <Divider hidden/>
                <Image as={Link} to={paths.CON_CALIDAD_HABLADORES_CARRETINOS} className="botonimg" size="medium" src={Carretinos}/>
                </Grid.Column>
                </Grid>
                <Divider hidden/>
            </Layout>
        )
    }
}
