
import "./FormFacturacion.css";
import { Container } from "semantic-ui-react";
import React, { useState} from 'react';
import apiURL from "../../utils/apiURL";
import axios from "axios"
import Swal from "sweetalert2"


export default function FormFacturación() {
    const [inputs, setInputs] = useState({
        documento_equivalente : "",
        pais : "Colombia",
        Restaurante: "",
        solicitante: "",
        nombre_exp_factura: "",
        correo_exp_factura: "",
        telefono: "",
        contacto_facturacion: "",
    });
    const { documento_equivalente,Restaurante,solicitante,nombre_exp_factura,correo_exp_factura,telefono,contacto_facturacion } = inputs;
    const [docequivalente, setDocequivalente] = useState(null)
    const [rut, setRut] = useState(null)
    function handleChange(e) {
      console.log(e.target.value)
      const { name, value } = e.target;
      setInputs(inputs => ({ ...inputs, [name]: value }));
      console.log(inputs)
    }
    function handleChangeSelect(e){
      const value = e.target.value
      setInputs({Restaurante:value})
    }
    const  handleChangeDocequivalente= e => {
      setDocequivalente(e.target.files[0]);
    }
    const  handleChangeRut= e => {
      setRut(e.target.files[0]);
    }
    function sendEmail(){
      var data = new FormData();
      data.append('email', correo_exp_factura);
      data.append('asunto', 'confirmacion solicitud factura electronica');
      data.append('mensaje', `<h1>Crepes y Waffles S.A</h1><br/><p>Hemos recibido su solicitud de facturación electronica, para la factura ${documento_equivalente}</p>`);

      var config = {
        method: 'post',
        url: 'http://www.portaldeartesanos.com:1337/emails',
        data : data
      };
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
      console.log(error);
});
    }
    function handleSubmit(e){
        e.preventDefault();
        var data= new FormData();
        data.append("data",JSON.stringify(inputs))
        data.append('files.file_doc_equivalente', docequivalente)
        data.append('files.rut',rut)

        var config ={
          method:"post",
          url:`${apiURL}/facturacions`,
          data : data
        }
        axios(config)
        .then(function (response) {
          Swal.fire({
            title: 'confirmación',
            text: 'Tu solicitud ha sido enviada',
            icon: 'success',
            confirmButtonText: 'Continuar'
          })
          sendEmail()
          // window.location.reload()
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          Swal.fire({
            title: "Error de envio ",
            text: 'archivos no validos, recuerde solo recibimos archivos pdf o jpg',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
          console.log(error);
        });
    }
    console.log(Restaurante,telefono)
    return (
      <div className="main">
        <div className="Header">
          <h1>Crepes y waffles S.A</h1>
        </div>
        <div className="separador pb-4"></div>
        <br/>
        <Container>
          <div className="title-form p-1 mx-auto">FACTURACIÓN ELECTRONICA</div>
          <div className="text-center p-1 mx-auto">
            <h2>Solicitala llenado estos datos</h2>
            <spam>
              Recuerda que enviando este formulario apruebas estar de acuerdo
              con la{" "}
              <a
                href="https://crepesywaffles.com/node/569"
                target="_blanck"
              >
                ley de protección de datos personales
              </a>
            </spam>
            <br />
            <br />
            <spam className="text-center p-1 mx-auto">
              TODOS LOS CAMPOS SON OBLIGATORIOS
            </spam>
          </div>
          <form className="pb-5" onSubmit={handleSubmit} id="form-facturacion-electronica">
            <div className="d-flex flex-wrap pt-5 justify-content-center text-center">
            <div className="d-flex flex-wrap pt-2 justify-content-center text-center container-fluid">
              <label className="pri-label">
                CIUDAD EN LA QUE ESTA UBICADO EL RESTAURANTE
                <br />
                <select className="form-control select-form" style={Restaurante == '' || Restaurante =='Selecciona la ciudad' ? {backgroundColor:"#FF4848"}:{backgroundColor:"#54E346"}} onChange={handleChangeSelect}>
                  <option selected>Selecciona la ciudad</option>
                  <option value="Bogota">Bogotá</option>
                  <option value="Bucaramanga">Bucaramanga</option>
                  <option value="Villavicencio">Villavicencio</option>
                  <option value="Medellin">Medellín</option>
                  <option value="Cali">Cali</option>
                  <option value="Manizales">Manizales</option>
                  <option value="Pereira">Pereira</option>
                  <option value="Cartagena">Cartagena</option>
                  <option value="Santa Marta">Santa Marta</option>
                  <option value="Barranquilla">Barranquilla</option>
                </select>
              </label>
              </div>
              </div>
              {Restaurante != '' ? 
              <>
              <div className="d-flex flex-wrap pt-5 justify-content-center text-center">
              <div className="mb-3">
                <label className="pri-label">NUM.DOCUMENTO EQUIVALENTE (POS)</label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  required
                  maxlength="255"
                  size="30"
                  value={documento_equivalente}
                  onChange={handleChange}
                  name="documento_equivalente"
                />
              </div>
              <div className="">
                <label className="pri-label" for="file">
                  DOC(jpg o pdf)
                </label>
                <br />
                <input
                  className="form-file"
                  type="file"
                  name="file_doc_equivalente"
                  accept=".jpg,.pdf"
                  onChange={handleChangeDocequivalente}
                  required
                />
              </div>
            </div>
            <div className="d-flex flex-wrap pt-2 justify-content-center text-center container-fluid">
              <div className="d-flex flex-wrap pt-3 justify-content-center text-center">
                <div className="mb-3">
                  <label className="pri-label">NOMBRE DEL SOLICITANTE</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    required
                    maxlength="255"
                    size="30"
                    name="solicitante"
                    value={solicitante}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="pri-label" for="file">
                    RUT(jpg o pdf)
                  </label>
                  <br />
                  <input
                    className="form-file"
                    type="file"
                    name="file_rut"
                    id="file_rut"
                    accept=".jpg,.pdf"
                    required
                    onChange={handleChangeRut}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="pri-label">
                  NOMBRE A QUIÉN SE EXPEDIRÁ LA FACTURA ELECTRÓNICA
                </label>
                <br />
                <input
                  className="form-control container-fluid"
                  type="text"
                  required
                  maxlength="255"
                  size="82"
                  name="nombre_exp_factura"
                  value={nombre_exp_factura}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="pri-label">
                CORREO ELECTRÓNICO AL QUE LLEGARÁ LA FACTURA ELECTRÓNICA
                </label>
                <br />
                <input
                  className="form-control container-fluid"
                  type="text"
                  required
                  maxlength="255"
                  size="82"
                  name="correo_exp_factura"
                  value={correo_exp_factura}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-wrap pt-2 justify-content-center text-center">
              <div className="mb-3">
                <label className="pri-label">TELÉFONO DE CONTACTO</label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  required
                  maxlength="255"
                  size="34"
                  value={telefono}
                  name="telefono"
                  onChange={handleChange}
                />
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="mb-3">
              <label className="pri-label">CONTACTO FACT. ELECTRÓNICA</label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  required
                  maxlength="255"
                  size="34"
                  name="contacto_facturacion"
                  value={contacto_facturacion}
                  onChange={handleChange}
                />
              </div>
            </div>
            </div>
            </>
            :
            null}
            
            
            <div className="text-center pb-5">
                    <button className="btn-lg btn-custom">
                        ENVIAR
                    </button>
                </div>
            
          </form>
        </Container>
      </div>
    );
}
