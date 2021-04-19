import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import {Formaciones,Videos,Podcast,Articulos} from "../../../assets/academia/BI/index"
import {Grid,Image,Divider} from "semantic-ui-react"
import {Link} from "react-router-dom"
export default class BienestarIntegral extends Component {
    render() {
        return (
            <Layout>
                <Grid centered={true}  verticalAlign="middle"columns={4}>
                    <Grid.Column>
                        {/* <Image as={Link} className="botonimg" src={Formaciones} size="medium" /> */}
                        <Image as={Link} className="botonimg" src={Videos} size="medium" />
                        {/* <Image as={Link} className="botonimg" src={Podcast} size="medium" />
                        <Image as={Link} className="botonimg" src={Articulos} size="medium" /> */}
                    </Grid.Column>
                </Grid>
                <Divider hidden/>
            </Layout>
        )
    }
}

