import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image,Grid,Container,Divider} from "semantic-ui-react"
import {Infoplantapro} from "../../assets/Misiones/index"
import {Mural,Actividades,ConoceCocina,Practicas,Salsas} from "../../assets/produccion/index"
import Grupobtn from '../../componentes/GrupoBtn/Grupobtn1'
import Modal from "../../componentes/Modal/Modal"
import apiURL from '../../utils/apiURL'
import Directorio from '../../componentes/Directorio/Directorio'

export default class Plantaproduccion extends Component {
    state = {
        img: [],
    };

    componentDidMount() {
        fetch(`${apiURL}/planta-produccions`)
            .then((res) => res.json())
            .then((res) => this.setState({ img: res }));
        
    }
    render() {
        const info= this.state.img[0]
        const dir=this.state.img
        const vision= info && info.Imagenes[0].url
        const conoce= info && info.Imagenes[1].url
        const actividades= info && info.Imagenes[2].url
        const mural1= info && info.Imagenes[3].url
        const mural2= info && info.Imagenes[4].url
        return (
            <Layout>
                <Image src={Infoplantapro}/>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="w-25">
                    {info && info.directorio.map((slider)=>(
                    <Directorio
                        key={slider.id}
                        nombre={slider.Nombre}
                        extension={slider.Extension}
                        
                    />
                    ))}
                    </div>
                    <div className="Col">
                    <Image src={`${apiURL}${vision}`} size="large" />
                    </div>
                    </div>
                
                <Grid centered stackable>
                    <Grid.Row>
                    <Grid.Column width={4}>
                    <Modal
                                open={false}
                                btn={<Grupobtn as={"a"} href={`${apiURL}${conoce}`}
                                    target="_blank" class={"botonimg btn"} size="medium" src={ConoceCocina} />}
                            ></Modal>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={Actividades} />}
                            >
                                <Container>
                                    <Image src={`${apiURL}${actividades}`}/>
                                </Container>
                            </Modal>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={Mural} />}
                            >
                                <Container>
                                <Container>
                                    <Image src={`${apiURL}${mural1}`}/>
                                </Container>
                                <Container className="p-5">
                                    <Image src={`${apiURL}${mural2}`}/>
                                </Container>
                                </Container>
                            </Modal>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={4}>
                    <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={Salsas} />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=1magncz2gx" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                                </Container>
                            </Modal>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={Practicas} />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=tjfwctvqwd" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                                </Container>
                            </Modal>
                    </Grid.Column>              
                            
                    </Grid.Row>
                </Grid>
            </Layout>
        )
    }
}
