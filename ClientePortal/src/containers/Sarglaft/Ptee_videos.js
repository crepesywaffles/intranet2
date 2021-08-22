import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Container} from "semantic-ui-react"
import ReactPlayer from "react-player"




export default class Ptee_videos extends Component {
    render() {
        return (
            <Layout>
                <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://youtu.be/a1GekVQkmG0"
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                </Container>
                <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://youtu.be/7ztJAH6lv00"
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                </Container>
                <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://youtu.be/m3hT8wOUf5s"
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                </Container>
                <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://youtu.be/2x4LOZoBVOE"
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                </Container>
                <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://youtu.be/1dk7Knbg03s"
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                </Container>
                <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://youtu.be/W9hO0cQFlqU"
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                </Container>
            </Layout>
        )
    }
}