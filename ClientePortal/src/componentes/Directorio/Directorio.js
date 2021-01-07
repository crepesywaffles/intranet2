import React from "react";
import { List, Container, Divider} from "semantic-ui-react";

export default function Directorio(props) {
    return (
        <Container>
            <Divider hidden />
            <List animated className="botonimg2">
                <List.Item>
                    <List.Icon name="users" />
                    <List.Content>{props.nombre}</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="phone volume" />
                    <List.Content>Ext.{props.extension}</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="mail" />
                    <List.Content>
                        <a href={`mailto:${props.email}`}>{props.email}</a>
                    </List.Content>
                </List.Item>
            </List>
        </Container>
    );
}
