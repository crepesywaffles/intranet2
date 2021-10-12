import React from 'react'
import ReactPlayer from 'react-player'
import Layout from '../../../../componentes/Layout/Layout'
import {Container} from "semantic-ui-react"

export default function Videos() {
    return (
        <Layout>
            <Container centered align="center">
          <h1>La tierra en nosotros-Toya Montoya</h1>
          <Container className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/JoKe766f2p8"
              width="100%"
              height="100%"
              controls="false"
            />
          </Container>
          </Container>
          <Container centered align="center">
          <h1>Aprender a amar lo nuestro-Carlos Vives</h1>
          <Container className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/XphNpDgy45k"
              width="100%"
              height="100%"
              controls="false"
            />
          </Container>
          </Container>
        </Layout>
    )
}
