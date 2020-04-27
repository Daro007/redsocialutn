import React, { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { useParams } from "react-router-dom";
import Loading from "../Componentes/Loading";

function PerfilDeUsuario() {
  const [amistad, setAmistad] = useState(false);
  const [usuario, setUsuario] = useState("");

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      const url = `https://my-json-server.typicode.com/Daro007/jsonParaTP/usuarios/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      const usuario = setUsuario(data);
      console.log(usuario);
      console.log(data);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <main className="miPerfil">
        <img
          className="fotoUsuario"
          src={usuario === "" ? <Loading /> : usuario.foto}
          alt="foto perfil de usuario "
        />
        <div className="dataMiPerfil">
          <p>
            <span>Usuario:</span>{" "}
            {usuario === "" ? <Loading /> : usuario.nombre}
          </p>

          <p>
            <span>Apellido:</span>{" "}
            {usuario === "" ? <Loading /> : usuario.apellido}
          </p>
          <p>
            <span>Curso:</span> Desarrollo en React JS <FaReact></FaReact>
          </p>
          <div className={amistad === false ? "amigosOff" : "amigosOn"}>
            <span>
              Amigos en el curso de React JS{" "}
              <FaReact className="app-logo"></FaReact>
            </span>
          </div>
          <br />

          <button
            className="btn-agregar"
            onClick={() => setAmistad((prevState) => !prevState)}
          >
            <IoMdPersonAdd
              display={amistad === false ? "inline-block" : "none"}
            ></IoMdPersonAdd>{" "}
            {amistad === false ? "Agregar" : "Eliminar"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default PerfilDeUsuario;
