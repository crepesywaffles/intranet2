import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import apiURL from "../../../utils/apiURL"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../Sostenibilidad.css"
import {Image} from "semantic-ui-react"

export default class Tumaco extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        fetch(`${apiURL}/sostenibilidads?proyecto_eq=Tumaco`)
            .then((res) => res.json())
            .then((res) => this.setState({ data: res }));
    }
    render() {
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
        const region= this.state.data.map((gal)=>(gal.galeria))[0]
        const producto= this.state.data.map((ref)=>(ref.imagen_ref))
                console.log(producto)
        return (
            <Layout>
            <div className="container mt-5 carousel container-car">
            <Slider {...settings}>
            {region && region.map((img)=>(
                <div key={img.id} className="card-wrapper">
                <div className="card">
                <div className="card-s">
                <img src={`${img.url}`}/>
                </div>
                </div>
                </div>
            ))}
            </Slider>
            </div>
            {producto && producto.map((ref)=>(
                <Image src={ref.url} />
            ))}
            </Layout>
        )
    }
}