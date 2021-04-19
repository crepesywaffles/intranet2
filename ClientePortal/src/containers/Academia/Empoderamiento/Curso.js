import launch from 'material-ui/svg-icons/action/launch'
import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import apiURL from "../../../utils/apiURL"





export default class Curso extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        fetch(`${apiURL}/academia-capacitadores?id_eq=1`)
            .then((res) => res.json())
            .then((res) => this.setState({ data: res }));
    }
    render() {
        const curso = this.state.data
        console.log(curso)
        return (
                            <Layout>
                               Autoconocimiento
                            </Layout>
                        
                        
                
            
        )
    }
}
