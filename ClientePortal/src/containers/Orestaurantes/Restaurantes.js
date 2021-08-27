import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image} from "semantic-ui-react"
import {Inforestaurantes} from "../../assets/Misiones/index"
import {banner} from "../../assets/EspacioConstruccion.png"

export default class Restaurantes extends Component {
    render() {
        return (
            <Layout>
                <Image src={Inforestaurantes}/>
                <Image src={banner} fluid/>
            </Layout>
        )
    }
}
