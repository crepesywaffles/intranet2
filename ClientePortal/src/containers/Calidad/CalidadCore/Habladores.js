import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import Modal from "../../../componentes/Modal/Modal"
import apiURL from "../../../utils/apiURL"
import "./Habladores.css"
export default class Habladores extends Component {
    state ={
        habladores: []
    } 
    componentDidMount() {
        fetch(`${apiURL}/habladores-calidads`)
          .then((res) => res.json())
          .then((res) => this.setState({ habladores: res }));
      }
    render() {
        const artesano = this.state.habladores.filter((h)=>(h.tipo === "Artesano")).map((habladores)=>(habladores.hablador))
        const carretinos = this.state.habladores.filter((h)=>(h.tipo === "Carretinos")).map((habladores)=>(habladores.hablador))
        const Haeropuerto = this.state.habladores.filter((h)=>(h.tipo === "H.Aeropuerto")).map((habladores)=>(habladores.hablador))
        const heladerias = this.state.habladores.filter((h)=>(h.tipo === "Heladerias")).map((habladores)=>(habladores.hablador))
        const restaurantes = this.state.habladores.filter((h)=>(h.tipo === "Restaurantes")).map((habladores)=>(habladores.hablador))
        console.log(artesano)
        return (
            <Layout>
                <div className="galeria_contenedor">
                <Modal
                    btn={<button className="botonimg">Artesano</button>}
                    size={"fullscreen"}
                >
                    <div className="container-habladores">
                    {artesano && artesano.map((img)=>(
                    img.map((im)=>(
                        <div>
                        <img src={`${im.url}`}/>
                        </div>
                    
                    ))
                ))}
                    </div>
                </Modal>
                <Modal
                    btn={<button className="botonimg">Carretinos</button>}
                    size={"fullscreen"}
                >
                    <div className="container-habladores">
                    {carretinos && carretinos.map((img)=>(
                    img.map((im)=>(
                        <div>
                        <img src={`${im.url}`}/>
                        </div>
                    
                    ))
                ))}
                    </div>
                </Modal>
                <Modal
                    btn={<button className="botonimg">Heladería Aeropuerto</button>}
                    size={"fullscreen"}
                >
                    <div className="container-habladores">
                    {Haeropuerto && Haeropuerto.map((img)=>(
                    img.map((im)=>(
                        <div>
                        <img src={`${im.url}`}/>
                        </div>
                    
                    ))
                ))}
                    </div>
                </Modal>
                <Modal
                    btn={<button className="botonimg">Heladerias</button>}
                    size={"fullscreen"}
                >
                    <div className="container-habladores">
                    {heladerias && heladerias.map((img)=>(
                    img.map((im)=>(
                        <div>
                        <img src={`${im.url}`}/>
                        </div>
                    
                    ))
                ))}
                    </div>
                </Modal>
                <Modal
                    btn={<button className="botonimg">Restaurantes</button>}
                    size={"fullscreen"}
                >
                    <div className="container-habladores">
                    {restaurantes && restaurantes.map((img)=>(
                    img.map((im)=>(
                        <div>
                        <img src={`${im.url}`}/>
                        </div>
                    
                    ))
                ))}
                    </div>
                </Modal>
                </div>
            </Layout>
        )
    }
}
