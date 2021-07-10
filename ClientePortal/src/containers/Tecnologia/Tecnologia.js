import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import {Image,Grid,Divider} from "semantic-ui-react"
import {Infotecnologia} from "../../assets/Misiones/index"
import {Crepero,Novedadesequipos,Novedadesuser,Equiposnuevos} from "../../assets/tecnologia/index"

export default class Tecnologia extends Component {
    render() {
        return (
            <Layout>
                <Image src={Infotecnologia}/>
                <Grid centered={true}  verticalAlign="middle"columns={2}>
                    <Grid.Row>
                        <Image as="a" target="_blank" href="https://wa.me/message/3LR4EQKA5JZHO1" className="botonimg"  src={Crepero} size="medium" />
                        <Image as="a" target="_blank" href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwctVc4fvqRBAhLmr_Js4hXBUQjM3VkNFVzY0TzNMT0RXNURXM0JYWlZJUCQlQCN0PWcu" className="botonimg"  src={Novedadesequipos} size="medium" />
                        <Image as="a" target="_blank" href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwctVc4fvqRBAhLmr_Js4hXBUM1VFUzFHWFpGV0kzTTc3V1BHWUZCN0tMOSQlQCN0PWcu" className="botonimg"  src={Novedadesuser} size="medium" />
                        <Image as="a" target="_blank" href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwctVc4fvqRBAhLmr_Js4hXBUMFVYSkxOMEpFWUozNko3M0o1MVYzWFo3RSQlQCN0PWcu" className="botonimg" className="botonimg"src={Equiposnuevos} size="medium" />
                    </Grid.Row>
                </Grid>
                <Divider hidden/>
            </Layout>
        )
    }
}
