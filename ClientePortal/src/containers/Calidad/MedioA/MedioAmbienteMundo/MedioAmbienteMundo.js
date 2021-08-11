import React, { Component } from 'react'
import Layout from '../../../../componentes/Layout/Layout'
import Modal from "../../../../componentes/Modal/Modal"
import { Grid,Image,Divider,Container } from 'semantic-ui-react'
import Grupobtn from '../../../../componentes/GrupoBtn/Grupobtn1'
import {Calendario,CambioClimatico,ResiduosSolidos,ServiciosEco,Biodiversidad,ConsumoAgua,ODS,EconomiaCircular} from "../../../../assets/calidad/M.A/ElMedioAmbienteMundoDeHoy/index"
import {HeaderMedioA} from "../../../../assets/calidad/index"
import {Link} from "react-router-dom"
import *as paths from "../../../../config/routing/paths"

export default class MedioAmbienteMundo extends Component {
    render() {
        return (
            <Layout>
                <Image as={Link} to={paths.CON_MEDIOAMBIENTE} src={HeaderMedioA}/>
                <Grid stackable centered>
                    <Grid.Row>
                        <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={Calendario} />}
                            >
                                <Container>
                                    aqui
                                </Container>
                            </Modal>
                            
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={CambioClimatico} />}
                            >
                                <Container>
                                    aqui
                                </Container>
                            </Modal>
                            
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={ResiduosSolidos} />}
                            >
                                <Container>
                                    aqui
                                </Container>
                            </Modal>
                            
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={ServiciosEco} />}
                            >
                                <Container>
                                    aqui
                                </Container>
                            </Modal>
                            
                        </Grid.Column>
                        
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={Biodiversidad} />}
                            >
                                <Container>
                                    aqui
                                </Container>
                            </Modal>
                            
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={ConsumoAgua} />}
                            >
                                <Container>
                                    aqui
                                </Container>
                            </Modal>
                            
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={ODS} />}
                            >
                                <Container>
                                    aqui
                                </Container>
                            </Modal>
                            
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={EconomiaCircular} />}
                            >
                                <Container>
                                    aqui
                                </Container>
                            </Modal>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        )
    }
}
