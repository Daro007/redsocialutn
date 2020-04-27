import React from "react";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

function Perfil(props) {
  return (
    <div className="perfil bg-secondary">
      <img
        src={props.persona === null ? "" : props.persona.foto}
        alt="imagen"
        className="imgPerfil"
      />
      <div className="datosPersona">
        <p>
          <span>Nombre:</span>{" "}
          {props.persona === null ? "" : props.persona.nombre}
        </p>
        <p>
          <span>Apellido:</span>{" "}
          {props.persona === null ? "" : props.persona.apellido}
        </p>
        <button className="btn-verPerfil">
          <Link className="linkUsuario" to={`/usuarios/${props.persona.id}`}>
            {" "}
            <MdPerson /> Ver perfil{" "}
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Perfil;
