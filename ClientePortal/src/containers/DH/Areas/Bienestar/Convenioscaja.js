import React, { Component } from 'react'
import Layout from "../../../../componentes/Layout/Layout"
import {Edubasica,Edusuperior,Idiomas,Jardines} from "../../../../assets/dh/Bienestar/index"
import {Grid} from "semantic-ui-react"
import Grupobtn from "../../../../componentes/GrupoBtn/Grupobtn1";
import Modal from "../../../../componentes/Modal/Modal"

export default class Convenioscaja extends Component {
    render() {
        return (
            <Layout>
                <Grid centered stackable columns={2}>
                    <Grid.Column>
                        <Modal
                            open={false}
                            btn={<Grupobtn as={"a"} href="https://corporativo.compensar.com/convenios-alianzas/descubre/educacion/educacion-basica"
                                target="_blank" class={"botonimg btn"} size="medium" src={Edubasica} />}
                        ></Modal>
                        <Modal
                            open={false}
                            btn={<Grupobtn as={"a"} href="https://corporativo.compensar.com/convenios-alianzas/descubre/educacion/superior"
                                target="_blank" class={"botonimg btn"} size="medium" src={Edusuperior} />}
                        ></Modal>
                    </Grid.Column>
                    <Grid.Column>
                        <Modal
                            open={false}
                            btn={<Grupobtn as={"a"} href="https://corporativo.compensar.com/convenios-alianzas/descubre/educacion/idiomas"
                                target="_blank" class={"botonimg btn"} size="medium" src={Idiomas} />}
                        ></Modal>
                        <Modal
                            open={false}
                            btn={<Grupobtn as={"a"} href="https://corporativo.compensar.com/convenios-alianzas/descubre/educacion/infantil"
                                target="_blank" class={"botonimg btn"} size="medium" src={Jardines} />}
                        ></Modal>
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}
