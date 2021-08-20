import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import apiURL from '../../../utils/apiURL';
import {Image,Container,Divider} from "semantic-ui-react"

export default class Documentacion extends Component {
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
        const documentacion= info && info[1]
        return (
            <Layout>
                {documentacion && documentacion.noticia.map((img)=>(
                    <Container key={img.id}>
                        <Image src={`${apiURL}${img.url}`}/>
                        <Divider hidden/>
                    </Container>
                ))}
            </Layout>
        )
    }
}
