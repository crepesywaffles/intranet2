import React, { Component } from 'react'
import { Image,Divider,Container } from 'semantic-ui-react'
import ReactPlayer from 'react-player'
import {pieza1,pieza2,pieza3,pieza4,pieza5} from "../../assets/tutorial/index"
import Logo from "../../assets/home/LogoMoneda.png"
import {Link} from "react-router-dom"
import *as paths from "../../config/routing/paths"

export default class Tutorial extends Component {
    render() {
        return (
            <Container className="p-5">
                <Container className="d-flex justify-content-center">
                <Image  alt="Logo a login" as={Link} to={paths.CON_LOGIN} src={Logo}/>
                </Container>
                <h5 className="text-center">Click en el logo para volver a la intranet</h5>
                <Divider hidden/>
                <Image alt="explicacion de que es una intranet abajo puedes encontrar un video"src={pieza1} fluid />
                <Divider hidden/>
                <Image alt="explicacion de que es una intranet abajo puedes encontrar un video"src={pieza2} fluid />
                <Divider hidden/>
                <Image alt="explicacion de que es una intranet abajo puedes encontrar un video"src={pieza3} fluid />
                <Divider hidden/>
                <Image alt="explicacion de que es una Ana la Artesana abajo puedes encontrar un video"src={pieza4} fluid />
                <Divider hidden/>
                <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://youtu.be/5hkv7ToCsMU"
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                </Container>
                <Divider hidden/>
                <Image alt="explicacion de que es una Ana la Artesana abajo puedes encontrar un video"src={pieza5} fluid />
                <Divider hidden/>
                <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://youtu.be/bUPYBUciOcQ"
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                </Container>
            </Container>
        )
    }
}
