
import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import*as paths from "../../config/routing/paths";
import {btnFormatos,btnVideos,btnManual,btnCodigoEtica,btnReglamento,header} from "../../assets/sagrilaft/index"
import {Image,Grid,Divider,Container,Button} from "semantic-ui-react"
import {Link} from "react-router-dom"
import Modal from "../../componentes/Modal/Modal"
import Grupobtn from '../../componentes/GrupoBtn/Grupobtn1';
import apiURL from '../../utils/apiURL';



export default class Ptee extends Component {
    state = {
        formatos: [],
    };
    componentDidMount() {
        fetch(`${apiURL}/sagrilafts`)
            .then((res) => res.json())
            .then((res) => this.setState({ formatos: res }));
    }
    render() {
        const forma = this.state.formatos[0]
        console.log(forma)
        return (
            <Layout>
                <Image src={header} as={Link} to={paths.CON_SARGLAFT}/>
                <Grid centered={true} stackable  verticalAlign="middle" >
                    <Grid.Row>
                    <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btnFormatos} />}

                            >
                                <Container>
                                {forma && forma.formatos_sagrilaft.map((pr) => (
                                        <li className="lista-programas">
                                            <Container textAlign="center">
                                                <Button className="programas_E" as={"a"} color="black" href={`${apiURL}${pr.url}`} download={`${pr.name}`}>{`${pr.name}`}</Button>
                                                <Divider hidden />
                                            </Container>

                                        </li>

                                    ))
                                    }
                                </Container>
                        </Modal>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btnManual} />}

                            >
                                <Container>
                                <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=cmab9nt6rh" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                                </Container>
                        </Modal>
                    </Grid.Column>
                    <Grid.Column width={4}>
                            <Modal
                                open={false}
                                btn={<Grupobtn as={Link} path={paths.CON_SARGLAFT_PTEE_VIDEOS} class={"botonimg btn"} size="medium" src={btnVideos} />}
                            >
                            </Modal>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btnReglamento} />}

                            >
                                <Container>
                                <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=7tnwkkxwb1" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                                </Container>
                        </Modal>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Modal
                                btn={<Grupobtn as={"button"} class={"botonimg btn"} size="medium" src={btnCodigoEtica} />}

                            >
                                <Container>
                                <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=dtm653krzp" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                                </Container>
                        </Modal>
                    </Grid.Column>
                        
                    </Grid.Row>
                </Grid>
                <Divider hidden />
            </Layout>
        )
    }
}