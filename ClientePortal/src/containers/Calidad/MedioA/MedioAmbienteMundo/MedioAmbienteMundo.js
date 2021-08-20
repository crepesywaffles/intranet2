import React, { Component } from 'react'
import Layout from '../../../../componentes/Layout/Layout'
import Modal from "../../../../componentes/Modal/Modal"
import { Grid,Image,Divider,Container } from 'semantic-ui-react'
import Grupobtn from '../../../../componentes/GrupoBtn/Grupobtn1'
import {Calendario,CambioClimatico,ResiduosSolidos,ServiciosEco,Biodiversidad,ConsumoAgua,ODS,EconomiaCircular} from "../../../../assets/calidad/M.A/ElMedioAmbienteMundoDeHoy/index"
import {HeaderMedioA} from "../../../../assets/calidad/index"
import {Link} from "react-router-dom"
import *as paths from "../../../../config/routing/paths"
import apiURL from '../../../../utils/apiURL'
import { camelCase } from 'jquery'

export default class MedioAmbienteMundo extends Component {
    state ={
        media: []
    } 
    componentDidMount() {
        fetch(`${apiURL}/noticias-medioambientes`)
          .then((res) => res.json())
          .then((res) => this.setState({ media: res }));
      }
    render() {
        const info=this.state.media
        const infos= info && info[4]
        const calendario= infos && infos.media[7].url
        const Climatico= infos && infos.media[6].url
        const ecocircular= infos && infos.media[5].url
        const consumodeagua= infos && infos.media[4].url
        const biodiversidad= infos && infos.media[3].url
        const residuos= infos && infos.media[2].url
        const ods= infos && infos.media[1].url
        const servicioseco= infos && infos.media[0].url
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
                                    <Image src={`${apiURL}${calendario}`}/>
                                </Container>
                            </Modal>
                            
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={CambioClimatico} />}
                            >
                                <Container>
                                <Image src={`${apiURL}${Climatico}`}/>
                                </Container>
                            </Modal>
                            
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={ResiduosSolidos} />}
                            >
                                <Container>
                                <Image src={`${apiURL}${residuos}`}/>
                                </Container>
                            </Modal>
                            
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={ServiciosEco} />}
                            >
                                <Container>
                                <a href={`${apiURL}${servicioseco}`} target="_blank">{infos && infos.media[0].name}</a>
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
                                <Image src={`${apiURL}${biodiversidad}`}/>
                                </Container>
                            </Modal>
                            
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={ConsumoAgua} />}
                            >
                                <Container>
                                <Image src={`${apiURL}${consumodeagua}`}/>
                                </Container>
                            </Modal>
                            
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={ODS} />}
                            >
                                <Container>
                                <Image src={`${apiURL}${ods}`}/>
                                </Container>
                            </Modal>
                            
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={EconomiaCircular} />}
                            >
                                <Container>
                                <Image src={`${apiURL}${ecocircular}`}/>
                                </Container>
                            </Modal>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        )
    }
}
