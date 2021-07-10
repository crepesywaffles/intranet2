import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import Modal from "../../componentes/Modal/Modal"
import apiURL from "../../utils/apiURL"
import {Button,Divider,Container} from "semantic-ui-react"

export default class Programas extends Component {
    state ={
        programas: []
    } 
    componentDidMount() {
        fetch(`${apiURL}/programas-de-calidads`)
          .then((res) => res.json())
          .then((res) => this.setState({ programas : res }));
      }
    render() {
        const programa= this.state.programas.map((pr)=>(pr.categoria))
        const programa1= this.state.programas.map((pr)=>(pr.documentos)).map((pr)=>(pr))[0]
        const programa2= this.state.programas.map((pr)=>(pr.documentos)).map((pr)=>(pr))[1]
        const programa3= this.state.programas.map((pr)=>(pr.documentos)).map((pr)=>(pr))[2]
        const programa4= this.state.programas.map((pr)=>(pr.documentos)).map((pr)=>(pr))[3]
        const programa5= this.state.programas.map((pr)=>(pr.documentos)).map((pr)=>(pr))[4]
        const programa6= this.state.programas.map((pr)=>(pr.documentos)).map((pr)=>(pr))[5]
        const programa7= this.state.programas.map((pr)=>(pr.documentos)).map((pr)=>(pr))[6]
        console.log(programa5 && programa5.map((i)=>(i.url)))
        return (
            <Layout>
                
                <Modal
                    btn={<Button className="programas_E" color="black">{programa[0]}</Button>}
                    size={"fullscreen"}
                >
                <Container>
                   {programa1 && programa1.map((pr)=>(
                    <li className="lista-programas">
                    <Container textAlign="center">
                    <Button className="programas_E" as={"a"} color="black" href={`${pr.url}`} target="_blank">{`${pr.name}`}</Button>
                    <br></br>
                    <br></br>
                    </Container>
                    </li>
                   ))}
                </Container>
                </Modal>
                <Modal
                    btn={<Button className="programas_E" color="black">{programa[1]}</Button>}
                    size={"fullscreen"}
                >
                <Container>
                {programa2 && programa2.map((pr)=>(
                    <li className="lista-programas">
                    <Container textAlign="center">
                    <Button className="programas_E" as={"a"} color="black" href={`${pr.url}`} target="_blank">{`${pr.name}`}</Button>
                    <br></br>
                    <br></br>
                    </Container>
                    </li>
                   ))}
                </Container>
                </Modal>
                <Modal
                    btn={<Button className="programas_E" color="black">{programa[2]}</Button>}
                    size={"fullscreen"}
                >
                <Container>
                {programa3 && programa3.map((pr)=>(
                   <li className="lista-programas">
                   <Container textAlign="center">
                   <Button className="programas_E" as={"a"} color="black" href={`${pr.url}`} target="_blank">{`${pr.name}`}</Button>
                   <br></br>
                   <br></br>
                   </Container>
                   </li>
                   ))}
                </Container>
                </Modal>
                <Modal
                    btn={<Button className="programas_E" color="black">{programa[3]}</Button>}
                    size={"fullscreen"}
                >
                <Container>
                {programa4 && programa4.map((pr)=>(
                    <li className="lista-programas">
                    <Container textAlign="center">
                    <Button className="programas_E" as={"a"} color="black" href={`${pr.url}`} target="_blank">{`${pr.name}`}</Button>
                    <br></br>
                    <br></br>
                    </Container>
                    </li>
                   ))}
                </Container>
                </Modal>
                <Modal
                    btn={<Button className="programas_E" color="black">{programa[4]}</Button>}
                    size={"fullscreen"}
                >
                <Container>
                {programa5 && programa5.map((pr)=>(
                    <li className="lista-programas">
                    <Container textAlign="center">
                    <Button className="programas_E" as={"a"} color="black" href={`${pr.url}`} target="_blank">{`${pr.name}`}</Button>
                    <br></br>
                    <br></br>
                    </Container>
                    </li>
                   ))}
                   <Divider hidden />
                </Container>
                </Modal>
                <Modal
                    btn={<Button className="programas_E" color="black">{programa[5]}</Button>}
                    size={"fullscreen"}
                    
                >
                <Container>
                {programa6 && programa6.map((pr)=>(
                    <li className="lista-programas">
                    <Container textAlign="center">
                    <Button className="programas_E" as={"a"} color="black" href={`${pr.url}`} target="_blank" >{`${pr.name}`}</Button>
                    <Divider hidden/>
                    </Container>
                    </li>
                   ))}
                </Container>
                </Modal>
                <Modal
                    btn={<Button className="programas_E" color="black">{programa[6]}</Button>}
                    size={"fullscreen"}
                >
                <Container>
                {programa7 && programa7.map((pr)=>(
                    <li className="lista-programas">
                    <Container textAlign="center">
                    <Button className="programas_E" as={"a"} color="black" href={`${pr.url}`} target="_blank" >{`${pr.name}`}</Button>
                    <br></br>
                    <br></br>
                    </Container>
                    </li>
                   ))}
                </Container>
                </Modal>
            </Layout>
        )
    }
}
