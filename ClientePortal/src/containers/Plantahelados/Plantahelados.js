import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image} from "semantic-ui-react"
import {Infoplantahel} from "../../assets/Misiones/index"


export default class Plantahelados extends Component {
    render() {
        return (
            <Layout>
                <Image src={Infoplantahel} />
            </Layout>
        )
    }
}
