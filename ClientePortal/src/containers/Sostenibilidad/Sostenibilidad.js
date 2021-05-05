import apiURL from "../../utils/apiURL"
import Layout from '../../componentes/Layout/Layout'
import {Container,Image,Grid,Button,Divider} from "semantic-ui-react"
import {data1,data2} from "../../assets/sostenibilidad/index"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Link} from "react-router-dom"
import "../Sostenibilidad/Sostenibilidad.css"

import React, { Component } from 'react'

export default class Sostenibilidad extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        fetch(`${apiURL}/sostenibilidads`)
            .then((res) => res.json())
            .then((res) => this.setState({ data: res }));
    }
    
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
            slidesToShow:4,
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
        const capacitador= this.state.data
        console.log(capacitador)
        return (
            <Layout>
            <Image src={data1} alt="Regiones" />
            <Divider hidden />
            <Grid columns='equal' verticalAlign='middle' centered >
                <Image src={data2} alt="Productos" size="large" />
                <Divider hidden />
                <iframe src="https://www.google.com/maps/d/embed?mid=19-fnCLPBk7UJN9T0wJ8wPOqa0_HD2Fhr" width="640" height="550"></iframe>
            </Grid>
            <div className="container mt-5 carousel container-car">
            <Slider {...settings}>
            {capacitador && capacitador.map((cap)=>(
                <div id={cap.proyecto} key={cap.id} className="card-wrapper">
                <div className="card">
                    <div className="card-s">
                        <Link to={cap.path} style={LinkStyle}><img src={`${cap.foto[0].url}`}/></Link>
                    </div>
                    <div className="social-des">
                    <Link to={cap.path} style={LinkStyle}><h1>{cap.proyecto}</h1></Link>
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

