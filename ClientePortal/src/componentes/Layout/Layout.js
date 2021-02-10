import React from 'react'
import { Container, Grid, Dropdown, Image, Menu, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Header from "../../../src/assets/cabezotecyw.png"
import Footer from "../../../src/assets/footerintranet.png"
import *as paths from "../../config/routing/paths";



export default function Layout(props) {
    const { children } = props;

    const LinkStyle = {
        textDecoration: "none",
        color: "#523629",
        textColor: "white",
        fontFamily: "Arial",
        fontSize: "1.2em"
    }

    return (
        <Container className={"layout"} fluid>
            <Grid.Row>
                <Image to={paths.CON_HOME} as={Link} src={Header} />
            </Grid.Row>
            <Grid.Row>
                <Menu stackable="true" tabular borderless horinzontal="true" fluid widths={4}>
                    <Dropdown style={LinkStyle} item text='NUESTRA EMPRESA'>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to={paths.CON_LOGIN} style={LinkStyle}>Nuestra Historia</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/cultura-filosofia" style={LinkStyle} >Cultura y Filosofía Crepes & Waffles</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/empresas-b" style={LinkStyle}>Empresas B </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/directorio-pdv" style={LinkStyle} >Directorio Puntos de venta</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/directorio-admon" style={LinkStyle} >Directorio Administración</Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item text='NUESTROS EQUIPOS' style={LinkStyle}>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to={paths.CON_DH} style={LinkStyle} >Dirección Desarrollo Humano</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dir-financiera" style={LinkStyle} >Dirección Financiera</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dir-calidad" style={LinkStyle}>Dirección Calidad y Medio Ambiente</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dir-producto-compras" style={LinkStyle} >Dirección de Producto y Compras</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dir-admon" style={LinkStyle}>Dirección Administrativa</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dir-logistica" style={LinkStyle}>Dirección Logística y Abastecimiento</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dir-operativa-rest" style={LinkStyle} >Dirección Operativa Restaurantes</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dir-operativa-hel" style={LinkStyle} >Dirección Operativa Heladerías</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dir-mantenimiento" style={LinkStyle} >Dirección de Mantenimiento</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dir-planta-produccion" style={LinkStyle} > Dirección Planta de Producción</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dir-planta-hel" style={LinkStyle} >Dirección Planta de Helados</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dir-tecnologia" style={LinkStyle} >Dirección Tecnología</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dir-innovacion" style={LinkStyle}>Dirección de Innovación</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/dir-sostenibilidad" style={LinkStyle} >Dirección de Sostenibilidad</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/academia" style={LinkStyle} >Academia de las Artes</Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown style={LinkStyle} item text='APLICATIVOS'>
                        <Dropdown.Menu style={LinkStyle}>
                            <Dropdown.Item>Reporte Accidentes</Dropdown.Item>
                            <Dropdown.Item>Reporte incapcidades</Dropdown.Item>
                            <Dropdown.Item>Encuesta sintomas Covid-19</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown style={LinkStyle} item text='ACTUALÍZATE'>
                        <Dropdown.Menu> 
                            <Dropdown.Item>
                                <Link style={LinkStyle} to="/beatriz" >Crece e inspirate con Beatriz</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link  style={LinkStyle} to="/revista" >Revista CYW</Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu>
            </Grid.Row>
            <Divider hidden />
            {children}
            <Image href="/" src={Footer} fluid />
        </Container>
    )
}

