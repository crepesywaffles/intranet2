import Layout from "../../../../componentes/Layout/Layout";
import Carusel from "../../../../componentes/Carusel/Carusel";
import { Component } from "react";
import apiURL from "../../../../utils/apiURL";
import { Grid, Container, Image, Divider } from "semantic-ui-react";
import Directorio from "../../../../componentes/Directorio/Directorio";
import Grupobtn from "../../../../componentes/GrupoBtn/Grupobtn1";
import Modal from "../../../../componentes/Modal/Modal"
import Header from "../../../../assets/dh/CabezoteBienestar.png"
import { btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9 , btn10, btn11, btn12 ,btn13,btn14,Convenioscaja } from "../../../../assets/dh/Bienestar/index"
import { Carousel } from "react-bootstrap";
import {btn17} from "../../../../assets/dh/Bienestar/index"
import *as paths from "../../../../config/routing/paths";
import { Link } from "react-router-dom"

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
            .then((res) => this.setState({ link: res }));
    }

    render() {
        const sml = this.state.img
        const slider = sml.filter((sl) => (sl.Sliders.length > 0))[0]

        const link = this.state.link[0]


        return (
            <Layout>
                <Container fluid align="center">
                    <Image as={Link} to={paths.CON_DH} src={Header} />
                </Container>
                <Container fluid align="center">
                <Image src={btn17}/>
                </Container>
                {slider && (
                    <Carusel interval={3000}>
                        <Carousel.Item >
                            <img className=" d-block w-100"
                                src={`${slider.Sliders[0].url}`}
                            />
                        </Carousel.Item>
                    </Carusel>
                )}
                <Divider hidden />
                
                
                <Divider hidden />
                <Grid centered stackable columns={4} >
                    <Grid.Column computer={4} tablet={13} >
                        
                            {sml
                                .filter((info) => info.directorioBienestar != null)
                                .map((slider) => (
                                    <Directorio
                                        key={slider.id}
                                        nombre={slider.directorioBienestar.Nombre}
                                        // extension={slider.directorioBienestar.Extension}
                                        email={slider.directorioBienestar.Correo}
                                    />
                                ))}
                        

                    </Grid.Column>
                    
                    <Grid.Column computer={4} >
                        {/* <Container stackable centered aling="center"> */}
                            {/* catalogo de beneficios */}
                            <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} src={btn4} size="medium" centered />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=du96fask9s" width="100%" height="750" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                                </Container>
                            </Modal>
                            {/* Beneficios bachillerato */}
                            <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn3} />}

                            >
                                <Container>
                                    {link && (
                                        <Image src={`${link.Imagenes[0].url}`} size="massive" />
                                    )}
                                </Container>
                            </Modal>
                            {/* Afiliacione y retiros caja compensación */}
                            <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn1} AssetsBinestar />}

                            >
                                <Container>
                                    {link && (
                                        <Image src={`${link.Imagenes[1].url}`} size="massive" />
                                    )}
                                </Container>
                            </Modal>
                            {/* Apoyo Financiero */}
                            <Modal
                                open={false}
                                btn={<Grupobtn as={"a"} href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwVf8h5h1vF9KkioirAzwpGZUNDNGNjJHUDFXUVpWMDFDMVQzWDZDWDQwNC4u"
                                    target="_blank" class={"botonimg btn"} size="medium" src={btn10} />}
                            ></Modal>
                            {/* Subsidio Educativo */}
                            <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn13} />}

                            >
                                <Container>
                                    {link && (
                                        <Image src={`${link.Imagenes[6].url}`} size="massive" />
                                    )}
                                </Container>
                            </Modal>
                        {/* </Container> */}
                    </Grid.Column>
                    <Grid.Column computer={4} >
                        {/* <Container stackable centered> */}
                            {/* Catalogo de Medicionas prepagadas */}
                            <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn6} />}
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
                                        <Image src={`${link.Imagenes[3].url}`} size="massive" />
                                    )}
                                </Container>
                            </Modal>
                            {/* Retiro de cesantias */}
                            <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn7} AssetsBinestar />}

                            >
                                <Container>
                                    {link && (
                                        <Image src={`${link.Imagenes[2].url}`} size="massive" />
                                    )}
                                </Container>
                            </Modal>
                            {/* Apoyo Psicologico */}
                            <Modal
                                open={false}
                                btn={<Grupobtn as={Link} path={paths.CON_DH_BIENESTAR_APOYO} class={"botonimg btn"} size="medium" src={btn11} />}
                            >

                            </Modal>
                            {/* Subsidio monetario */}
                            <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn14} />}
                            >
                                <Container>
                                    {link && (
                                        <Image src={`${link.Imagenes[7].url}`} size="massive" />
                                    )}
                                </Container>
                            </Modal>
                        {/* </Container> */}
                    </Grid.Column>
                    <Grid.Column computer={4} >
                        {/* <Container stackable centered> */}
                            {/* Nuestros aliados */}
                            <Modal
                                open={false}
                                btn={<Grupobtn as={Link} path={paths.CON_DH_BIENESTAR_ALIADOS} class={"botonimg btn"} size="medium" src={btn9} />}
                            >

                            </Modal>
                            {/* Eventos */}
                            <Modal
                                open={false}
                                btn={<Grupobtn as={Link} path={paths.CON_DH_BIENESTAR_GALERIA} class={"botonimg btn"} size="medium" src={btn5} />}
                            >

                            </Modal>
                            {/* Servicios y Beneficios Caja compensación */}
                            <Modal
                                open={false}
                                btn={<Grupobtn as={"a"} href="https://corporativo.compensar.com" target="_blank" class={"botonimg btn"} size="medium" src={btn8} />}
                                size={"fullscreen"}

                            >
                            </Modal>
                            {/* Solicitud de carnet */}
                            <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn12} />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    {link && (
                                        <Image src={`${link.Imagenes[5].url}`} size="massive" />
                                    )}
                                </Container>
                            </Modal>
                            <Modal
                                open={false}
                                btn={<Grupobtn as={Link} path={paths.CON_DH_BIENESTAR_CONVENIO} class={"botonimg btn"} size="medium" src={Convenioscaja} />}
                            >

                            </Modal>
                        {/* </Container> */}
                    </Grid.Column>
                </Grid>
            </Layout>
        );
    }
}

