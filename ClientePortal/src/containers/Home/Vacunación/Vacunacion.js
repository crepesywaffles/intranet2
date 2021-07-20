import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import {Galeria,abcvacuna,Banner,Video} from "../../../assets/vacunacion/index"
import {Image,Grid,Divider,Container} from "semantic-ui-react"
import {Link} from "react-router-dom"
import { CON_VACUNACION_GALERIA } from '../../../config/routing/paths'
import apiURL from "../../../utils/apiURL"
import ReactPlayer from "react-player"

export default class Vacunacion extends Component {
    state = {
        data: [],
        
    }
    componentDidMount() {
        fetch(`${apiURL}/vacunacions`)
            .then(res => { return res.json() })
            .then(res => {
                this.setState({ data: res})
            })
    }
    
    render() {
        const data = this.state.data
        const pdf=data.map((e)=>(e.abc).url)[0]
        const numero_vacunas= data.map((e)=>(e.numero_vacunas))[0]
        return (
            <Layout>
                <Container className="con_numero_vacunas" fluid >
                <h3 className="numero_vacunas">{numero_vacunas}</h3>
                <Image src={Banner} fluid></Image>
                </Container>
                <Divider hidden/>
                <Grid stackable centered verticalAlign="middle" >
                    <Grid.Column width={4} >
                    <Image src={Galeria} as={Link} to={CON_VACUNACION_GALERIA} size="medium" className="botonimg" />
                    </Grid.Column>
                    <Grid.Column width={4} >
                    <Image src={abcvacuna} as="a" href={pdf} target="_blank"  size="medium" className="botonimg" />
                    </Grid.Column>
                </Grid>
                <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url={Video}
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                </Container>
                <Divider hidden/>
            </Layout>
        )
    }
}
