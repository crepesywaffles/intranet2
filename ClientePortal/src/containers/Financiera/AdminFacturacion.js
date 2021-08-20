import React, { Component } from 'react'
import Layout from "../../componentes/Layout/Layout"
import apiURL from '../../utils/apiURL';
import { TableWithBrowserPagination, Column, Badge ,Button} from 'react-rainbow-components';
import {Image} from "semantic-ui-react"
import styled from 'styled-components';
import axios from 'axios';
import logo from "../../assets/home/LogoMoneda.png"
import {Link} from "react-router-dom"
import*as paths from "../../config/routing/paths"



export default class AdminFacturacion extends Component {
    searchRadicado = this.searchRadicado.bind(this);
    state = { 
        facturas : [],
        value:""
    }
    componentDidMount() {
        fetch(`${apiURL}/facturacions?Restaurante_contains=Bogota&_sort=created_at:DESC`)
          .then((res) => res.json())
          .then((res) => this.setState({ facturas : res }));
      }
      
    searchRadicado(e){
        this.setState({ value:e.target.value});
        fetch(`${apiURL}/facturacions?radicado_contains=${this.state.value}`)
          .then((res) => res.json())
          .then((res) => this.setState({ facturas : res }));
    }  
    async handleStatusSend(id) {
        
            await axios
                .put(`${apiURL}/facturacions/${id}`, {
                    estado: "Enviado",
                    
                })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    // Handle error.
                    alert("Error en petición ")
                })
                window.location.reload()
        }
    async handleStatusPending(id) {
        
         await axios
            .put(`${apiURL}/facturacions/${id}`, {
                estado: "Pendiente",
                
            })
            .then(response => {
                console.log(response)
                
            })
            .catch(error => {
                // Handle error.
                alert("Error en petición")
            })
            window.location.reload()
    }
    
    
    render() {
        console.log(this.state.value)
        const StyledBadge = styled(Badge)`
        color: green;
        font-weight: 700;
        `;
        const StyledBadgePend = styled(Badge)`
        color: red;
        font-weight: 700;
        `;
        const StyledButton = styled(Button)`
        color: blueviolet;
        z-index: 1;
        text-align: center;
        cursor: pointer;
        font-weight: 700;
        font-size: 14px;
        `;
        const StyledButtonCheck = styled(Button)`
        color: #1de9b6;
        z-index: 1;
        text-align: center;
        cursor: pointer;
        font-weight: 700;
        font-size: 17px;
        `;
        const StyledButtonPend = styled(Button)`
        color: red;
        z-index: 1;
        text-align: center;
        cursor: pointer;
        font-weight: 700;
        font-size: 17px;
        `;
        const StatusBadge = ({ value }) => value == "Enviado" ? <StyledBadge label={value} variant="lightest" /> : <StyledBadgePend label={value} variant="lightest" />;
        const RefDoc= ({ value }) => <StyledButton as="a" target="_blanck" href={`${apiURL}${value}`}>Ver</StyledButton>;
        const RefCheck= ({ value }) => <StyledButtonCheck as="a" target="_blanck" onClick={() => this.handleStatusSend(value)}>OK</StyledButtonCheck>;
        const RefPend= ({ value }) => <StyledButtonPend as="a" target="_blanck" onClick={() => this.handleStatusPending(value)}>X</StyledButtonPend>;
        console.log(this.state.facturas)
        const {facturas} = this.state
        return (
            <Layout>
                <div className="d-block text-center">
                    <Image as={Link} to={paths.CON_HOME} centered src={logo} size="tiny"/>
                    <div className="title-form p-1 mx-auto"><Link to={paths.CON_FORM_FACTURACION}>SOLICITUDES FACTURACIÓN ELECTRONICA</Link></div>
                    <input type="search" value={this.state.value} onChange={this.searchRadicado} placeholder="Ingrese el numero de radicado" />
                </div>
                    <div className="rainbow-m-bottom_xx-large">
                    <TableWithBrowserPagination pageSize={5} data={facturas} keyField="id" variant="listview">
                        <Column header="Radicado" field="radicado" />
                        <Column header="Numero Doc.Equivalente" field="documento_equivalente" />
                        <Column header="Documento Equivalente" field="file_doc_equivalente.url" component={RefDoc}/>
                        <Column header="Rut" field="rut.url" component={RefDoc}/>
                        <Column header="Solicitante" field="solicitante" />
                        <Column header="Restaurante" field="Restaurante" />
                        <Column header="correo a expedir factura" field="correo_exp_factura" />
                        <Column header="Telefono" field="telefono" />
                        <Column header="Fecha" field="created_at" />
                        <Column header="Estado" field="estado" component={StatusBadge} />
                        <Column header="Cambio de estado" field="id" component={RefCheck}/>
                        <Column field="id" component={RefPend}/>
                    </TableWithBrowserPagination>
                </div>
            </Layout>
        )
    }
}
