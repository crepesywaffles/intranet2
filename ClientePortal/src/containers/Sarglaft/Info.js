import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import*as paths from "../../config/routing/paths";
import {btnFormatos,btnVideos,btnManual,header} from "../../assets/sagrilaft/index"
import {Image,Grid,Divider,Container} from "semantic-ui-react"
import {Link} from "react-router-dom"
import Modal from "../../componentes/Modal/Modal"
import Grupobtn from '../../componentes/GrupoBtn/Grupobtn1';



export default class Info extends Component {
    render() {
        return (
            <Layout>
                <Image src={header} as={Link} to={paths.CON_SARGLAFT}/>
                <Grid centered={true} stackable  verticalAlign="middle" >
                    <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btnFormatos} />}

                            >
                                <Container>
                                    modal formatos 
                                </Container>
                        </Modal>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btnManual} />}

                            >
                                <Container>
                                    revista
                                </Container>
                        </Modal>
                    </Grid.Column>
                    <Grid.Column width={4}>
                            <Modal
                                open={false}
                                btn={<Grupobtn as={Link} path={paths.CON_SARGLAFT_INFO_VIDEOS} class={"botonimg btn"} size="medium" src={btnVideos} />}
                            >
                            </Modal>
                    </Grid.Column>
                        
                        
                </Grid>
                <Divider hidden />
            </Layout>
        )
    }
}