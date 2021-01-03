import React from 'react'
import { Container,Grid,Dropdown,Image, Menu,Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Header from "../../../src/assets/cabezotecyw.png"
export default function layout() {
    
    return (
        <Container fluid>
            <Grid.Row>
            <Image src={Header}/>
            </Grid.Row>
            <Grid.Row>
            <Menu  tabular borderless stackable horinzontal fluid widths={4}>
            <Dropdown item text='NUESTRA EMPRESA'>
            <Dropdown.Menu>
            <Dropdown.Item>
            <Link to="/nuestra-historia">Nuestra Historia</Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link to="/cultura-filosofia" >Cultura y Filosofía Crepes & Waffles</Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link to="/empresas-b" >Empresas B </Link>  
            </Dropdown.Item>
            <Dropdown.Item>
            <Link to="/directorio-pdv" >Directorio Puntos de venta</Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link to="/directorio-admon" >Directorio Administración</Link>     
            </Dropdown.Item>
            </Dropdown.Menu>    
            </Dropdown>
            <Dropdown item text='NUESTROS EQUIPOS'>
            <Dropdown.Menu>
            <Dropdown.Item>
            <Link  to="/dir-dh" >Dirección Desarrollo Humano</Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link  to="/dir-financiera" >Dirección Financiera</Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link  to="/dir-calidad" >Dirección Calidad y Medio Ambiente</Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link  to="/dir-producto-compras" >Dirección de Producto y Compras</Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link  to="/dir-admon">Dirección Administrativa</Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link  to="/dir-logistica">Dirección Logística y Abastecimiento</Link>  
            </Dropdown.Item>
            <Dropdown.Item>
            <Link  to="/dir-operativa-rest" >Dirección Operativa Restaurantes</Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link  to="/dir-operativa-hel" >Dirección Operativa Heladerías</Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link  to="/dir-mantenimiento" >Dirección de Mantenimiento</Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link  to="/dir-planta-produccion" > Dirección Planta de Producción</Link>  
            </Dropdown.Item>
            <Dropdown.Item>
            <Link  to="/dir-planta-hel" >Dirección Planta de Helados</Link>    
            </Dropdown.Item>
            <Dropdown.Item>
            <Link  to="/dir-tecnologia" >Dirección Tecnología</Link>  
            </Dropdown.Item>
            <Dropdown.Item>
            <Link  to="/dir-innovacion" >Dirección de Innovación</Link>  
            </Dropdown.Item>
            <Dropdown.Item>
            <Link  to="/dir-sostenibilidad" >Dirección de Sostenibilidad</Link>  
            </Dropdown.Item>
            <Dropdown.Item>
            <Link  to="/academia" >Academia de las Artes</Link>  
            </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='APLICATIVOS'>
            <Dropdown.Menu>
            <Dropdown.Item>Reporte Accidentes</Dropdown.Item>
            <Dropdown.Item>Reporte incapcidades</Dropdown.Item>
            <Dropdown.Item>Encuesta sintomas Covid-19</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='ACTUALIZATE'>
            <Dropdown.Menu>
            <Dropdown.Item>
            <Link  to="/beatriz" >Crece e inspirate con Beatriz</Link> 
            </Dropdown.Item>
            <Dropdown.Item>
            <Link  to="/revista" >Revista CYW</Link>
            </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </Menu>
            </Grid.Row>
            <Divider hidden/>
        </Container>
    )
}

