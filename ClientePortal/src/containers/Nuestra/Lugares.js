import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Colombiaymundo} from "../../assets/nuestraempresa/index"
import {Image} from "semantic-ui-react"

export default class Lugares extends Component {
    render() {
        return (
            <Layout>
                <Image src={Colombiaymundo}/>
            </Layout>
        )
    }
}
