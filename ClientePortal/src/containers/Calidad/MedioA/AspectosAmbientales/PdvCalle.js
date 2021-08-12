import React, { Component } from 'react'
import Layout from '../../../../componentes/Layout/Layout'
import {AguaPotable,AguaResidual,ResiduosSolidos} from "../../../../assets/calidad/M.A/AspectosGenerales/index"
import {Grid, Container,Image,Divider} from "semantic-ui-react"
import {Link} from "react-router-dom"
import Modal from "../../../../componentes/Modal/Modal"
import Grupobtn from '../../../../componentes/GrupoBtn/Grupobtn1'
import apiURL from '../../../../utils/apiURL'
import ReactPlayer from "react-player"


export default class PdvCalle extends Component {
    state ={
        media: []
    } 
    componentDidMount() {
        fetch(`${apiURL}/aspectos-ambientales`)
          .then((res) => res.json())
          .then((res) => this.setState({ media: res }));
      }
    render() {
        const info=this.state.media
        const aguapotable= info && info[5]
        const residual= info && info[6]
        const residuos = info && info[8]
        
        return (
            <Layout>
                <Grid centered>
                <Grid.Column width={4}>
                <Modal
                    btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={AguaPotable} />}
                    size={"fullscreen"}
                >
                    <>
                    {aguapotable && aguapotable.media.map((img)=>(
                        <Modal
                        key={img.id}
                        btn={<div as="buttom" className="item">{img.name}</div>}
                        size={"fullscreen"}

                    >
                    {
                        img.ext == ".pdf" ?
                        
                        <a href={`${apiURL}${img.url}`} target="_blank">{img.name}</a>
                       
                        :
                        <Image src={`${apiURL}${img.url}`}/>
                    }
                    </Modal>
                    ))}
                    <Divider hidden/>
                    <Container centered align="center" >
                            <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://youtu.be/REFicz0An1Q "
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                            </Container>
                </Container>
                    </>
                    
                </Modal>
                </Grid.Column>
                <Grid.Column width={4}>
                <Modal
                    btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={AguaResidual} />}
                    size={"fullscreen"}
                >
                    <>
                    {residual && residual.media.map((img)=>(
                        <Modal
                        key={img.id}
                        btn={<div as="buttom" className="item">{img.name}</div>}
                        size={"fullscreen"}

                    >
                    {
                        img.ext == ".pdf" ?
                        
                        <a href={`${apiURL}${img.url}`} target="_blank">{img.name}</a>
                       
                        :
                        <Image src={`${apiURL}${img.url}`}/>
                    }
                    </Modal>
                    ))}
                    <Divider hidden/>
                    <Container centered align="center" >
                            <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://www.youtube.com/watch?v=cmthnMCnGuk&rel=0"
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                            </Container>
                </Container>
                <Divider hidden/>
                    <Container centered align="center" >
                            <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://www.youtube.com/watch?v=KV7JpSQlgTA "
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                            </Container>
                </Container>
                <Divider hidden/>
                    <Container centered align="center" >
                            <Container className="player-wrapper">
                                <ReactPlayer
                                    className='react-player'
                                    url="https://youtu.be/QDsA3q7fEGk"
                                    width='100%'
                                    height='100%'
                                    controls="false"
                                />
                            </Container>
                </Container>
                    </>
                </Modal>
                </Grid.Column>
                <Grid.Column width={4}>
                <Modal
                    btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={ResiduosSolidos} />}
                    size={"fullscreen"}
                >
                    {residuos&& residuos.media.map((img)=>(
                        <Modal
                        key={img.id}
                        btn={<div as="buttom" className="item">{img.name}</div>}
                        size={"fullscreen"}

                    >
                    {
                        img.ext == ".pdf" ?
                        
                        <a href={`${apiURL}${img.url}`} target="_blank">{img.name}</a>
                       
                        :
                        <Image src={`${apiURL}${img.url}`}/>
                    }
                    </Modal>
                    ))}
                </Modal>
                </Grid.Column>
                {/* <Grid.Column width={4}>
                <Modal
                    btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={AguaPotable} />}
                    size={"fullscreen"}
                >
                    <Modal
                        btn={<div as="buttom" className="item">Higienización Restaurantes</div>}
                        size={"fullscreen"}

                    >
                        <Container>
                           
                        </Container>
                </Modal>
                </Modal>
                </Grid.Column> */}
                </Grid>
            </Layout>
        )
    }
}