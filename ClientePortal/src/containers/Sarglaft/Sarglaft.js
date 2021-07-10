import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image} from "semantic-ui-react"
import {Infosarglaft} from "../../assets/Misiones/index"

export default class Sarglaft extends Component {
    render() {
        return (
            <Layout>
                <Image src={Infosarglaft}/>
            </Layout>
        )
    }
}
