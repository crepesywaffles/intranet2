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
    searchSolicitante = this.searchSolicitante.bind(this);
    searchAll = this.searchAll.bind(this);
    handleRadicado= this.handleRadicado.bind(this)
    handleSolicitante=this.handleSolicitante.bind(this)
    handleAll=this.handleAll.bind(this)
    handleChangeSelect=this.handleChangeSelect.bind(this)
    state = { 
        facturas : [],
        valueradicado:"",
        valuesolicitante: "",
        radic: false,
        solici: false,
        all:false,
        ciudad: ""
    }
    componentDidMount() {
        fetch(`${apiURL}/facturacions?Restaurante_contains=${this.state.ciudad}&_sort=created_at:DESC`)
          .then((res) => res.json())
          .then((res) => this.setState({ facturas : res }));
      }
      
    searchRadicado(e){
        this.setState({ valueradicado:e.target.value});
        fetch(`${apiURL}/facturacions?Restaurante_contains=${this.state.ciudad}&radicado_contains=${this.state.valueradicado}`)
          .then((res) => res.json())
          .then((res) => this.setState({ facturas : res }));        
    }  
    searchSolicitante(e){
        this.setState({ valuesolicitante:e.target.value});
        fetch(`${apiURL}/facturacions?Restaurante_contains=${this.state.ciudad}&solicitante_contains=${this.state.valuesolicitante}`)
          .then((res) => res.json())
          .then((res) => this.setState({ facturas : res }));        
    } 
    searchAll(e){
        fetch(`${apiURL}/facturacions?Restaurante_in=Bogota&Restaurante_in=Bucaramanga&Restaurante_in=Villavicencio&_sort=created_at:DESC`)
          .then((res) => res.json())
          .then((res) => this.setState({ facturas : res }));       
    }   
    handleRadicado(e){
        e.target.checked == true ?
        this.setState({radic:true,solici:false,all:false})
        :this.setState({radic:false})
      }
      handleSolicitante(e){
        e.target.checked == true ?
        this.setState({solici:true,radic:false,all:false}):
        this.setState({solici:false})
      }
      handleAll(e){
        e.target.checked == true ?
        this.setState({solici:false,radic:false,all:true}):
        this.setState({all:false})
      }
    handleChangeSelect(e){
        const value = e.target.value
        this.setState({ciudad:value})
        fetch(`${apiURL}/facturacions?Restaurante_contains=${value}&_sort=created_at:DESC`)
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
        
        console.log(this.state.ciudad)
        console.log(this.state.valueradicado,"radicado")
        
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
                    <label for="ciudad"><strong>Ciudad</strong></label>
                    &nbsp;
                    <select name="ciudad" onChange={this.handleChangeSelect}>
                    <option value="seleccione">Seleccione</option>
                    {localStorage.Rol == "feB" ?
                    <option value="Bogota">Bogotá (cundinamarca)</option>
                    :null
                    }
                    {localStorage.Rol == "feB" ?
                    <option value="Bucaramanga">Bucaramanga</option>
                    :null
                    }
                    {localStorage.Rol == "feB" ?
                    <option value="Villavicencio">Villavicencio</option>
                    :null
                    }
                    {localStorage.Rol == "feBA"?
                    <option value="Barranquilla">Barranquilla</option>
                    :null
                    }
                    {localStorage.Rol == "feCT"?
                    <option value="Cartagena">Cartagena</option>
                    :null
                    }
                    {localStorage.Rol == "feCT"?
                    <option value="Santa Marta">Santa Marta</option>
                    :null
                    }
                    {localStorage.Rol == "feM" ?
                    <option value="Medellin">Medellín (Antioquia)</option>
                    :null
                    }
                    {localStorage.Rol == "feC" ?
                    <option value="Cali">Cali</option>
                    :null
                    }
                    {localStorage.Rol == "feC" ?
                    <option value="Pereira">Pereira</option>
                    :null
                    }
                    {localStorage.Rol == "feC" ?
                    <option value="Manizales">Manizales</option>
                    :null
                    }
                    </select>
                    <br/>
                    <br/>
                    {this.state.ciudad === "" || this.state.ciudad === "seleccione" ?
                    null
                    :
                    <div>
                    <div>
                    <h4>Buscar por:</h4>
                    </div>
                    <br/>
                    <div className="">
                    <div className="terminos">
                    <label><input type="radio" name="filtro" checked={this.state.radic == true ? true :false} onChange={this.handleRadicado} required/><strong>Radicado</strong></label>
                    </div>
                    <div className="terminos">
                    <label><input type="radio" name="filtro" checked={this.state.solici == true ? true : false} onChange={this.handleSolicitante} required/><strong>Solictante</strong></label>
                    </div>
                    <div className="terminos">
                    <label><input type="radio" name="filtro" checked={this.state.all == true ? true : false} onChange={this.handleAll} onClick={this.searchAll} required/><strong>Todos</strong></label>
                    </div>
                    </div>
                    {this.state.radic == true ? 
                    <input type="search" value={this.state.valueradicado} onChange={this.searchRadicado} placeholder="Ingrese el numero de radicado" />:
                    null
                    }
                    {this.state.solici == true ? 
                    <input type="search" value={this.state.valuesolicitante} onChange={this.searchSolicitante} placeholder="Ingrese el nombre del solicitante" />:
                    null
                    }
                    </div>
                    
                    }
                </div>
                {this.state.ciudad === "" || this.state.ciudad === "seleccione" ?
                null
                :
                    <div className="rainbow-m-bottom_xx-large">
                    <TableWithBrowserPagination pageSize={10} data={facturas} keyField="id" variant="listview">
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
                
                }
            </Layout>
        )
    }
}
