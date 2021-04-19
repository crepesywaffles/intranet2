import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import {Formaciones,Videos,Podcast,imgArticulos} from "../../../assets/academia/index"
import {Grid,Image,Divider} from "semantic-ui-react"
import {Link} from "react-router-dom"
export default class Conciencia extends Component {
    render() {
        return (
            <Layout>
                <Grid centered={true}  verticalAlign="middle"columns={2}>
                    <Grid.Column>
                        <Image as={Link} className="botonimg" src={Formaciones} size="medium" />
                        <Image as={Link} className="botonimg" src={Videos} size="medium" />
                        <Image as={Link} className="botonimg" src={Podcast} size="medium" />
                        <Image as={Link} className="botonimg" src={imgArticulos} size="medium" />
                    </Grid.Column>
                </Grid>
                <Divider hidden/>
            </Layout>
        )
    }
}
