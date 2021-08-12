import React, { Component } from 'react'
import Layout from '../../../../componentes/Layout/Layout';
import {Image,Divider,Container} from "semantic-ui-react"
import apiURL from '../../../../utils/apiURL';

export default class Pedidos extends Component {
    state ={
        media: []
    } 
    componentDidMount() {
        fetch(`${apiURL}/noticias-medioambientes`)
          .then((res) => res.json())
          .then((res) => this.setState({ media: res }));
      }
    render() {
        const info=this.state.media
        const pedidos= info && info[2]
        return (
            <Layout>
                {pedidos && pedidos.media.map((img)=>(
                    <Container centered key={img.id}>
                        <Image src={`${apiURL}${img.url}`}/>
                        <Divider hidden/>
                    </Container>
                ))}
            </Layout>
        )
    }
}