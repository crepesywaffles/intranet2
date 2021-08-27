import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import Banner from "../../assets/EspacioConstruccion.png"
import {Image} from "semantic-ui-react"

export default class Gerenciaadmon extends Component {
    render() {
        return (
            <Layout>
                <Image src={Banner} fluid />
            </Layout>
        )
    }
}
