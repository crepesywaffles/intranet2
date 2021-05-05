import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import apiURL from "../../../utils/apiURL"
import {Container} from "semantic-ui-react"
import ReactPlayer from "react-player"





export default class Curso extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        fetch(`${apiURL}/academia-capacitadores?id_eq=2`)
            .then((res) => res.json())
            .then((res) => this.setState({ data: res }));
    }
    render() {
        const curso = this.state.data.map((curso)=>(curso.Curso_academia))[0]
        console.log(curso)
        return (
                            <Layout>
                               {curso && curso.map((c)=>(
                                   <Container centered align="center" >
                                   <h1>{c.Titulo}</h1> 
                                   <Container  key={c.id} className="player-wrapper">
                                       <ReactPlayer
                                           className='react-player'
                                           url={c.link}
                                           width='100%'
                                           height='100%'
                                           controls="false"
                                       />
                                   </Container>
                                   </Container>
                               ))}
                            </Layout>
                        
                        
                
            
        )
    }
}