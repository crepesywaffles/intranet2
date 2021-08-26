
import "./FormFacturacion.css";
import { Container } from "semantic-ui-react";
import React, { useState,useEffect} from 'react';
import apiURL from "../../utils/apiURL";
import axios from "axios"
import Swal from "sweetalert2"
import Logo from "../../assets/home/LogoMoneda.png"



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
        radicado:"",
    });
    const { documento_equivalente,Restaurante,solicitante,nombre_exp_factura,correo_exp_factura,telefono,contacto_facturacion,radicado} = inputs;
    const [docequivalente, setDocequivalente] = useState(null)
    // const [n_radicado, setN_radicado] = useState('')
    const [terminos,setTerminos]= useState(false)
    const [rut, setRut] = useState(null)
    const [confirmemail,setConfirmemail]= useState("")
    // useEffect(()=>{
    //   fetch(`${apiURL}/facturacions`)
    //   .then((res) => res.json())
    //   .then((res) => setN_radicado(res.length))
    // });
    function handleTerminos(e){
      e.target.checked == true ?
      setTerminos(true):
      setTerminos(false)
    }
    function handleChange(e) {
      const { name, value } = e.target;
      setInputs(inputs => ({ ...inputs, [name]: value }));
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
    async function updateRadicado(id) {
        
      await axios
         .put(`${apiURL}/facturacions/${id}`, {
             radicado: `${id}-CYW-${Restaurante}`,
             
         })
         .then(response => {
             console.log(response)
             
         })
         .catch(error => {
             // Handle error.
             alert("Error en petición")
         })
 }
    
    function sendEmail(id){
      var data = new FormData();
      data.append('email', correo_exp_factura);
      data.append('asunto', 'Confirmacion solicitud factura eléctronica');
      data.append('mensaje', `<h1>Crepes y Waffles S.A</h1><br/><p>Hemos recibido su solicitud de facturación eléctronica, para la factura ${documento_equivalente}</p><br/><spam>el radicado de su solicitud es ${id}<spam/><br/>En 5 días hábiles estará recibiendo respuesta por parte nuestra.`);

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
    function sendNotification(id){
      switch(Restaurante){
        case "Bogota":
            var correo = "clientes.fe.bogota@crepesywaffles.com";
            break;
        case "Medellin":
            var correo= "clientes.fe.medellin@crepesywaffles.com";
            break;
        case "Barranquilla":
            var correo = "clientes.fe.barranquilla@crepesywaffles.com";
            break;
        case "Cali": 
            var correo= "clientes.fe.cali@crepesywaffles.com";
            break;
        case "Cartagena":
          var correo= "clientes.fe.cartagena@crepesywaffles.com";
          break;
          case "Bucaramanga":
            var correo= "clientes.fe.bogota@crepesywaffles.com";
            break;
        case "Villavicencio":
          var correo= "clientes.fe.bogota@crepesywaffles.com";
          break;
        case "Manizales":
          var correo= "clientes.fe.cali@crepesywaffles.com";
          break;
          case "Pereira":
        var correo= "clientes.fe.cali@crepesywaffles.com";
        break;
        case "Santa Marta":
        var correo= "clientes.fe.cartagena@crepesywaffles.com";
        break;
        
      }
      var data = new FormData();
      data.append('email', correo);
      data.append('asunto', 'Nueva solicitud facturación electronica');
      data.append('mensaje', `<h1>Conunicarte CYW</h1><br/><p>Has recibido una solicitud de facturación electronica, para la factura ${documento_equivalente}</p><br/><spam>el radicado de la solicitud es ${id}-CYW-${Restaurante} <spam/>en la ciudad ${Restaurante}`);

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
          sendEmail(response.data.id)
          sendNotification(response.data.id)
          updateRadicado(response.data.id)

          setTimeout(window.location.reload.bind(window.location), 5000)
          console.log(JSON.stringify(response.data));
        })
        
        .catch(function (error) {
          Swal.fire({
            title: "Error de envio",
            text: 'Por favor complete el formulario en su totalidad.\nRecuerde que solo recibimos archivos jpg o pdf',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
          console.log(error);
        });
        
    }
    console.log(documento_equivalente,Restaurante,solicitante,nombre_exp_factura,correo_exp_factura,telefono,contacto_facturacion,radicado)
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
            <spam className="text-center p-1 mx-auto">
              TODOS LOS CAMPOS SON OBLIGATORIOS
            </spam>
            <br />
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
            <div className="terminos">
            <label><input type="checkbox" name="TYC" checked={terminos} onChange={handleTerminos} required/><strong>Acepto política de tratamiento de datos</strong></label>
            </div>
          </div>
          <form className="pb-5" onSubmit={handleSubmit} id="form-facturacion-electronica">
            <div className="d-flex flex-wrap pt-5 justify-content-center text-center">
            <div className="d-flex flex-wrap pt-2 justify-content-center text-center container-fluid">
              {terminos == true ?
              <label className="pri-label">
                CIUDAD EN LA QUE ESTA UBICADO EL RESTAURANTE
                <br />
                <select className="form-control select-form"  onChange={handleChangeSelect}>
                  <option>Seleccione una ciudad</option>
                  <option value="Barranquilla">Barranquilla</option>
                  <option value="Bogota">Bogotá (cundinamarca)</option>
                  <option value="Bucaramanga">Bucaramanga</option>
                  <option value="Cali">Cali</option>
                  <option value="Cartagena">Cartagena</option>
                  <option value="Manizales">Manizales</option>
                  <option value="Medellin">Medellín (Antioquia)</option>
                  <option value="Pereira">Pereira</option>
                  <option value="Santa Marta">Santa Marta</option>
                  <option value="Villavicencio">Villavicencio</option>
                </select>
              </label>
              :null
              }
              </div>
              {/* <div className="mb-1">
                <label className="pri-label"></label>
                <br />
                <input
                  className="text-center radicado"
                  type="text"
                  required
                  maxlength="200"
                  size="60"
                  value={`${n_radicado}-CYW-${Restaurante}`}  
                  onClick={handleChange}
                  name="radicado"
                  readOnly
                />
              </div> */}
              </div>
              {terminos == true ? 
              <>
              <div className="d-flex flex-wrap pt-5 justify-content-center text-center">
              <div className="mb-3">
                <label className="pri-label">NUM.DOCUMENTO EQUIVALENTE<br/>(Sistema POS número)</label>
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
                    RUT ACTUALIZADO(jpg o pdf)
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
                  type="email"
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
