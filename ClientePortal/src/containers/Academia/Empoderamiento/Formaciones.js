import {Link} from "react-router-dom"
import Layout from "../../../componentes/Layout/Layout"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import apiURL from "../../../utils/apiURL"
import "./Formaciones.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';
import React, { Component } from 'react';
import *as paths from "../../../config/routing/paths";
import {Button} from "semantic-ui-react"
import { CON_ACADEMIA_CURSO } from "../../../config/routing/routes"



export default class Formaciones extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        fetch(`${apiURL}/academia-capacitadores`)
            .then((res) => res.json())
            .then((res) => this.setState({ data: res }));
    }
    
    render() {
        const capacitador= this.state.data
        const settings = {
            dot:true,
            infinite: true,
            speed: 500,
            slidesToShow:2,
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
        console.log(capacitador)
        return (
            <Layout>
            <div className="container mt-5 carousel container-car">
            <Slider {...settings}>
            {capacitador && capacitador.map((cap)=>(
                <div key={cap.id} className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={`${cap.foto_perfil.url}`}/>
                    </div>
                    <ul className="social-icons">
                        <li>
                            <a href={cap.facebook} target="_blanck"><FontAwesomeIcon className="social-icon" icon={faFacebook} /></a>
                        </li>
                        <li>
                            <a href={cap.instagram} target="_blanck"><FontAwesomeIcon className="social-icon"  icon={faInstagram}/></a>
                        </li>
                    </ul>
                    <div className="details">
                        
                        <h2>{cap.Nombre}<span className="description">{cap.Descripcion}</span></h2>
                        <Button className="btn-curso" as={Link} to={paths.CON_ACADEMIA_CURSO} secondary>{cap.curso}</Button>
                        
                    </div>
                </div>
            </div>
            ))}
            </Slider>
            </div>
            
        </Layout>
        )
    }
}

