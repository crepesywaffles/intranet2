import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {EmpresasB1,EmpresasB2} from "../../assets/nuestraempresa/index"
import {Image,Container} from "semantic-ui-react"
import ReactPlayer from "react-player"


export default class Empresasb extends Component {
    render() {
        return (
            <Layout>
                <Image src={EmpresasB1}/>
                <Container centered align="center" >
                            <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://www.youtube.com/watch?v=uxqeJD2Jb_g"
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                            </Container>
                </Container>
                <Image src={EmpresasB2}/>
                <Container centered align="center" >
                            <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://www.youtube.com/watch?v=zMs-kH9FKfc"
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
