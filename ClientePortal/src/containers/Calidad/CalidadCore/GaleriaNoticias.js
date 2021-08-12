import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import apiURL from "../../../utils/apiURL";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {CaruselAlergenos,CaruselDoc,CaruselLYD,CaruselPlagas,CaruselProducto} from "../../../assets/calidad/main/index"
import { HeaderCalidad } from '../../../assets/calidad';
import {Image,Grid,Divider} from "semantic-ui-react"
import {Link} from "react-router-dom"
import "../../Sostenibilidad/Sostenibilidad.css"
import *as paths from "../../../config/routing/paths"

export default class GaleriaNoticias extends Component {
    
    
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
            <Image as={Link} to={paths.CON_CALIDAD_CORE} src={HeaderCalidad}/>
            <div className="container mt-5 carousel container-car">
            <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-s">
                        <Link to={paths.CON_CALIDAD_NOTICIAS_ALERGENOS} style={LinkStyle}><img src={`${CaruselAlergenos}`}/></Link>
                    </div>
                    <div className="social-des">
                    <Link to={paths.CON_CALIDAD_NOTICIAS_ALERGENOS} style={LinkStyle}><h1>Alergenos</h1></Link>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-s">
                        <Link to={paths.CON_CALIDAD_NOTICIAS_DOCUMENTACION} style={LinkStyle}><img src={`${CaruselDoc}`}/></Link>
                    </div>
                    <div className="social-des">
                    <Link to={paths.CON_CALIDAD_NOTICIAS_DOCUMENTACION} style={LinkStyle}><h1>Documentación</h1></Link>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-s">
                        <Link  to={paths.CON_CALIDAD_NOTICIAS_LYD} style={LinkStyle}><img src={`${CaruselLYD}`}/></Link>
                    </div>
                    <div className="social-des">
                    <Link to={paths.CON_CALIDAD_NOTICIAS_LYD}  style={LinkStyle}><h1>Limpieza y Desinfección</h1></Link>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-s">
                        <Link to={paths.CON_CALIDAD_NOTICIAS_PLAGAS} style={LinkStyle}><img src={`${CaruselPlagas}`}/></Link>
                    </div>
                    <div className="social-des">
                    <Link to={paths.CON_CALIDAD_NOTICIAS_PLAGAS}  style={LinkStyle}><h1>Manejo de plagas</h1></Link>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-s">
                        <Link to={paths.CON_CALIDAD_NOTICIAS_PRODUCTO}  style={LinkStyle}><img src={`${CaruselProducto}`}/></Link>
                    </div>
                    <div className="social-des">
                    <Link to={paths.CON_CALIDAD_NOTICIAS_PRODUCTO} style={LinkStyle}><h1>Manejo Producto</h1></Link>
                    </div>
                </div>
            </div>
            </Slider>
            </div>
            </Layout>
        )
    }
}
