import React from "react";
import Layout from "../../../../componentes/Layout/Layout";
import { Container } from "semantic-ui-react";
import ReactPlayer from "react-player";
export default function Videos() {
  return (
    <Layout>
      <Container centered align="center">
        <h1>Soñar sin miedo-Maluma</h1>
        <Container className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/ZMFne0Aw3s4"
            width="100%"
            height="100%"
            controls="false"
          />
        </Container>
      </Container>
      <Container centered align="center">
        <h1>La mujer de los siete nombres-Yineth</h1>
        <Container className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/ilccI5d5yc8"
            width="100%"
            height="100%"
            controls="false"
          />
        </Container>
      </Container>
    </Layout>
  );
}
