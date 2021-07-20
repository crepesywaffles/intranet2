import React from 'react'
import Layout from "../../componentes/Layout/Layout"
import Carusel from "../../componentes/Carusel/Carusel"
import { Image, Container, Divider, Grid } from "semantic-ui-react"
import Boton1 from "../../assets/home/Analisisdeventas.png"
import Boton2 from "../../assets/home/BotonAniversarios.png"
import Boton3 from "../../assets/home/BotonBeneficios.png"
import Boton4 from "../../assets/home/BotonCOVID19.png"
import Boton5 from "../../assets/home/BotonCumpleaños.png"
import Boton6 from "../../assets/home/BotonEcommerce.png"
import {Vacunacion} from "../../assets/vacunacion/index"

import "../Home/Home.css"
import { Component } from 'react'
import apiURL from "../../utils/apiURL"
import { Carousel } from "react-bootstrap"
import ReactPlayer from "react-player"
import *as paths from "../../config/routing/paths"
import {Link} from "react-router-dom"




class Home extends Component {

    state = {
        img: [],
        link: [],
        day: [],
    }
    componentDidMount() {
        fetch(`${apiURL}/homesliders`)
            .then(res => { return res.json() })
            .then(res => {
                this.setState({ img: res[0].sliders })
            })
        fetch(`${apiURL}/homevideo`)
            .then(res => { return res.json() })
            .then(res => {
                this.setState({ link: res })
            })
        fetch(`${apiURL}/Imagendiaria`)
            .then(res => { return res.json() })
            .then(res => {
                this.setState({ day: res })
        

            })
    }
    render() {
        const day = this.state.day.Imagen
        console.log(day)
        return (

            <Layout>
                <Carusel>
                    {this.state.img.map((task, index) =>
                        <Carousel.Item >
                            <img className=" d-block w-100 " key={index.id} alt={task.name + "Slider"} src={`${task.url}`} />
                        </Carousel.Item>
                    )}
                </Carusel>
                <Divider hidden />
                <Grid doubling centered columns={2}>

                    <Grid.Column verticalAlign="middle" textAlign="center">
                        <Container centered align="center" >
                            <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url={this.state.link.url}
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                            </Container>
                            <Container>
                                {day && (
                                    <Image src={`${day.url}`}/>
                                )}
                            </Container>
                        </Container>
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle">
                        <Container align="center">
                            <Image.Group className="mobile-img" size="medium">
                                {/* <Image as="a" target="_blanck" href="http://169.48.72.72/opencart/upload/index.php?route=common/home" className="botonimg" rounded src={Boton6} /> */}
                                {/* <Image className="botonimg" as="a" target="_blanck" href="https://manual.crepesywaffles.com:8090/Login.aspx?ReturnUrl=%2fdefault.aspx"rounded src={Boton1} />
                                <Image className="botonimg" rounded src={Boton2} /> */}
                                <Image as={Link} to={paths.CON_VACUNACION} className="botonimg" rounded src={Vacunacion} />
                                <Image as={Link} to={paths.CON_DH_BIENESTAR} className="botonimg" rounded src={Boton3} />
                                <Image as={Link} to={paths.CON_DH_SST_COVID} className="botonimg" rounded src={Boton4} />
                                <Image className="botonimg" rounded />
                            </Image.Group>
                        </Container>
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }

}

export default Home;
