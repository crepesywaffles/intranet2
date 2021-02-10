import React from 'react'
import Layout from "../../../../componentes/Layout/Layout"
import Modal from "../../../../componentes/Modal/Modal"
import Grupobtn from "../../../../componentes/GrupoBtn/Grupobtn1";
import { Link } from "react-router-dom"
import Header from "../../../../assets/dh/SST/CabezoteSST.png"
import { Container, Grid, Image } from "semantic-ui-react"
import { btn6, btn7, btn8, btn9 } from "../../../../assets/dh/SST/index"
import *as paths from "../../../../config/routing/paths";

export default function Covid() {
    return (
        <Layout>
            <Image as={Link} to={paths.CON_DH_SST} src={Header} />
            <Grid stackable columns={2}>
                <Grid.Column>
                    <Container>
                        <Modal
                            open={false}
                            btn={<Grupobtn as={"a"} href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwfSJHoVqmZVGnddDUfmHRTpUM0xLNDlKUVMzWEc0SFEzOUkzQjZKMEY0SCQlQCN0PWcu" target="_blank" class={"botonimg btn"} size="medium" src={btn6} />}
                            size={"fullscreen"}
                        >
                        </Modal>
                        <Modal
                            open={false}
                            btn={<Grupobtn as={"a"} href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwfSJHoVqmZVGnddDUfmHRTpUNU82R0MzMjVZWUROTFpPSlBNTzhOQVpERSQlQCN0PWcu" target="_blank" class={"botonimg btn"} size="medium" src={btn8} />}
                            size={"fullscreen"}
                        >
                        </Modal>
                    </Container>
                </Grid.Column>

                <Grid.Column>
                    <Container>
                        <Modal
                            open={false}
                            btn={<Grupobtn as={"a"} href="https://covid19.minsalud.gov.co/" target="_blank" class={"botonimg btn"} size="medium" src={btn7} />}
                            size={"fullscreen"}

                        ></Modal>
                        <Modal
                            open={false}
                            btn={<Grupobtn as={Link} path={paths.CON_DH_SST_COVID_GALERIA} class={"botonimg btn"} src={btn9} size="medium" centered />}
                            size={"fullscreen"}
                        >

                        </Modal>
                    </Container>
                </Grid.Column>
            </Grid>
        </Layout>
    )
}
