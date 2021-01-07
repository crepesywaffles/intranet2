import React from 'react'
import {Image,Container, Grid} from "semantic-ui-react"
import Link from "react-router-dom"


export default function Grupobtn(props) {
    return (
        <Container stackabel aling="center">
            <Grid columns={2}>
            <Grid.Row>               
                        <Image as={props.as} href={props.href} to={props.path1}className={props.class}size={props.size} src={props.src1}/>
                        <Image as={props.as2} href={props.href2}to={props.path2}className={props.class}size={props.size} src={props.src2}/>
            </Grid.Row>
            </Grid>
        </Container>
    )
}
