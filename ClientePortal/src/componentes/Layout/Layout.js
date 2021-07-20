import React from 'react'
import { Container, Grid, Dropdown, Image, Menu, Divider,Button } from 'semantic-ui-react'
import Boton6 from "../../assets/home/BotonEcommerce.png"
import { Link } from 'react-router-dom'
import Header from "../../../src/assets/cabezotecyw.png"
import Footer from "../../../src/assets/footerintranet.png"
import *as paths from "../../config/routing/paths";
import "../../App.css"



export default function Layout(props) {
    const { children } = props;

    const LinkStyle = {
        textDecoration: "none",
        color: "#523629",
        textColor: "white",
        fontFamily: "Arial",
        fontSize: "1.2em"
    }
    
    function cerrarsesion() {
        window.location.pathname="/"
        localStorage.clear()
    }
      

    return (
        <Container className={"layout"} fluid>
            <Grid.Row>
                <Image to={paths.CON_HOME} as={Link} src={Header} />
            </Grid.Row>
            <Grid.Row>
                <Menu stackable="true" tabular borderless horinzontal="true" fluid widths={5}>
                    <Dropdown style={LinkStyle} item text='NUESTRA EMPRESA'>
                        <Dropdown.Menu>
                            {/* <Dropdown.Item>
                                <Link to={paths.CON_LOGIN} style={LinkStyle}>Nuestra Historia</Link>
                            </Dropdown.Item> */}
                            <Dropdown.Item>
                                <Link to={paths.CON_NUESTRAEMPRESA_CULTURA} style={LinkStyle} >Nuestra esencia</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_EMPRESASB} style={LinkStyle}>Somos una empresa B </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_NUESTRAEMPRESA_GENTE} style={LinkStyle}>Nuestra Gente </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_RECONOCIMIENTOS} style={LinkStyle} >Nuestros reconocimientos</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_UBICACIONES} style={LinkStyle} >Dónde estamos</Link>
                            </Dropdown.Item>
                            
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown style={LinkStyle} item text='RECONÓCENOS'>
                        <Dropdown.Menu> 
                            <Dropdown.Item>
                                <Link style={LinkStyle} to={paths.CON_ACTUALIZATE_PODCAST} >Podcast</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link  style={LinkStyle} to={paths.CON_ACTUALIZATE} >Entrevistas</Link>
                            </Dropdown.Item>
                            {/* <Dropdown.Item>
                                <Link  style={LinkStyle} to={paths.CON_ACTUALIZATE_BEATRIZ} >Crece e inspirate con Beatriz</Link>
                            </Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item text='NUESTROS EQUIPOS' style={LinkStyle}>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to={paths.CON_FUNDADORES} style={LinkStyle} >Nuestros Fundadores</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_GERENCIA} style={LinkStyle}>Gerencia Administrativa</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_DH} style={LinkStyle} >Dirección Desarrollo Humano</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_CALIDAD} style={LinkStyle}>Dirección Calidad y Medio Ambiente</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_SOSTENIBILIDAD} style={LinkStyle} >Dirección Sostenibilidad</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_ACADEMIA} style={LinkStyle} >Dirección Academia de las Artes</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_TECNOLOGIA} style={LinkStyle} >Dirección Tecnología</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_FINANCIERA} style={LinkStyle} >Dirección Financiera</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_COMPRAS} style={LinkStyle} >Dirección Compras y Alimentos</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_LOGISTICA} style={LinkStyle}>Dirección Logística y Abastecimiento</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_RESTAURANTES} style={LinkStyle} >Dirección Operativa Restaurantes</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_HELADERIAS} style={LinkStyle} >Dirección Operativa Heladerías</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_MANTENIMIENTO} style={LinkStyle} >Dirección de Mantenimiento</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_PLANTA_PRODUCCION} style={LinkStyle} >Dirección Planta de Producción</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_PLANTA_HELADOS} style={LinkStyle} >Dirección Planta de Helados</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_MERCADEO} style={LinkStyle}>Dirección de Mercadeo e Innovación</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_LEGAL} style={LinkStyle}>Dirección Legal y Administrativa</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={paths.CON_SARGLAFT} style={LinkStyle}>SAGRILAFT</Link>
                            </Dropdown.Item>
                            
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown style={LinkStyle} item text='APLICATIVOS'>
                        <Dropdown.Menu style={LinkStyle}>
                            <Dropdown.Item>
                                <a className="a_target" target="_blanck" href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwfSJHoVqmZVGnddDUfmHRTpUNk5GSlhIMTFBQk1YQjhSM1RTSVIxRzc0MSQlQCN0PWcu">Reporte accidentes</a></Dropdown.Item>
                            <Dropdown.Item>
                                <a className="a_target" target="_blanck" href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwfSJHoVqmZVGnddDUfmHRTpUMlNPNDNLOFZBSDNURDNNQ0JDOFdXWUpQSSQlQCN0PWcu">Reporte condiciones inseguras</a>
                                </Dropdown.Item>
                            <Dropdown.Item>
                                <a className="a_target" target="_blanck" href="https://forms.office.com/Pages/ResponsePage.aspx?id=o-892U5X-0KhwOBKlt3QwfSJHoVqmZVGnddDUfmHRTpUNU82R0MzMjVZWUROTFpPSlBNTzhOQVpERSQlQCN0PWcu">Encuesta de prevención hogar</a>
                                </Dropdown.Item>
                            {/* <Dropdown.Item>

                            <a className="a_target" target="_blanck" href="http://169.48.72.72/opencart/upload/index.php?route=common/home"><strong>Tienda interna Crepes&Waffles</strong></a>
                            </Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>
                    
                    <Menu.Item>
                    <Button onClick={cerrarsesion} secondary>Cerrar Sesión</Button>
                    </Menu.Item>
                </Menu>
            </Grid.Row>
            <Divider hidden />
            {children}
            <Image href="/" src={Footer} fluid />
        </Container>
    )
}

