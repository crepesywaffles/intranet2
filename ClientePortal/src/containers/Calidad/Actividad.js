import React, { useState, useEffect } from 'react';
import Layout from '../../componentes/Layout/Layout'
import apiURL from "../../utils/apiURL"
import { Image, Button,Container } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

export default function Actividad() {
    const [recursos, setRecursos] = useState("")
    useEffect(() => (
        fetch(`${apiURL}/actividad-calidads`)
            .then((res) => res.json())
            .then((res) => setRecursos(res))
    ), [])
    const imagenes = recursos && recursos.map((img) => (img))
    const imagenesf = imagenes && imagenes[0].recursos.map((img) => (img.url))
    const documentos = recursos[1] && recursos.map((img) => (img))[1]
    const documentosf = documentos && documentos.recursos.map((img) => (img.url))
    console.log(documentosf)
    return (
        <Layout>
            <div className="d-flex justify-content-center flex-wrap">
                {imagenesf && imagenesf.map((img) => (
                    <Image src={`${apiURL}${img}`} size="large" />
                ))}
            </div>
            <div className="text-center p-5">
                {documentosf && documentosf.map((img) => (
                    <Button className="btn-primary" size="massive"> <a href={`${apiURL}${img}`} target="_blank">Infografias</a> </Button>
                ))}
            </div>
            <h2 className="text-center">Actividad</h2>
            <div className="d-flex justify-content-center">
                <iframe width="795" height="690" frameborder="0" src="https://es.educaplay.com/juego/10478615-dia_mundial_lavado_de_manos.html"></iframe>
            </div>
            <Container className="p-5" centered align="center" >
                <Container className="player-wrapper">
                    <ReactPlayer
                        className='react-player'
                        url="https://youtu.be/ej70yEY0q8Y"
                        width='100%'
                        height='100%'
                        controls="false"
                    />
                </Container>
            </Container>
        </Layout>
    )
}
