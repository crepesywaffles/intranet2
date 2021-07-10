import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image} from "semantic-ui-react"
import {Infoheladerias} from "../../assets/Misiones/index"

export default class Oheladerias extends Component {
    render() {
        return (
            <Layout>
                <Image src={Infoheladerias}/>
            </Layout>
        )
    }
}
