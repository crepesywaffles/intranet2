import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import {Directorioadmon,Directoriopdv,Horarios,Recomendaciones,header,mision} from "../../../assets/dir.admon/CentroDeServicio/index"
import Modal from "../../../componentes/Modal/Modal"
import Grupobtn from '../../../componentes/GrupoBtn/Grupobtn1'
import { Grid,Image,Container,Divider} from 'semantic-ui-react'
import*as paths from "../../../config/routing/paths"
import {Link} from "react-router-dom"
import apiURL from '../../../utils/apiURL'


export default class CentroServicio extends Component {
    state = {
        media: [],
    };

    componentDidMount() {
        fetch(`${apiURL}/adminlegals`)
            .then((res) => res.json())
            .then((res) => this.setState({ media: res }));
    }
    render() {
        const info= this.state.media[0]
        console.log(info && info)
        return (
            <Layout>
                <Image src={header} as={Link} to={paths.CON_LEGAL} fluid/>
                <Image src={mision} fluid/>
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
