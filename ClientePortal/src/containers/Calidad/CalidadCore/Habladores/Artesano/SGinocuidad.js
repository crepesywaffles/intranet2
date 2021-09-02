import React, { Component } from 'react'
import Layout from '../../../../../componentes/Layout/Layout'
import apiURL from '../../../../../utils/apiURL'
import Modal from "../../../../../componentes/Modal/Modal"
import {Grid,Image,Divider,Button} from "semantic-ui-react"

export default class SGinocuidad extends Component {
    state ={
        media: []
    } 
    componentDidMount() {
        fetch(`${apiURL}/habladores-c-artesanos`)
          .then((res) => res.json())
          .then((res) => this.setState({ media: res }));
      }
    render() {
        const info=this.state.media
        const imagenes= info && info[2]

        return (
            <Layout>
                <Grid>
                {imagenes && imagenes.imagenes.map((img)=>(
                        <Modal
                        key={img.id}
                        btn={<Button secondary>{img.name}</Button>}
                        

                    >
                    {
                        img.ext == ".pdf" ?
                        <>
                        <label>PDF
                        <br/>
                        <a href={`${apiURL}${img.url}`} target="_blank">{img.name}</a>
                        </label>
                        </>
                       
                        :
                        <Image size="large" src={`${apiURL}${img.url}`}/>
                    }
                    </Modal>
                    ))}
                </Grid>
                <Divider hidden/>
            </Layout>
        )
    }
}