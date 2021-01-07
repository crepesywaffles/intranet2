import React from 'react'
import Layout from "../../componentes/Layout/Layout"
import Carusel from "../../componentes/Carusel/Carusel"
import {Image,Container,Divider} from "semantic-ui-react"
import Boton1 from "../../assets/home/Analisisdeventas.png"
import Boton2 from "../../assets/home/BotonAniversarios.png"
import Boton3 from "../../assets/home/BotonBeneficios.png"
import Boton4 from "../../assets/home/BotonCOVID19.png"
import Boton5 from "../../assets/home/BotonCumpleaños.png"
import "../Home/Home.css"
import { Component } from 'react'
import apiURL from "../../utils/apiURL"
import {Carousel} from "react-bootstrap"



class Home extends Component {

    state = {
        img: [],
    }
    componentDidMount(){
        fetch(`${apiURL}/homesliders`)
        .then(res=>{return res.json()})
        .then(res =>{this.setState({img:res[0].sliders})
    })
    }
    render(){

        return (
        
            <Layout>
            <Carusel>
            {this.state.img.map((task,index)=>
                    <Carousel.Item >
                    <img className=" d-block w-100 " key ={index.id} alt={task.name+"Slider"} src={`${apiURL}${task.url}`}/>
                    </Carousel.Item>
                )}
            </Carusel>
            <Divider hidden />
            <Container  align="center" stackeable>
            <Image.Group size="medium">
            <Image className="botonimg"bordered rounded src={Boton1}/>
            <Image className="botonimg"bordered rounded src={Boton2}/>
            <Image className="botonimg"bordered rounded src={Boton3}/>
            <Image className="botonimg"bordered rounded src={Boton4}/>
            <Image className="botonimg"bordered rounded src={Boton5}/>
            <Image className="botonimg"bordered rounded src={Boton1}/>
            </Image.Group>
            </Container>
            </Layout>
    )
    }
    
}

export default Home;
