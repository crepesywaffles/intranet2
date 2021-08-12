import React, { Component } from 'react'
import Layout from '../../../../componentes/Layout/Layout';
import {Image,Divider,Container} from "semantic-ui-react"
import apiURL from '../../../../utils/apiURL';

export default class AguaResidual extends Component {
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
        const aguaresidual= info && info[1]
        return (
            <Layout>
                {aguaresidual && aguaresidual.media.map((img)=>(
                    <Container centered key={img.id}>
                        <Image src={`${apiURL}${img.url}`}/>
                        <Divider hidden/>
                    </Container>
                ))}
            </Layout>
        )
    }
}