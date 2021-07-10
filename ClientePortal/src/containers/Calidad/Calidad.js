import React from 'react'
import Layout from "../../componentes/Layout/Layout"
import { Container, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import *as paths from "../../config/routing/paths";
import {btn1,btn2,btn3,btn4} from "../../assets/calidad/index"
import Modal from "../../componentes/Modal/Modal"
import Grupobtn from "../../componentes/GrupoBtn/Grupobtn1"


export default function Calidad() {
    return (
        <Layout>
            <Container stackable align="center">
                    <Grid stackable centered columns={4}>
                        <Grid.Row>
                            <Grid.Column >
                                <Image as={Link} to={paths.CON_CALIDAD_CORE} className="botonimg" size="medium" src={btn1} />
                            </Grid.Column>
                            <Grid.Column>
                                <Image as={Link} to={paths.CON_CALIDAD_INDICADORES} className="botonimg" size="medium" src={btn2} />
                            </Grid.Column>
                            <Grid.Column>
                                <Image as={Link} to={paths.CON_MEDIOAMBIENTE} className="botonimg" size="medium" src={btn3} />
                            </Grid.Column>
                            <Grid.Column>
                                <Image as={Link} to={paths.CON_CALIDAD_PROGRAMAS} className="botonimg" size="medium" src={btn4}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
        </Layout>
    )
}
