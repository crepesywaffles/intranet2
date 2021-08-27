import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image} from "semantic-ui-react"
import {Infomantenimiento} from "../../assets/Misiones/index"
import {banner} from "../../assets/EspacioConstruccion.png"

export default class Mantenimiento extends Component {
    render() {
        return (
            <Layout>
                <Image src={Infomantenimiento}/>
                <Image src={banner} fluid/>
            </Layout>
        )
    }
}
