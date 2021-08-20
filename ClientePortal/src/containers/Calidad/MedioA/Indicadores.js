import React, { Component } from 'react'
import Layout from '../../../componentes/Layout/Layout'
import apiURL from '../../../utils/apiURL';
import {Image,Divider} from "semantic-ui-react"

export default class Indicadores extends Component {
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
        const infos= info && info[5]
        console.log(infos && infos.media.map((img)=>(img.url)))
        return (
            <Layout>
                {infos && infos.media.map((img)=>(
                    <>
                    <Image key={img.id} src={`${apiURL}${img.url}`} fluid/>
                    <Divider hidden/>
                    </>
                ))}
            </Layout>
        )
    }
}
