import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import apiURL from '../../../utils/apiURL';
import {Image,Container,Divider} from "semantic-ui-react"

export default class Limpiezaydesinfeccion extends Component {
    state ={
        media: []
    } 
    componentDidMount() {
        fetch(`${apiURL}/noticias-inocuidads`)
          .then((res) => res.json())
          .then((res) => this.setState({ media: res }));
      }
    render() {
        const info=this.state.media
        const lyd= info && info[2]
        return (
            <Layout>
                {lyd && lyd.noticia.map((img)=>(
                    <Container key={img.id}>
                        <Image src={`${apiURL}${img.url}`}/>
                        <Divider hidden/>
                    </Container>
                ))}
            </Layout>
        )
    }
}
