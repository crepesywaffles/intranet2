import Layout from "../../../../componentes/Layout/Layout";
import Carusel from "../../../../componentes/Carusel/Carusel";
import { Component } from "react";
import apiURL from "../../../../utils/apiURL";
import { Grid, Container, Image, Divider } from "semantic-ui-react";
import Directorio from "../../../../componentes/Directorio/Directorio";
import Grupobtn from "../../../../componentes/GrupoBtn/Grupobtn1";
import Modal from "../../../../componentes/Modal/Modal"
import { btn1, btn2, btn3, btn4, btn5,Header } from "../../../../assets/dh/Formacion/index"
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import*as paths from "../../../../config/routing/paths";

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
                <Carusel interval={3000}>
                {sml && (
                    sml.Sliders.map((sl)=>(
                        <Carousel.Item key={sl.id}>
                            <img className=" d-block w-100"
                                src={`${apiURL}${sl.url}`}
                            />
                        </Carousel.Item>

                    ))
                )}
                </Carusel>
                <Divider hidden />
                <Image as={Link}  to={paths.CON_DH}src={Header}/>
                <Divider hidden />
                <Grid centered stackable columns={4}>
                    <Grid.Column>
                        <Container stakcable aling="center">
                            {sml && (
                                sml.directorio.map((sml)=>(
                                <Directorio
                                        key={sml.id}
                                        nombre={sml.Nombre}
                                        extension={sml.Extension}
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
                        target="_blank" class={"botonimg btn"} size="medium" src={btn1}  />}
                        >
                        </Modal>
                        {/* Periodo de prueba */}
                        <Modal
                            open={false} 
                            btn={<Grupobtn as={"a"} href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwV7BWg1ooP9NvjviDI8_YQ5UMDVNSkIxN0MyWU1FQ1YwMkE5M1ZCSldNTC4u"
                            target="_blank" class={"botonimg btn"} size="medium" src={btn2}  />}
                            
                        >
                        </Modal>
                        {/* Programas de entrenamiento*/}
                        <Modal
                            btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn3} AssetsBinestar  />}
                            
                        >
                            <Container>
                            { pro && pro.map((pr)=>(
                                <li className="lista-programas">
                                    <a href={`${apiURL}${pr.url}`} download={`${pr.name}`}>{`${pr.name}`}</a>
                                </li>
                                
                            ))
                            }
                            </Container>
                        </Modal>    
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container stackable centered>
                        {/* Catalogo de Medicionas prepagadas */}
                        <Modal
                            btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btn4}/>}
                            size={"fullscreen"}
                        >
                            <Container>
                            <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=dk8om85tk5" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                            </Container>
                        </Modal>
                        {/* Afiliaicones y retiros EPS */}
                        <Modal
                            btn={<Grupobtn as={"a"} class={"botonimg btn"} size="medium" src={btn5} />}
                            
                        >
                            <Container>
                            
                            </Container>
                        </Modal>
                        </Container>
                    </Grid.Column>
                </Grid>
            </Layout>
        );
    }
}

