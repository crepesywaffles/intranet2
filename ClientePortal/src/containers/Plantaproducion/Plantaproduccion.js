import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image} from "semantic-ui-react"
import {Infoplantapro} from "../../assets/Misiones/index"

export default class Plantaproduccion extends Component {
    render() {
        return (
            <Layout>
                <Image src={Infoplantapro}/>
            </Layout>
        )
    }
}
