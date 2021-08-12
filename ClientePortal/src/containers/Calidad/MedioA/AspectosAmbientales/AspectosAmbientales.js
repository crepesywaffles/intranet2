import React, { Component } from 'react'
import Layout from '../../../../componentes/Layout/Layout'
import {Grid, Container,Image,Divider} from "semantic-ui-react"
import apiURL from '../../../../utils/apiURL'
import {Link} from "react-router-dom"
import {CocinaCentral,CocinaBucara,PDVCC,PDVCLL} from "../../../../assets/calidad/M.A/AspectosAmbientales/index"
import *as paths from "../../../../config/routing/paths"



export default class Aspectosambientales extends Component {
    render() {
        return (
            <Layout>
                <Grid centered stackable>
                <Grid.Column width={4}>
                <Image as={Link} to={paths.CON_MA_ASPECTOSAMBIENTALES_COCINACENTRAL} src={CocinaCentral} className="botonimg"/>
                </Grid.Column>
                <Grid.Column width={4}>
                <Image as={Link} to={paths.CON_MA_ASPECTOSAMBIENTALES_COCINABUCARA}src={CocinaBucara} className="botonimg"/>
                </Grid.Column>
                <Grid.Column width={4}>
                <Image as={Link} to={paths.CON_MA_ASPECTOSAMBIENTALES_PDVCC} src={PDVCC} className="botonimg"/>
                </Grid.Column>
                <Grid.Column width={4}>
                <Image as={Link} to={paths.CON_MA_ASPECTOSAMBIENTALES_PDVCALLE}  src={PDVCLL} className="botonimg"/>
                </Grid.Column>
                </Grid> 
                <Divider hidden />
            </Layout>
        )
    }
}
