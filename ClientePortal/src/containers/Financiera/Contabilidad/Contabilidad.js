import React, { Component } from 'react'
import Layout from '../../../componentes/Layout/Layout'
import {HeaderContabilidad} from "../../../assets/financiera/index"
import {FacElectronica} from "../../../assets/financiera/Contabilidad/index"
import {Image,Divider,Grid} from "semantic-ui-react"
import { Link } from 'react-router-dom'
import *as paths from "../../../config/routing/paths"

export default class Contabilidad extends Component {
    render() {
        console.log(localStorage.Rol)
        return (
            <Layout>
                <Image as={Link} to={paths.CON_FINANCIERA} src={HeaderContabilidad} fluid/>
                <Divider hidden/>
                <Grid centered>
                {localStorage.Rol == "Admin" ?
                <Image as={Link} to={paths.CON_ADMIN_FACTURACION} src={FacElectronica}/>
                :null
                }
                </Grid>
                <Divider hidden />
            </Layout>
        )
    }
}
