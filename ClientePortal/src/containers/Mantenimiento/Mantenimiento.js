import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image} from "semantic-ui-react"
import {Infomantenimiento} from "../../assets/Misiones/index"

export default class Mantenimiento extends Component {
    render() {
        return (
            <Layout>
                <Image src={Infomantenimiento}/>
            </Layout>
        )
    }
}
