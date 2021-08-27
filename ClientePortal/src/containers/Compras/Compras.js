import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image} from "semantic-ui-react"
import {Infocompras} from "../../assets/Misiones/index"
import banner from "../../assets/EspacioConstruccion.png"

export default class Compras extends Component {
    render() {
        return (
            <Layout>
                <Image src={Infocompras} alt="mision compras"/>
                <Image src={banner} fluid/>
            </Layout>
        )
    }
}