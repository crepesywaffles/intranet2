import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Grid, Image,Divider} from "semantic-ui-react"
import {Infofinanciera} from "../../assets/Misiones/index"
import {Contabilidad,Nomina,Planeacion,Tesoreria,HeaderFinanciera} from "../../assets/financiera/index"
import apiURL from '../../utils/apiURL'
import Directorio from '../../componentes/Directorio/Directorio'
import {Link} from "react-router-dom"
import *as paths from  "../../config/routing/paths"

export default class Financiera extends Component {
    state = {
        info: [],
    };
    componentDidMount() {
        fetch(`${apiURL}/financieras`)
            .then((res) => res.json())
            .then((res) => this.setState({ info: res }));
        
    }
    render() {
        const inf = this.state.info[0]
        console.log(inf && inf.directorio)
        return (
            <Layout>
                <Image src={Infofinanciera}/>
                <Grid stackable container>
                    <Grid.Column width={6}>
                    {inf && inf.directorio.map((slider)=>(
                    <Directorio
                        key={slider.id}
                        nombre={slider.Nombre}
                        extension={slider.Extension}
                        
                    />
                    ))}
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <Image as={Link} to={paths.CON_FINANCIERA_PLANEACION} className="botonimg" src={Planeacion}/>
                    <Divider hidden/>
                    <Image as={Link} to={paths.CON_FINANCIERA_NOMINA} className="botonimg" src={Nomina}/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <Image as={Link} to={paths.CON_FINANCIERA_CONTABILIDAD} className="botonimg" src={Contabilidad}/>
                    <Divider hidden/>
                    <Image as={Link} to={paths.CON_FINANCIERA_TESORERIA} className="botonimg" src={Tesoreria}/>
                    </Grid.Column>
                </Grid>
                <Divider hidden/>
            </Layout>
        )
    }
}

