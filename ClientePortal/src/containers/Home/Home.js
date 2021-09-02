import React from 'react'
import Layout from "../../componentes/Layout/Layout"
import Carusel from "../../componentes/Carusel/Carusel"
import { Image, Container, Divider, Grid,List } from "semantic-ui-react"
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
        update:[]
    }
    componentDidMount() {
        fetch(`${apiURL}/homesliders`)
            .then(res => { return res.json() })
            .then(res => {
                this.setState({ img: res })
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
        fetch(`${apiURL}/actualizaciones`)
        .then(res => { return res.json() })
        .then(res => {
            this.setState({ update: res })
        })
    }
    render() {
        const day = this.state.day.Imagen
        const slider1= this.state.img[0]
        const href1= slider1 && slider1.url
        const slider2= this.state.img[1]
        const href2= slider2 && slider2.url
        const updates = this.state.update
        console.log(href1)
        return (

            <Layout>
                <Carusel>
                    {slider1 && slider1.sliders.map((task, index) =>
                        <Carousel.Item >
                            {/* <a href={href1}> */}
                                <img className=" d-block w-100 " key={index.id} alt={task.name + "Slider"} src={`${apiURL}${task.url}`}/>
                            {/* </a> */}
                        </Carousel.Item>
                    )}
                    {slider2 && slider2.sliders.map((task, index) =>
                        <Carousel.Item >
                            <a href={href2} target="_blank">
                                <img className=" d-block w-100 " key={index.id} alt={task.name + "Slider"} src={`${apiURL}${task.url}`}/>
                            </a>
                        </Carousel.Item>
                    )}
                </Carusel>
                <Divider hidden />
                <Grid celled stackable>
                <Grid.Column width={8}>
                <Container className="text-center">
                        <h2><strong>Panel de actualizaciones</strong></h2>
                        <spam>Dale click sobre la actualización de tu interes para conocerla de primera mano</spam>
                        <br/><br/>
                        {updates && updates.map((e)=>(
                            <div>
                                <div className="d-flex justify-content-center">
                                <List divided relaxed>
                                <List.Item>
                                    <List.Icon name='bell' size='small' verticalAlign='middle' />
                                    <List.Content>
                                    <List.Header as='a' href={`${e.url}`}>{e.titulo}</List.Header>
                                    <List.Description as='a'>{e.descripcion}</List.Description>
                                    </List.Content>
                                    </List.Item>
                                </List>
                                </div>
                            </div>
                        ))}
                </Container>
                </Grid.Column>
                <Grid.Column width={8}>
                <Container>
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
                
                </Container>
                </Grid.Column>
                </Grid>
                
                
                <Grid doubling centered celled columns={2}>
                    <Grid.Column verticalAlign="middle" textAlign="center">
                        <Container centered align="center" >
                            <Container className="player-wrapper w-100">
                                <ReactPlayer
                                    className='react-player'
                                    url={this.state.link.url}
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                            </Container>
                            
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                    {day && (
                                    <Image src={`${apiURL}${day.url}`}/>
                                )}
                    
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }

}

export default Home;

