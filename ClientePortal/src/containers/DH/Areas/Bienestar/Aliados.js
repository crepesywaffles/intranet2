import React, { Component } from 'react'
import Layout from "../../../../componentes/Layout/Layout"
import Header from "../../../../assets/dh/CabezoteBienestar.png"
import { Image,Divider,Grid,Container } from "semantic-ui-react"
import { Link } from "react-router-dom"
import *as paths from "../../../../config/routing/paths";
import { btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9 , btn10} from "../../../../assets/dh/Bienestar/Aliados/index"
import Grupobtn from "../../../../componentes/GrupoBtn/Grupobtn1";
import Modal from "../../../../componentes/Modal/Modal" 
import apiURL from "../../../../utils/apiURL";

export default class Aliados extends Component {
    state = {
        link: []
    };
    componentDidMount() {
        fetch(`${apiURL}/aliados`)
            .then((res) => res.json())
            .then((res) => this.setState({ link: res }));
    }
    
    render() {
        const aliado= this.state.link.aliados
        console.log(aliado)
        
        return (
            <Layout>
                <Image src={Header} as={Link} to={paths.CON_DH_BIENESTAR}/>
                <Divider hidden />
                <Grid centered stackable columns={4}>
                    <Grid.Column>
                        {/* Compensar */}
                    <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} src={btn1} size="medium" centered />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    
                                </Container>
                    </Modal>
                    <Divider hidden/>
                    {/* Coopcafam */}
                    <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} src={btn2} size="medium" centered />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    {aliado && aliado.map((content)=>(
                                        <embed src={`${apiURL}${content.url}`} type="application/pdf" width="100%" height="700px" />
                                    ))}
                                </Container>
                    </Modal>
                    <Divider hidden/>
                    {/* Davivienda */}
                    <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} src={btn3} size="medium" centered />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    
                                </Container>
                    </Modal>
                    <Divider hidden/>
                    {/* Dentifacil */}
                    {aliado && aliado.map((content)=>(
                    <Modal
                    open={true}
                    btn={<Grupobtn as={"a"} href={`${apiURL}${content.url}`}
                        target="_blank" class={"botonimg btn"} size="medium" src={btn4} />}
                    ></Modal>
                    ))}
                    
                    <Divider hidden/>
                    {/* Sura */}
                    <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} src={btn9} size="massive" />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    
                                </Container>
                    </Modal>
                    </Grid.Column>
                    <Grid.Column>
                    {/* Emermedica */}
                    <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} src={btn5} size="medium" centered />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    
                                </Container>
                    </Modal>
                    <Divider hidden/>
                    {/* Jardines de Paz */}
                    <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} src={btn6} size="medium" centered />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    
                                </Container>
                    </Modal>
                    <Divider hidden/>
                    {/* Plenitud */}
                    <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} src={btn7} size="medium" centered />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    
                                </Container>
                    </Modal>
                    <Divider hidden/>
                    {/* Protección */}
                    <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} src={btn8} size="medium" centered />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    
                                </Container>
                    </Modal>
                    {/* Unimos */}
                    <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} src={btn10} size="medium" centered />}
                                size={"fullscreen"}
                            >
                                <Container>
                                    
                                </Container>
                    </Modal>
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}
