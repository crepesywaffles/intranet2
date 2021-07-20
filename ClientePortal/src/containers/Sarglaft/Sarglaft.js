import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image,Grid} from "semantic-ui-react"
import {Infosarglaft} from "../../assets/Misiones/index"
import {btnptee,btnsagrilaft,politicaTransparencia,header} from "../../assets/sagrilaft/index"
import {Link} from "react-router-dom"
import*as paths from "../../config/routing/paths";

export default class Sarglaft extends Component {
    render() {
        return (
            <Layout>
                <Image src={header} as={Link} to={paths.CON_SARGLAFT}/>
                <Image src={Infosarglaft}/>
                <Grid stackable container>
                <Grid.Column width={10}>
                <Image  src={politicaTransparencia}/>
                </Grid.Column>
                <Grid.Column width={6}>
                <Grid.Row>
                <Image as={Link} to={paths.CON_SARGLAFT_INFO} className="botonimg" src={btnsagrilaft}/>
                </Grid.Row>
                <Grid.Row>
                <Image as={Link}  to={paths.CON_SARGLAFT_PTEE}  className="botonimg" src={btnptee}/>
                </Grid.Row>
                </Grid.Column>
                </Grid>
            </Layout>
            
        )
    }
}
