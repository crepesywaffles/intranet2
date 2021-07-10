import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image} from "semantic-ui-react"
import {Infolegal} from "../../assets/Misiones/index"

export default class Logistica extends Component {
    render() {
        return (
            <Layout>
                <Image src={Infolegal}/>
            </Layout>
        )
    }
}
