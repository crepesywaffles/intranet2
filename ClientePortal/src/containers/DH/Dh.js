import React from 'react'
import Layout from "../../componentes/Layout/Layout";
import { Container, Grid, Image,Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import BtnBienestar from "../../assets/dh/BtnBienestar.png"
import BtnAdmonP from "../../assets/dh/BtnAdmonP.png"
import BtnSST from "../../assets/dh/BtnSST.png"
import BtnFormacion from "../../assets/dh/BtnFormacion.png"
import BtnSeleccion from "../../assets/dh/BtnSeleccion.png"
import BtnRelaciones from "../../assets/dh/BtnRelaciones.png"
import *as paths from "../../config/routing/paths";

export default function Dh() {
    return (
        <div>
            <Layout>
                <Container stackable align="center">
                    <Grid stackable centered columns={3}>
                        <Grid.Row>
                            <Grid.Column >
                                <Image as={Link} to={paths.CON_DH_BIENESTAR} className="botonimg" size="medium" src={BtnBienestar} />
                            </Grid.Column>
                            <Grid.Column>
                                <Image as={Link} to={paths.CON_DH_ADMON} className="botonimg" size="medium" src={BtnAdmonP} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Image as={Link} to={paths.CON_DH_SST} className="botonimg" size="medium" src={BtnSST} />
                            </Grid.Column>
                            <Grid.Column>
                                <Image as={Link} to={paths.CON_DH_FYD} className="botonimg" size="medium" src={BtnFormacion} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Image as={Link} to={paths.CON_DH_RELACIONES} className="botonimg" size="medium" src={BtnRelaciones} />
                            </Grid.Column>
                            <Grid.Column>
                                <Image as={Link} to={paths.CON_DH_SELECCION} className="botonimg" size="medium" src={BtnSeleccion} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider hidden/>
                </Container>
            </Layout>
        </div>
    )
}
