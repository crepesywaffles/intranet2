import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image} from "semantic-ui-react"
import {Inforestaurantes} from "../../assets/Misiones/index"

export default class Restaurantes extends Component {
    render() {
        return (
            <Layout>
                <Image src={Inforestaurantes}/>
            </Layout>
        )
    }
}
