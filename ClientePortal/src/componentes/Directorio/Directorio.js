import React from "react";
import { List, Container} from "semantic-ui-react";

export default function Directorio(props) {
    return (
        <Container>
            <List animated className="botonimg2">
                <List.Item>
                    <List.Icon name="users" />
                    <List.Content>{props.nombre}</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="phone volume" />
                    <List.Content>Ext.{props.extension}</List.Content>
                </List.Item>
                {/* <List.Item>
                    <List.Icon name="mail" />
                    <List.Content>
                        <a href={`mailto:${props.email}`}>{props.email}</a>
                    </List.Content>
                </List.Item> */}
                <br />
            </List>
        </Container>
    );
}
