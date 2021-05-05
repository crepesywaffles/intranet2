import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Manifiesto} from "../../assets/nuestraempresa/index"
import {Image} from "semantic-ui-react"

export default class Cultura extends Component {
    render() {
        return (
            <Layout>
                <Image src={Manifiesto}/>
            </Layout>
        )
    }
}
