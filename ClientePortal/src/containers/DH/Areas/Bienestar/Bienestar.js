import Layout from "../../../../componentes/Layout/Layout";
import Carusel from "../../../../componentes/Carusel/Carusel";
import { Component } from "react";
import apiURL from "../../../../utils/apiURL";
import { Grid, Container, Image, Divider } from "semantic-ui-react";
import Directorio from "../../../../componentes/Directorio/Directorio";
import Grupobtn from "../../../../componentes/GrupoBtn/Grupobtn1";
import Modal from "../../../../componentes/Modal/Modal"
import Header from "../../../../assets/dh/CabezoteBienestar.png"
import { btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8,btn9 } from "../../../../assets/dh/Bienestar/index"
import { Carousel } from "react-bootstrap";
import*as paths from "../../../../config/routing/paths";
import {Link} from "react-router-dom"

export default class Bienestar extends Component {
    state = {
        img: [],
        link: []
    };

    componentDidMount() {
        fetch(`${apiURL}/bienestar-sliders`)
            .then((res) => res.json())
            .then((res) => this.setState({ img: res }));
        fetch(`${apiURL}/bienestarlinks`)
            .then((res) => res.json())
            .then((res) => this.setState({ link : res }));
    }

    render() {
        const sml = this.state.img
        const slider = sml.filter((sl) => (sl.Sliders.length > 0))[0]
        
        const link= this.state.link[0]
        

        return (
            <Layout>
                {slider && (
                    <Carusel interval={3000}>
                        <Carousel.Item >
                            <img className=" d-block w-100"
                                src={`${apiURL}${slider.Sliders[0].url}`}
                            />
                        </Carousel.Item>
                    </Carusel>
                )}
                <Divider hidden />
                <Container fluid align="center">
                    <Image as={Link}  to={paths.CON_DH} src={Header} />
                </Container>
                <Divider hidden />
                <Grid centered stackable columns={4}>
                    <Grid.Column>
                        <Container stakcable aling="center">
                            {sml
                                .filter((info) => info.directorioBienestar != null)
                                .map((slider) => (
                                    <Directorio
                                        key={slider.id}
                                        nombre={slider.directorioBienestar.Nombre}
                                        extension={slider.directorioBienestar.Extension}
                                        email={slider.directorioBienestar.Correo}
                                    />
                                ))}
                        </Container>

                    </Grid.Column>
                    <Grid.Column>
                        <Container stackable centered aling="center">
                        {/* catalogo de beneficios */}
                        <Modal
                            btn={<Grupobtn as={"button"} class={"botonimg btn"} src={btn4} size="medium" centered/>}
                            size={"fullscreen"}
                        >
                            <Container>
                                <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=du96fask9s" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                            </Container>
                        </Modal>
                        {/* Beneficios bachillerato */}
                        <Modal
                            btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn3}/>}
                            
                        >
                            <Container>
                                {link && (
                                    <Image  src={`${apiURL}${link.Imagenes[0].url}`} size="massive"/>
                                )}
                            </Container>
                        </Modal>
                        {/* Afiliacione y retiros caja compensación */}
                        <Modal
                            btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn1} AssetsBinestar  />}
                            
                        >
                            <Container>
                            {link && (
                                    <Image  src={`${apiURL}${link.Imagenes[1].url}`} size="massive"/>
                                )}
                            </Container>
                        </Modal>    
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container stackable centered>
                        {/* Catalogo de Medicionas prepagadas */}
                        <Modal
                            btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn6}/>}
                            size={"fullscreen"}
                        >
                            <Container>
                            <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=dk8om85tk5" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                            </Container>
                        </Modal>
                        {/* Afiliaicones y retiros EPS */}
                        <Modal
                            btn={<Grupobtn as={"a"} class={"botonimg btn"} size="medium" src={btn2} />}
                            
                        >
                            <Container>
                            {link && (
                                    <Image  src={`${apiURL}${link.Imagenes[3].url}`} size="massive"/>
                                )}
                            </Container>
                        </Modal>
                        {/* Retiro de cesantias */}
                        <Modal
                            btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn7} AssetsBinestar  />}
                            
                        >
                            <Container>
                            {link && (
                                    <Image  src={`${apiURL}${link.Imagenes[2].url}`} size="massive"/>
                                )}
                            </Container>
                        </Modal>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container stackable centered>
                        {/* Nuestros aliados */}
                        <Modal
                            btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn9}/>}
                        >
                            <Container>
                            {link && (
                                    <Image  src={`${apiURL}${link.Imagenes[4].url}`} size="massive"/>
                                )}
                            </Container>
                        </Modal>
                        {/* Eventos */}
                        <Modal
                            btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn5} />}
                            
                        >
                            <Container>
                            {link && (
                                    <Image  href={`${apiURL}${link.Imagenes[4].url}`} size="massive"/>
                                )}
                            </Container>
                        </Modal>
                        {/* Servicios y Beneficios Caja compensación */}
                        <Modal 
                            open={false}
                            btn={<Grupobtn as={"a"} href="https://corporativo.compensar.com" target="_blank" class={"botonimg btn"} size="medium" src={btn8}   />}
                            size={"fullscreen"}
                            
                        >
                        </Modal>
                        </Container>
                    </Grid.Column>
                </Grid>
            </Layout>
        );
    }
}

