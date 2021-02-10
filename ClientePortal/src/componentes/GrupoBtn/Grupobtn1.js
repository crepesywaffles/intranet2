import React from 'react'
import { Image, Container, Grid } from "semantic-ui-react"
import { Link } from "react-router-dom"

export default function Grupobtn(props) {
    return (
        <Container stackabel aling="center">
            <Image as={props.as} href={props.href} target={props.target} to={props.path} className={props.class} size={props.size} src={props.src} label={props.label} />
        </Container>
    )
}
