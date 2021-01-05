import React from 'react'
import Layout from "../../componentes/Layout/Layout";
import {Container,Grid,Image} from "semantic-ui-react";
import {Link} from "react-router-dom";
import BtnBienestar from "../../assets/dh/BtnBienestar.png"
import BtnAdmonP from "../../assets/dh/BtnAdmonP.png"
import BtnSST from "../../assets/dh/BtnSST.png"
import BtnFormacion from "../../assets/dh/BtnFormacion.png"
import BtnSeleccion from "../../assets/dh/BtnSeleccion.png"
import BtnRelaciones from "../../assets/dh/BtnRelaciones.png"
import*as paths from "../../config/routing/paths";

export default function Dh() {
    return (
        <div>
            <Layout>
            <Container stackeble align="center">
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Image as={Link} to={paths.CON_DH_BIENESTAR}className="botonimg" size="large" src={BtnBienestar}/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image className="botonimg"size="large" src={BtnAdmonP}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Image className="botonimg"size="large" src={BtnSST}/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image className="botonimg" size="large" src={BtnFormacion}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Image className="botonimg"size="large" src={BtnRelaciones}/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image className="botonimg" size="large" src={BtnSeleccion}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            </Layout>
        </div>
    )
}
