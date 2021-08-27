import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Container, Image} from "semantic-ui-react"
import {Infoheladerias} from "../../assets/Misiones/index"
import UnderConstruction from "../../assets/EspacioConstruccion.png"

export default class Oheladerias extends Component {
    render() {
        return (
            <Layout>
                <Image src={Infoheladerias}/>
                <Container centered>
                <Image src={UnderConstruction} size="massive"/>
                </Container>              
            </Layout>
        )
    }
}
