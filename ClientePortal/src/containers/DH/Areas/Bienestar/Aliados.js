import React, { Component } from 'react'
import Layout from "../../../../componentes/Layout/Layout"
import Header from "../../../../assets/dh/CabezoteBienestar.png"
import { Image,Divider,Grid,Container } from "semantic-ui-react"
import { Link } from "react-router-dom"
import *as paths from "../../../../config/routing/paths";
import { btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9 , btn10,Coop1,Coop2} from "../../../../assets/dh/Bienestar/Aliados/index"
import Grupobtn from "../../../../componentes/GrupoBtn/Grupobtn1";
import Modal from "../../../../componentes/Modal/Modal" 
import apiURL from "../../../../utils/apiURL";

export default class Aliados extends Component {
    state = {
        link: []
    };
    componentDidMount() {
        fetch(`${apiURL}/aliados`)
            .then((res) => res.json())
            .then((res) => this.setState({ link: res }));
    }
    
    render() {
        const aliado= this.state.link.aliados
        console.log(aliado)
        
        return (
            <Layout>
                <Image src={Header} as={Link} to={paths.CON_DH_BIENESTAR}/>
                <Divider hidden />
                <Grid centered stackable columns={4}>
                    <Grid.Column>
                        {/* Compensar */}
                        {aliado && aliado.filter((content)=>(content.name == "ContenidoCompensar.pdf")).map((pdf)=>(
                        <Modal
                        open={false}
                        btn={<Grupobtn as={"a"} href={`${pdf.url}`}
                            target="_blank" class={"botonimg btn"} size="medium" src={btn1} />}
                        ></Modal>
                    ))}
                    <Divider hidden/>
                    {/* Coopcafam */}
                    {aliado && aliado.filter((content)=>(content.name == "ContenidoCoopCafam.pdf")).map((pdf)=>(
                        <Modal
                        open={true}
                        btn={<Grupobtn as={"a"} href={`${pdf.url}`}
                        target="_blank" class={"botonimg btn"} size="medium" src={btn2} />
                        
                    }
                        >
                            <Image src={Coop1}/>
                            <Image src={Coop2}/>
                        </Modal>
                    ))}
                    <Divider hidden/>
                    {/* Davivienda */}
                    {aliado && aliado.filter((content)=>(content.name == "ContenidoDavivienda.pdf")).map((pdf)=>(
                        <Modal
                        open={false}
                        btn={<Grupobtn as={"a"} href={`${pdf.url}`}
                            target="_blank" class={"botonimg btn"} size="medium" src={btn3} />}
                        ></Modal>
                    ))}
                    <Divider hidden/>
                    {/* Dentifacil */}
                    {aliado && aliado.filter((content)=>(content.name == "ContenidoDentifacil.pdf")).map((pdf)=>(
                        <Modal
                        open={false}
                        btn={<Grupobtn as={"a"} href={`${pdf.url}`}
                            target="_blank" class={"botonimg btn"} size="medium" src={btn4} />}
                        ></Modal>
                    ))}
                    <Divider hidden/>
                    {/* Sura */}
                    {aliado && aliado.filter((content)=>(content.name == "ContenidoSura.pdf")).map((pdf)=>(
                        <Modal
                        open={false}
                        btn={<Grupobtn as={"a"} href={`${pdf.url}`}
                            target="_blank" class={"botonimg btn"} size="medium" src={btn9} />}
                        ></Modal>
                    ))}
                    </Grid.Column>
                    <Grid.Column>
                    {/* Emermedica */}
                    {aliado && aliado.filter((content)=>(content.name == "ContenidoEmermedica.pdf")).map((pdf)=>(
                        <Modal
                        open={false}
                        btn={<Grupobtn as={"a"} href={`${pdf.url}`}
                            target="_blank" class={"botonimg btn"} size="medium" src={btn5} />}
                        ></Modal>
                    ))}
                    <Divider hidden/>
                    {/* Jardines de Paz */}
                    {aliado && aliado.filter((content)=>(content.name == "ContenidoJardinezdePaz.pdf")).map((pdf)=>(
                        <Modal
                        open={false}
                        btn={<Grupobtn as={"a"} href={`${pdf.url}`}
                            target="_blank" class={"botonimg btn"} size="medium" src={btn6} />}
                        ></Modal>
                    ))}
                    <Divider hidden/>
                    {/* Plenitud */}
                    {aliado && aliado.filter((content)=>(content.name == "ContenidoPlenitud.pdf")).map((pdf)=>(
                        <Modal
                        open={false}
                        btn={<Grupobtn as={"a"} href={`${pdf.url}`}
                            target="_blank" class={"botonimg btn"} size="medium" src={btn7} />}
                        ></Modal>
                    ))}
                    <Divider hidden/>
                    {/* Protección */}
                        <Modal
                        open={false}
                        btn={<Grupobtn as={"a"} href="https://www.proteccion.com/wps/portal/proteccion"
                            target="_blank" class={"botonimg btn"} size="medium" src={btn8} />}
                        ></Modal>
                   
                    {/* Unimos */}
                    {aliado && aliado.filter((content)=>(content.name == "ContenidoUnimos.pdf")).map((pdf)=>(
                        <Modal
                        open={false}
                        btn={<Grupobtn as={"a"} href={`${pdf.url}`}
                            target="_blank" class={"botonimg btn"} size="medium" src={btn10} />}
                        ></Modal>
                    ))}
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}
