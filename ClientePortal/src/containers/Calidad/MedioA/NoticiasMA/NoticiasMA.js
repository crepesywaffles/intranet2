import React, { Component } from 'react'
import Layout from '../../../../componentes/Layout/Layout'
import {Grid, Container,Image,Divider} from "semantic-ui-react"
import apiURL from '../../../../utils/apiURL'
import {Link} from "react-router-dom"
import {Aguapotable,Aguaresidual,Pedidos,ResiduosSolidos} from "../../../../assets/calidad/M.A/Noticias/index"
import *as paths from "../../../../config/routing/paths"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { HeaderMedioA} from '../../../../assets/calidad/index';



export default class NoticiasMA extends Component {
    render() {
        const LinkStyle = {
            textDecoration: "none",
            color: "black",
            textColor: "white",
            fontFamily: "Arial",
            fontSize: "1.2em"
        }
        const settings = {
            dot:true,
            infinite: true,
            speed: 500,
            slidesToShow:3,
            slidesToScroll:1,
            cssEase: "linear",
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    cssEase: "linear",
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    cssEase: "linear",
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    cssEase: "linear",
                  }
                }
              ],
        }
        return (
            <Layout>
            <Divider hidden />
            <Image as={Link} to={paths.CON_CALIDAD_CORE} src={HeaderMedioA}/>
            <div className="container mt-5 carousel container-car">
            <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-s">
                        <Link to={paths.CON_MEDIOAMBIENTE_NOTICIAS_AGUAPOTABLE} style={LinkStyle}><img src={`${Aguapotable}`}/></Link>
                    </div>
                    <div className="social-des">
                    <Link to={paths.CON_MEDIOAMBIENTE_NOTICIAS_AGUAPOTABLE} style={LinkStyle}><h1>Agua potable</h1></Link>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-s">
                        <Link to={paths.CON_MEDIOAMBIENTE_NOTICIAS_AGUARESIDUAL} style={LinkStyle}><img src={`${Aguaresidual}`}/></Link>
                    </div>
                    <div className="social-des">
                    <Link to={paths.CON_MEDIOAMBIENTE_NOTICIAS_AGUARESIDUAL} style={LinkStyle}><h1>Agua residual</h1></Link>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-s">
                        <Link  to={paths.CON_MEDIOAMBIENTE_NOTICIAS_PEDIDOS} style={LinkStyle}><img src={`${Pedidos}`}/></Link>
                    </div>
                    <div className="social-des">
                    <Link to={paths.CON_MEDIOAMBIENTE_NOTICIAS_PEDIDOS}  style={LinkStyle}><h1>Pedidos Almacén</h1></Link>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-s">
                        <Link to={paths.CON_MEDIOAMBIENTE_NOTICIAS_RESIDUOS} style={LinkStyle}><img src={`${ResiduosSolidos}`}/></Link>
                    </div>
                    <div className="social-des">
                    <Link to={paths.CON_MEDIOAMBIENTE_NOTICIAS_RESIDUOS}  style={LinkStyle}><h1>Residuos solidos</h1></Link>
                    </div>
                </div>
            </div>
            </Slider>
            </div>
            </Layout>
        )
    }
}
