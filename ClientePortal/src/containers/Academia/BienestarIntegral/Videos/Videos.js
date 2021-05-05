import React, { Component } from 'react'
import Layout from "../../../../componentes/Layout/Layout"
import {Container} from "semantic-ui-react"
import ReactPlayer from "react-player"

export default class Videos extends Component {
    render() {
        return (
            <Layout>
                <Container centered align="center" >
                                       <h1>Resilencia Daniela Alvarez</h1> 
                                   <Container  className="player-wrapper">
                                       <ReactPlayer
                                           className='react-player'
                                           url="https://www.youtube.com/watch?v=0yQTBURTVPc"
                                           width='100%'
                                           height='100%'
                                           controls="false"
                                       />
                                   </Container>
                                   </Container>
            </Layout>
        )
    }
}
