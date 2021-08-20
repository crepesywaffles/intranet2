import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import apiURL from '../../../utils/apiURL';
import {Image,Container,Divider} from "semantic-ui-react"

export default class Alergenos extends Component {
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
        const alergenos= info && info[0]
        return (
            <Layout>
                {alergenos && alergenos.noticia.map((img)=>(
                    <Container key={img.id}>
                        <Image src={`${apiURL}${img.url}`}/>
                        <Divider hidden/>
                    </Container>
                ))}
            </Layout>
        )
    }
}
