import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {ArteCultura,Empoderamiento,BienestarIntegral,ConcienciaE} from "../../assets/academia/index"
import {Grid,Image,Divider} from "semantic-ui-react"
import {Link} from "react-router-dom"
import *as paths from "../../config/routing/paths";
export default class AcademiaMain extends Component {
    render() {
        return (
            <Layout>
                <Grid centered={true}  verticalAlign="middle"columns={2}>
                    <Grid.Column>
                        {/* <Image as={Link} className="botonimg" to={paths.CON_ACADEMIA_ARTE} src={ArteCultura} size="medium" /> */}
                        <Image as={Link} className="botonimg" to={paths.CON_ACADEMIA_EMPODERAMIENTO} src={Empoderamiento} size="medium" />
                        <Image as={Link} className="botonimg" to={paths.CON_ACADEMIA_BIENESTAR} src={BienestarIntegral} size="medium" />
                        {/* <Image as={Link} className="botonimg" to={paths.CON_ACADEMIA_CONCIENCIA}src={ConcienciaE} size="medium" /> */}
                    </Grid.Column>
                </Grid>
                <Divider hidden/>
            </Layout>
        )
    }
}
