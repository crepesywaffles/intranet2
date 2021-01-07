import React from 'react'
import {Carousel} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Carusel(props) {
    const {children} = props;
    return (
       <Carousel>
           {children}
       </Carousel>
    )
}



