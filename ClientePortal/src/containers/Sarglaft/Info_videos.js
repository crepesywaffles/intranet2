import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import ReactPlayer from "react-player"
import {Container} from "semantic-ui-react"



export default class Info_videos extends Component {
    render() {
        return (
            <Layout>
                <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://www.youtube.com/watch?v=2qLSQznjXVs&feature=youtu.be"
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                </Container>
            </Layout>
        )
    }
}