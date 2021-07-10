import React, { Component } from 'react'
import apiURL from "../../utils/apiURL"
import Layout from '../../componentes/Layout/Layout'
import Grupobtn from "../../componentes/GrupoBtn/Grupobtn1";
import Modal from "../../componentes/Modal/Modal"
import { Grid, Container, Image, Divider } from "semantic-ui-react";
import Mercolideres from "../../componentes/Merco/Mercolideres"
import Mercogobierno from "../../componentes/Merco/Mercogobierno"
import Mercotalento from "../../componentes/Merco/Mercotalento"
import {MercoGeneral2020,MercoSector,MercoEmpresasLogo,MercoLideresLogo,MercoGobiernoLogo,MercoTalentoLogo,TalentoSector,GobiernoSector} from "../../assets/nuestraempresa/index"



export default class Reconocimientos extends Component {
    render() {
        return (
            <Layout>
                <Grid centered stackable columns={4}>
                    <Grid.Column>
                            {/* Empresas */}
                            <Modal
                                open={true}
                                btn={<Grupobtn  class={"botonimg btn"} size="medium" src={MercoEmpresasLogo} />}
                                
                            >
                                <Container centered>
                                <h1>Las empresas con mejor reputación corporativa 2020</h1>
                                <Image size="massive"src={MercoGeneral2020}/>
                                <h1>Las empresas con mejor reputación corporativa por sector 2020</h1>
                                <Image size="large" centered src={MercoSector}/>
                                </Container>
                            </Modal>
                            {/* Talento */}
                            <Modal
                                open={true}
                                btn={<Grupobtn  class={"botonimg btn"} size="medium" src={MercoTalentoLogo} />}
                                
                            >
                                <h1>Las empresas que mejor atraen y retienen el talento personal sector 2020</h1>
                                <Image size="large" centered src={TalentoSector}/>
                                <h1>Las empresas que mejor atraen y retienen el talento personal  2020</h1>
                                <br></br>
                                <Mercotalento/>
                            </Modal>
                    </Grid.Column>
                    <Grid.Column>
                            {/* Empresas */}
                            <Modal
                                open={true}
                                btn={<Grupobtn  class={"botonimg btn"} size="medium" src={MercoGobiernoLogo} />}
                                
                            >
                                <h1>Las empresas mas responsables sector 2020</h1>
                                <Image size="large" centered src={GobiernoSector}/>
                                <h1>Las empresas mas responsables 2020</h1>
                                <br></br>
                                <Mercogobierno/>
                            </Modal>
                            {/* Talento */}
                            <Modal
                                open={true}
                                btn={<Grupobtn class={"botonimg btn"} size="medium" src={MercoLideresLogo} />}
                                
                            >
                                <Mercolideres/>
                            </Modal>
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}
