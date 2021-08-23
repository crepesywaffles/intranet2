import {useLocation } from 'react-router-dom';
import React, { useState} from 'react';
import axios from 'axios';
import apiURL from "../../utils/apiURL"
import logo from "../../assets/home/LogoMoneda.png"
import "../Login/Login.css"
import Modal from "../../componentes/Modal/Modal"



export default function Login() {
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
});
const { username, password } = inputs;
const location = useLocation();
const [submitted, setSubmitted] = useState(false);

function handleChange(e) {
  const { name, value } = e.target;
  setInputs(inputs => ({ ...inputs, [name]: value }));
  console.log(inputs)
}

function handleSubmit(e) {
  e.preventDefault();
  setSubmitted(true);
  if (username && password) {
    axios
  .post(`${apiURL}/auth/local`, {
    identifier: `${username}`,
    password: `${password}`,
  })
  .then(response => {
    // Handle success.
    localStorage.setItem('Usertoken', response.data.jwt);
    localStorage.setItem('Rol', response.data.user.rol);
    localStorage.setItem('NombresApellidos',response.data.user.nombres_apellidos);
    console.log(response)
  })
  .catch(error => {
    // Handle error.
    alert("Datos de inicio de sesión incorrectos")
  })
    if(localStorage.Usertoken){
      window.location.pathname="/home"
    }
  }
}

    
    

  return (
    <div className="login-container">
      <div className="login">
            <form name="form" onSubmit={handleSubmit}>
            <img src={logo}/>
            <h2>Comunicarte CYW</h2>
                <div className="form-group">
                    <label>Usuario</label>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Ingrese su Usuario</div>
                    }
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Ingrese su contraseña</div>
                    }
                </div>
                <div className="terminos">
                <label><input type="checkbox" name="TYC" required />
                <Modal
                    btn={`Acepto términos y condiciones`}
                    size={"small"}
                    centered={"true"}
                    
                    
                >
                  <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=vc94nuvqwd" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                </Modal>
                </label>
                </div>
                
                
                <div className="form-group">
                    <button className="btn btn-dark">
                        Ingresar
                    </button>
                </div>
            </form>
        </div>
    </div>
    
  );
}

