import React, { useState,useEffect} from 'react';
import apiURL from "../../utils/apiURL";
import Swal from "sweetalert2"
import Logo from "../../assets/home/LogoMoneda.png"
import {Container} from "semantic-ui-react"
import { set } from 'react-ga';

export default function Escribenos() {
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [subject,setSubject]= useState("")
    const [body,setBody]= useState("")
    const [terminos,setTerminos]= useState(false)
    const [pais,setPais]= useState("")
    console.log(pais)
    
    useEffect(() => {
      setTimeout(function removechat(){
        const chat= document.body.childNodes
        let chatnode= chat[chat.length -1].id
        if(chatnode){
          var element = document.getElementById(`${chatnode}`);
          element.parentNode.removeChild(element);
          
        }else{
          console.log(chatnode)
        }
      },4000)
    },[]);
    function handleTerminos(e){
        e.target.checked == true ?
        setTerminos(true):
        setTerminos(false)
      }
    function handleChangeName(e){
        const value = e.target.value
        setName(value)
    }
    function handleChangePais(e){
      const value = e.target.value
      setPais(value)
  }
    function handleChangeEmail(e){
        const value = e.target.value
        setEmail(value)
    }
    function handleChangeAsunto(e){
        const value = e.target.value
        setSubject(value)
    }
    function handleChangeBody(e){
        const value = e.target.value
        setBody(value)
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "request": {
        "requester": {
        "name": `${name}`,
        "email": `${email}`
        },
        "subject": `${subject}`,
        "comment": {
    "body": `${pais}\n${body}`
        }
    }
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
    
    
    
    function handleSubmit(e){
    e.preventDefault();
    fetch("https://crepesywaffleshelp.zendesk.com/api/v2/requests.json", requestOptions)
    .then(()=>(
      Swal.fire({
        title: 'confirmación',
        text: 'Tu solicitud ha sido enviada',
        icon: 'success',
        confirmButtonText: 'Continuar'
      })
    ))
    .catch((error)=>(
      Swal.fire({
        title: "Error de envio",
        text: 'Por favor complete el formulario en su totalidad.',
        icon: 'error',
        confirmButtonText: 'Continuar'
      }),
      console.log(error)
    ))
    }
    console.log(raw)
    return (
        <div className="main">
        <div className="Header">
          <h1>CREPES & WAFFLES</h1>
        </div>
        <div className="separador pb-4"></div>
        <br/>
        <Container>
          <div className="title-form p-1 mx-auto">ESCRIBENOS</div>
          <div className="text-center p-1 mx-auto">
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
              {terminos == true ? 
              <>
            
            <div className="d-flex flex-wrap pt-2 justify-content-center text-center container-fluid">
            <label className="pri-label">
                  PAÍS
                  <br />
                  <select className="form-control select-form" onChange={handleChangePais}>
                    <option>Seleccione un país</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Chile">Chile</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="España">España</option>
                    <option value="México">México</option>
                    <option value="Panamá">Panamá</option>
                  </select>
                </label>
              <div className="mb-3">
                <label className="pri-label">
                NOMBRES Y APELLIDOS
                </label>
                <br />
                <input
                  className="form-control container-fluid"
                  type="text"
                  required
                  maxlength="255"
                  size="82"
                  name="nombres"
                  
                  onChange={handleChangeName}
                />
              </div>
              <div className="mb-3">
                <label className="pri-label">
                EMAIL
                </label>
                <br />
                <input
                  className="form-control container-fluid"
                  type="email"
                  required
                  maxlength="255"
                  size="82"
                  name="email"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </div>
              <div className="mb-3">
                <label className="pri-label">
                ASUNTO
                </label>
                <br />
                <input
                  className="form-control  container-fluid"
                  type="text"
                  required
                  maxlength="255"
                  size="82"
                  name="asunto"
                  value={subject}
                  onChange={handleChangeAsunto}
                />
              </div>
              
            </div>
            <div className="mb-3">
                <label className="pri-label">
                MENSAJE
                </label>
                <br />
                <textarea
                  className="form-control "
                  type="text"
                  required
                  spellCheck
                  size="60"
                  name="mensaje"
                  rows="7"
                  value={body}
                  onChange={handleChangeBody}
                />
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
    )
}
