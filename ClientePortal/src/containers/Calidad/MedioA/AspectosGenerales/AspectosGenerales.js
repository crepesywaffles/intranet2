import React, { Component } from 'react'
import Layout from "../../../../componentes/Layout/Layout"
import {HeaderMedioA} from "../../../../assets/calidad/index"
import {AguaPotable,AguaResidual,Aspectos,Energia,Economia,ResiduosSolidos} from "../../../../assets/calidad/M.A/AspectosGenerales/index"
import {Grid, Image,Divider} from "semantic-ui-react"
import {Link} from "react-router-dom"
import *as paths from "../../../../config/routing/paths"

export default class AspectosGenerales extends Component {
    render() {
        return (
            <Layout>
                <Image as={Link} to={paths.CON_MEDIOAMBIENTE} src={HeaderMedioA}/>
                <Image  centered src={Aspectos}/>
                <Divider hidden />
                <Grid centered stackable>
                    <Grid.Row>
                    <Image as={Link} to={paths.CON_MA_ASPECTOS_AGUARESIDUAL} src={AguaResidual} className="botonimg p-2" size="medium"/>
                    <Image as={Link} to={paths.CON_MA_ASPECTOS_ENERGIA} src={Energia} className="botonimg p-2" size="medium"/>
                    <Image as={Link} to={paths.CON_MA_ASPECTOS_AGUAPOTABLE} src={AguaPotable} className="botonimg p-2" size="medium"/>
                    </Grid.Row>
                    <Grid.Row>
                    <Image as={Link} to={paths.CON_MA_ASPECTOS_RESIDUOS} src={ResiduosSolidos} className="botonimg p-2" size="medium"/>
                    <Image as={Link} to={paths.CON_MA_ASPECTOS_ECONOMIA} src={Economia} className="botonimg p-2" size="medium"/>
                    </Grid.Row>
                </Grid>
                <Divider hidden />
            </Layout>
        )
    }
}

