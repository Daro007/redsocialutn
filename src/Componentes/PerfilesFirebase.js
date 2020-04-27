import React from "react";
import { MdPerson } from "react-icons/md";
// import { Link } from "react-router-dom";
// import firebase from "../Config/firebase";

function PerfilesFirebase(props) {
  return (
    <div className="perfil bg-secondary">
      <img
        src="https://thumbs.dreamstime.com/z/hombre-gris-del-placeholder-de-la-foto-persona-gen%C3%A9rica-silueta-en-un-fondo-blanco-144511705.jpg"
        alt="imagen"
        className="imgPerfil"
      />
      <div className="datosPersona">
        <p>
          <span>Nombre:</span>{" "}
          {props.usuarios === null ? "" : props.usuarios.nombre}
        </p>
        <p>
          <span>Apellido:</span>{" "}
          {props.usuarios === null ? "" : props.usuarios.apellido}
        </p>

        <button className="btn-verPerfil">
          <MdPerson /> Ver perfil{" "}
        </button>
      </div>
    </div>
  );
}

export default PerfilesFirebase;
