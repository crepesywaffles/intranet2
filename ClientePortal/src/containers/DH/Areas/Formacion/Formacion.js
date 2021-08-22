import Layout from "../../../../componentes/Layout/Layout";
import Carusel from "../../../../componentes/Carusel/Carusel";
import { Component } from "react";
import apiURL from "../../../../utils/apiURL";
import { Grid, Container, Image, Divider, Button } from "semantic-ui-react";
import Directorio from "../../../../componentes/Directorio/Directorio";
import Grupobtn from "../../../../componentes/GrupoBtn/Grupobtn1";
import Modal from "../../../../componentes/Modal/Modal"
import { btn1, btn2, btn3, btn4, btn5, btn6,btn7, Header,Info} from "../../../../assets/dh/Formacion/index"
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import *as paths from "../../../../config/routing/paths";
import Buscador from "../../../../componentes/Buscador/Buscador"


export default class Formacion extends Component {
    state = {
        img: [],
        prg: []
    };

    componentDidMount() {
        fetch(`${apiURL}/formacions`)
            .then((res) => res.json())
            .then((res) => this.setState({ img: res }));
        fetch(`${apiURL}/programas-de-entrenamiento`)
            .then((res) => res.json())
            .then((res) => this.setState({ prg: res }));
    }

    render() {
        const sml = this.state.img[0]
        const pro = this.state.prg.programas
        console.log(pro)



        return (
            <Layout>
                <Container fluid align="center">
                <Image as={Link} to={paths.CON_DH} src={Header} />
                </Container>
                <Container fluid align="center">
                    <Image src={Info} />
                </Container>
                {/* <Carusel interval={3000}>
                    {sml && (
                        sml.Sliders.map((sl) => (
                            <Carousel.Item key={sl.id}>
                                <img className=" d-block w-100"
                                    src={`${sl.url}`}
                                />
                            </Carousel.Item>

                        ))
                    )}
                </Carusel> */}
                <Divider hidden />
                
                <Divider hidden />
                <Grid centered stackable columns={4}>
                    <Grid.Column>
                        <Container stakcable aling="center">
                            {sml && (
                                sml.directorio.map((sml) => (
                                    <Directorio
                                        key={sml.id}
                                        nombre={sml.Nombre}
                                        // extension={sml.Extension}
                                        email={sml.Correo}
                                    />
                                )))}
                        </Container>

                    </Grid.Column>
                    <Grid.Column>
                        <Container stackable centered aling="center">
                            {/* Evaluacion de desempeño*/}
                            <Modal
                                open={false}
                                btn={<Grupobtn as={"a"} href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwV7BWg1ooP9NvjviDI8_YQ5UNkpLTDRDRlZJM1FPODg1TE00UDhGQ0JUTy4u"
                                    target="_blank" class={"botonimg btn"} size="medium" src={btn1} />}
                            >
                            </Modal>
                            {/* Periodo de prueba */}
                            <Modal
                                open={false}
                                btn={<Grupobtn as={"a"} href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwV7BWg1ooP9NvjviDI8_YQ5UMDVNSkIxN0MyWU1FQ1YwMkE5M1ZCSldNTC4u"
                                    target="_blank" class={"botonimg btn"} size="medium" src={btn2} />}

                            >
                            </Modal>
                            {/* Programas de entrenamiento*/}
                            <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn3} AssetsBinestar />}

                            >
                                <Container>
                                    {pro && pro.map((pr) => (
                                        <li className="lista-programas">
                                            <Container textAlign="center">
                                                <Button className="programas_E" as={"a"} color="black" href={`${pr.url}`} download={`${pr.name}`}>{`${pr.name}`}</Button>
                                                <Divider hidden />
                                            </Container>

                                        </li>

                                    ))
                                    }
                                </Container>
                            </Modal>
                            
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container stackable centered>
                            {/* info toderas */}
                            {/* <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn4} />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    <Buscador />
                                </Container>
                            </Modal> */}
                            {/* Universidad Coorporativa */}
                            {/* <Modal
                                btn={<Grupobtn as={"a"} class={"botonimg btn"} size="medium" src={btn5} />}
                            >
                                <Container>

                                </Container>
                            </Modal> */}
                            <Modal
                                open={false}
                                btn={<Grupobtn as={"a"} href="https://forms.gle/HdHSD8rFoNJMU9SS8"
                                    target="_blank" class={"botonimg btn"} size="medium" src={btn7} />}

                            ></Modal>
                            <Modal

                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn6} />}
                                size={"fullscreen"}

                            >

                                <iframe src="https://outlook.office365.com/owa/calendar/14233adb853d4e3bbd213c8d6813f476@crepesywaffles.com/490a444a2a1d469b9ad3879b14eb2e153748042896991813961/calendar.html" width="100%" height="800" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen />

                            </Modal>
                        </Container>
                    </Grid.Column>
                </Grid>
            </Layout>
        );
    }
}



