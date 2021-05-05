import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Link} from "react-router-dom"
import apiURL from "../../utils/apiURL"


export default class Gente extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        fetch(`${apiURL}/nuestra-gentes`)
            .then((res) => res.json())
            .then((res) => this.setState({ data: res }));
    }
    render() {
        const LinkStyle = {
            textDecoration: "none",
            color: "black",
            textColor: "black",
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
        const data= this.state.data
        console.log(data)
        return (
            <Layout>
                <div className="container mt-5 carousel container-car">
            <Slider {...settings}>
            {data && data.map((cap)=>(
                <div  key={cap.id} className="card-wrapper">
                <div className="card">
                    <div className="card-s">
                        <Link to={cap.path} ><img src={`${cap.portada.url}`}/></Link>
                    </div>
                    <div className="social-des">
                    <Link to={cap.path} style={LinkStyle} ><h1>{cap.titulo}</h1></Link>
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
