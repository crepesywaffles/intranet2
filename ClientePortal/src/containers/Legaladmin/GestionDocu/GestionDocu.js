import React, { Component } from 'react'
import Layout from "../../../componentes/Layout/Layout"
import apiURL from '../../../utils/apiURL'
import {Header,Doclegal,Correspondencia,Mision} from "../../../assets/dir.admon/GestionDocumental/index"
import { Image,Grid,Divider,Container} from 'semantic-ui-react'
import {Link} from "react-router-dom"
import *as paths from "../../../config/routing/paths"
import Modal from "../../../componentes/Modal/Modal"
import Grupobtn from '../../../componentes/GrupoBtn/Grupobtn1'

export default class GestionDocu extends Component {
    state = {
        media: [],
        
    };

    componentDidMount() {
        fetch(`${apiURL}/dirlegals`)
            .then((res) => res.json())
            .then((res) => this.setState({ media: res }));
    }
    render() {
        const info=this.state.media
        const Recomen= info && info[1]
        const recourl= Recomen && Recomen.media.map((img)=>(img.url))
        
        return (
            <Layout>
                <Image as={Link} to={paths.CON_LEGAL} src={Header} fluid/>
                <Divider hidden/>
                <Grid centered stackable>
                    
                    <Grid.Column width={4}>
                    <Modal
                                open={false}
                                btn={<Grupobtn as={"a"} href={`${apiURL}${recourl && recourl[0]}`}
                                    target="_blank" class={"botonimg btn"} size="medium" src={Doclegal} />}
                            ></Modal>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <Modal
                                open={false}
                                btn={<Grupobtn as={"a"} href={`${apiURL}${recourl && recourl[1]}`}
                                    target="_blank" class={"botonimg btn"} size="medium" src={Correspondencia} />}
                            ></Modal>
                    </Grid.Column>
                    
                </Grid>
                <Divider hidden/>
            </Layout>
        )
    }
}