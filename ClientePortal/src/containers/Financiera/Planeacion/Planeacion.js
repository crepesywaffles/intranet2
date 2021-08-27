import React, { Component } from 'react'
import Layout from '../../../componentes/Layout/Layout'
import banner from "../../../assets/EspacioConstruccion.png"
import {Image} from "semantic-ui-react"
export default class Planeacion extends Component {
    render() {
        return (
            <Layout>
                <Image src={banner} fluid />
            </Layout>
        )
    }
}
