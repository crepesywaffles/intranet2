import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image} from "semantic-ui-react"
import {Infomercadeo} from "../../assets/Misiones/index"
import banner from "../../assets/EspacioConstruccion.png"

export default class Mercadeo extends Component {
    render() {
        return (
            <Layout>
                <Image src={Infomercadeo}/>
                <Image src={banner} fluid/>
            </Layout>
        )
    }
}
