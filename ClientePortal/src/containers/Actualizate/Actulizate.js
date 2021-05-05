import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Container,Divider} from "semantic-ui-react"
import ReactPlayer from "react-player"

export default class Actulizate extends Component {
    render() {
        const embedstyle = {
            boder:"none",
            overflow:"hidden"
        }
        return (
            <Layout>
                <Container centered align="center" >
                            <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://www.youtube.com/watch?v=p8NCaFxfre0"
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                            </Container>
                </Container>
                <Divider hidden/>
                <Container centered align="center" >
                <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FINALDEBusinessSchool%2Fvideos%2F323680035411516%2F&width=1100&show_text=false&appId=4466713683358745&height=413" width="1100" height="500" style={embedstyle} scrolling="yes" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                </Container>
                
            </Layout>
        )
    }
}
