import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FaReact } from "react-icons/fa";
import firebase from "../Config/firebase";

function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    password: "",
    password2: "",
  });

  function handleSubmit(e) {
    const formulario = document.querySelector(".needs-validation");

    if (formulario.checkValidity() === true) {
      e.preventDefault();
      console.log(form);
      firebase.database().ref("usuarios/").push({
        nombre: form.nombre,
        apellido: form.apellido,
        email: form.email,
        telefono: form.telefono,
        password: form.password,
        password2: form.password2,
      });
    } else if (formulario.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    formulario.classList.add("was-validated");
  }
  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <div>
      <h2 className="text-center bg-danger text-white py-2">
        Curso de Desarrollo en React JS <FaReact className="app-logo" />{" "}
      </h2>

      <Form
        id="formulario"
        action=""
        className="needs-validation col-lg-6 offset-lg-3"
        noValidate
        onSubmit={handleSubmit}
      >
        <h2 className="text-center">Formulario de registro</h2>
        <br />
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="nombre">
                <strong>Nombre</strong>
              </label>
              <input
                name="nombre"
                id="nombre"
                type="text"
                className="form-control"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="apellido">
                <strong>Apellido</strong>
              </label>
              <input
                name="apellido"
                id="apellido"
                type="text"
                className="form-control"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="email">
                <strong>E-mail</strong>
              </label>
              <input
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                name="email"
                id="email"
                type="email"
                className="form-control"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Ingrese un E-mail valido</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="telefono">
                <strong>Telefono</strong>
              </label>
              <input
                name="telefono"
                id="telefono"
                type="number"
                className="form-control"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="password">
                <strong>Contraseña</strong>
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="form-control"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="password2">
                <strong>Repetir Contraseña</strong>{" "}
              </label>
              <input
                id="password2"
                name="password2"
                type="password"
                className="form-control"
                required
                onChange={handleChange}
              />
              <div className="invalid-feedback">Campo obligatorio</div>
            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="col">
            <button type="submit" className="btn btn-dark">
              Registrarme
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Registro;
