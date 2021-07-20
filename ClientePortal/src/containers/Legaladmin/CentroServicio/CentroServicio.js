import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import {Directorioadmon,Directoriopdv,Horarios,Recomendaciones,header,mision} from "../../../assets/dir.admon/CentroDeServicio/index"
import Modal from "../../../componentes/Modal/Modal"
import Grupobtn from '../../../componentes/GrupoBtn/Grupobtn1'
import { Grid,Image,Container,Divider} from 'semantic-ui-react'
import*as paths from "../../../config/routing/paths"
import {Link} from "react-router-dom"

export default class CentroServicio extends Component {
    render() {
        return (
            <Layout>
                <Image src={header} as={Link} to={paths.CON_LEGAL}/>
                <Image src={mision} />
                <Grid centered={true} stackable  verticalAlign="middle" >
                <Grid.Column width={4}>
                            <Modal
                                open={false}
                                btn={<Grupobtn as={Link} path={paths.CON_LEGAL_CENTROSERVICIO_DIRADMON} class={"botonimg btn"} size="medium" src={Directorioadmon} />}
                            >
                            </Modal>
                    </Grid.Column>
                    <Grid.Column width={4}>
                            <Modal
                                open={false}
                                btn={<Grupobtn as={Link} path={paths.CON_LEGAL_CENTROSERVICIO_DIRPDV} class={"botonimg btn"} size="medium" src={Directoriopdv} />}
                            >
                            </Modal>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={Horarios} />}

                            >
                                <Container>
                                    Horarios
                                </Container>
                        </Modal>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={Recomendaciones} />}
                            >
                                <Container>
                                    Recomendaciones
                                </Container>
                        </Modal>
                    </Grid.Column>    
                </Grid>
                <Divider hidden />
            </Layout>
        )
    }
}
