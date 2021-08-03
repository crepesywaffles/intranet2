import React, { Component } from "react";
import "./FormFacturacion.css";
import { Container } from "semantic-ui-react";

export default class FormFacturación extends Component {
  render() {
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
                href="https://crepesywaffles.com/terminosycondiciones"
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
          <form className="pb-5">
            <div className="d-flex flex-wrap pt-5 justify-content-center text-center">
              <div className="mb-3">
                <label className="pri-label">NUM.DOCUMENTO EQUIVALENTE</label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  required
                  maxlength="255"
                  size="30"
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
                  name="file"
                  id="file"
                  required
                />
              </div>
            </div>
            <div className="d-flex flex-wrap pt-2 justify-content-center text-center container-fluid">
              <label className="pri-label">
                RESTAURANTE
                <br />
                <select className="form-control select-form">
                  <option value="Bogota">Bogotá</option>
                  <option value="Bucaramanga">Bucaramanga</option>
                  <option value="Villavicencio">Villavicencio</option>
                  <option value="Medellin">Medellín</option>
                  <option value="Cali">Cali</option>
                  <option value="Manizales">Manizales</option>
                  <option value="Pereira">Pereira</option>
                  <option value="Cartagena">Cartagena</option>
                  <option value="SantaMarta">Santa Marta</option>
                  <option value="Barranquilla">Barranquilla</option>
                </select>
              </label>
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
                    name="file"
                    id="file"
                    required
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
                />
              </div>
            </div>
            </div>
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
}
