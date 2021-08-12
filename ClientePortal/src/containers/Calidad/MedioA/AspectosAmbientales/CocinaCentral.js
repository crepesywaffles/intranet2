import React, { Component } from 'react'
import Layout from '../../../../componentes/Layout/Layout'
import {AguaPotable,AguaResidual,ResiduosSolidos} from "../../../../assets/calidad/M.A/AspectosGenerales/index"
import {Grid, Container,Image,Divider} from "semantic-ui-react"
import {Link} from "react-router-dom"
import Modal from "../../../../componentes/Modal/Modal"
import Grupobtn from '../../../../componentes/GrupoBtn/Grupobtn1'
import apiURL from '../../../../utils/apiURL'
import { CON_SOSTENIBILIDAD_MONTES } from '../../../../config/routing/paths'


export default class CocinaCentral extends Component {
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
        const aguapotable= info && info[0]
        const residual= info && info[1]
        const residuos = info && info[3]
        console.log(residual && residual.media.map((img)=>(img.url)))
        return (
            <Layout>
                <Grid centered>
                <Grid.Column width={4}>
                <Modal
                    btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={AguaPotable} />}
                    size={"fullscreen"}
                >
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
                    
                </Modal>
                </Grid.Column>
                <Grid.Column width={4}>
                <Modal
                    btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={AguaResidual} />}
                    size={"fullscreen"}
                >
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
