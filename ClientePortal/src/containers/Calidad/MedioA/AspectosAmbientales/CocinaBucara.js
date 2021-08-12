import React, { Component } from 'react'
import Layout from '../../../../componentes/Layout/Layout'
import {AguaPotable,AguaResidual,ResiduosSolidos} from "../../../../assets/calidad/M.A/AspectosGenerales/index"
import {Grid, Container,Image,Divider} from "semantic-ui-react"
import {Link} from "react-router-dom"
import Modal from "../../../../componentes/Modal/Modal"
import Grupobtn from '../../../../componentes/GrupoBtn/Grupobtn1'
import apiURL from '../../../../utils/apiURL'
import { CON_SOSTENIBILIDAD_MONTES } from '../../../../config/routing/paths'


export default class CocinaBucara extends Component {
    state ={
        media: []
    } 
    componentDidMount() {
        fetch(`${apiURL}/aspectos-ambientales`)
          .then((res) => res.json())
          .then((res) => this.setState({ media: res }));
      }
    render() {
        const info=this.state.media[4]
        console.log(info && info.media.map((img)=>(img.url)))
        return (
            <Layout>
                <Grid centered>
                <Grid.Column width={12}>
                {info && info.media.map((img)=>(
                    <Image src={`${apiURL}${img.url}`}/>
                ))}
                </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}