import React, { Component } from 'react'
import Layout from '../../../../../componentes/Layout/Layout'
import apiURL from '../../../../../utils/apiURL'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Image,Divider } from 'semantic-ui-react'
import {Link} from "react-router-dom"
import "../../../../Sostenibilidad/Sostenibilidad.css"
import *as paths from "../../../../../config/routing/paths"
import {DesinfeccionAlimentos,SGI,LyD,Vidautil} from "../../../../../assets/calidad/main/habladores/index"

export default class Heladerias extends Component {
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
            <div className="container mt-5 carousel container-car">
            <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-s">
                        <Link to={paths.CON_CALIDAD_HABLADORES_HELADERIAS_DALIMENTOS} style={LinkStyle}><img src={`${DesinfeccionAlimentos}`}/></Link>
                    </div>
                    <div className="social-des">
                    <Link to={paths.CON_CALIDAD_HABLADORES_HELADERIAS_DALIMENTOS} style={LinkStyle}><h1>Desinfección de Alimentos</h1></Link>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-s">
                        <Link to={paths.CON_CALIDAD_HABLADORES_HELADERIAS_SGI} style={LinkStyle}><img src={`${SGI}`}/></Link>
                    </div>
                    <div className="social-des">
                    <Link to={paths.CON_CALIDAD_HABLADORES_HELADERIAS_SGI} style={LinkStyle}><h1>Sistema de Gestión<br/>de inocuidad</h1></Link>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-s">
                        <Link  to={paths.CON_CALIDAD_HABLADORES_HELADERIAS_LYD} style={LinkStyle}><img src={`${LyD}`}/></Link>
                    </div>
                    <div className="social-des">
                    <Link to={paths.CON_CALIDAD_HABLADORES_HELADERIAS_LYD}  style={LinkStyle}><h1>Limpieza y Desinfección</h1></Link>
                    </div>
                </div>
            </div>
            </Slider>
            </div>
            </Layout>
        )
    }
}
