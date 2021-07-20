import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image,Grid,Divider,Container} from "semantic-ui-react"
import {Infolegal} from "../../assets/Misiones/index"
import {header,GestionDocumenta,CentroServicio,Seguridad,Inmuebles} from "../../assets/dir.admon/index"
import {Link} from "react-router-dom"
import*as paths from "../../config/routing/paths"

export default class Legal extends Component {
    render() {
        return (
            <Layout>
                <Image src={header} />
                <Image src={Infolegal}/>
                <Divider hidden />
                <Grid stackable centered>
                    <Image as={Link} to={paths.CON_LEGAL_CENTROSERVICIO} size="medium" className="botonimg" src={CentroServicio}/>
                    <Image as={Link} to={paths.CON_LEGAL_GESTIONDOCUMENTAL} size="medium" className="botonimg" src={GestionDocumenta}/>
                    <Image as={Link} to={paths.CON_LEGAL_INMUEBLES} size="medium" className="botonimg" src={Inmuebles}/>
                    <Image as={Link} to={paths.CON_LEGAL_SEGURIDAD} size="medium" className="botonimg" src={Seguridad}/>
                </Grid>
                <Divider hidden/>
            </Layout>
        )
    }
}
