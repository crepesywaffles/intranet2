import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import FundadoresImage from "../../assets/NuestrosFundadores.png"
import {Image} from "semantic-ui-react"

export default class Fundadores extends Component {
    render() {
        return (
            <Layout>
                <Image src={FundadoresImage}/>
            </Layout>
        )
    }
}
