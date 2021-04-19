import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import {Formaciones,Videos,Podcast,Articulos} from "../../../assets/academia/EL/index"
import {Grid,Image,Divider} from "semantic-ui-react"
import {Link} from "react-router-dom"
import*as paths from "../../../config/routing/paths";

export default class Empoderamiento extends Component {
    render() {
        return (
            <Layout>
                <Grid centered={true}  verticalAlign="middle"columns={4}>
                    <Grid.Column>
                        <Image as={Link} to={paths.CON_ACADEMIA_EMPODERAMIENTO_FORMACIONES} className="botonimg" src={Formaciones} size="medium" />
                        {/* <Image as={Link} className="botonimg" src={Videos} size="medium" />
                        <Image as={Link} className="botonimg" src={Podcast} size="medium" />
                        <Image as={Link} className="botonimg" src={Articulos} size="medium" /> */}
                    </Grid.Column>
                </Grid>
                <Divider hidden/>
            </Layout>
        )
    }
}
