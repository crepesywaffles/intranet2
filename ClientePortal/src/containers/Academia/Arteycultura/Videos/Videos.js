import React from "react";
import Layout from "../../../../componentes/Layout/Layout";
import ReactPlayer from "react-player";
import {Container} from "semantic-ui-react"

export default function Videos() {
  return (
    <Layout>
      <Container centered>
      <h1>CONCIERTO EN CASA</h1>
      </Container>
      <Container centered align="center">
        <h1>Maribel</h1>
        <Container className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/cbSVKGw-9D0 "
            width="100%"
            height="100%"
            controls="false"
          />
        </Container>
      </Container>
      <Container centered align="center">
        <h1>Poliarco</h1>
        <Container className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/QR30l_4jmwU"
            width="100%"
            height="100%"
            controls="false"
          />
        </Container>
      </Container>
      <Container centered align="center">
        <h1>Nercy</h1>
        <Container className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/2_osPhWH4Qk "
            width="100%"
            height="100%"
            controls="false"
          />
        </Container>
      </Container>
      <Container centered align="center">
        <h1>Skraft</h1>
        <Container className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/5-LrmXEYQzw"
            width="100%"
            height="100%"
            controls="false"
          />
        </Container>
      </Container>
      <Container centered align="center">
        <h1>Vanessa</h1>
        <Container className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/y67ewY1FHM0"
            width="100%"
            height="100%"
            controls="false"
          />
        </Container>
      </Container>
      <Container centered>
      <h1>ARTE Y CULTURA</h1>
      </Container>
      <Container centered align="center">
        <h1>El poder del arte-Juanes</h1>
        <Container className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/pN5WVyxmLiI"
            width="100%"
            height="100%"
            controls="false"
          />
        </Container>
      </Container>
      <Container centered align="center">
        <h1>El placer de la literatura-Hector Abad Faciolince</h1>
        <Container className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/a14QWNDqsMg"
            width="100%"
            height="100%"
            controls="false"
          />
        </Container>
      </Container>
      <Container centered align="center">
        <h1>El arte y la cultura como bienestar-Fonseca</h1>
        <Container className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/mLZZtv2DqwE"
            width="100%"
            height="100%"
            controls="false"
          />
        </Container>
      </Container>
    </Layout>
  );
}
