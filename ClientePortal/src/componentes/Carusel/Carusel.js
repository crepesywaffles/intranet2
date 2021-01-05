import React, { Component } from 'react'
import {Carousel} from "react-bootstrap"
import apiURL from "../../utils/apiURL"
import 'bootstrap/dist/css/bootstrap.min.css';



export class Carusel extends Component {
    state = {
        img: [],
    }
    componentDidMount(){
        fetch(`${apiURL}/homesliders`)
        .then(res=>{return res.json()})
        .then(res =>{this.setState({img:res[0].sliders})
    })
    }
    render() {
        return (
            
                <Carousel>
                    
                    {this.state.img.map((task,index)=>
                    <Carousel.Item >
                    <img className=" d-block w-100 " key ={index.id} alt={task.name+"Slider"}clealt={task.name} src={`${apiURL}${task.url}`}/>
                    </Carousel.Item>
                )}
                
                    
                    
                </Carousel>
            
        )
    }
}

export default Carusel

