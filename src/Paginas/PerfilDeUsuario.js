import React, { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { useParams } from "react-router-dom";
import Loading from "../Componentes/Loading";
import firebase from "../Config/firebase";

function PerfilDeUsuario() {
  const [amistad, setAmistad] = useState(false);
  const [usuario, setUsuario] = useState("");

  const { idu } = useParams();
  // console.log(idu);

  useEffect(() => {
    async function fetchData() {
      return firebase
        .database()
        .ref("usuarios/")
        .once("value")
        .then(function (snapshot) {
          let dataUsuarios = Object.entries(snapshot.val());
          const filtrado = dataUsuarios.filter((dato) => dato[0] === idu);

          setUsuario(filtrado[0]);
        });
    }
    fetchData();
  }, [idu]);

  useEffect(() => {
    function mostrarAmistad() {
      if (localStorage.getItem(idu) === null) {
        setAmistad(false);
      } else if (localStorage.getItem(idu)) {
        setAmistad(true);
      }
    }
    mostrarAmistad();
  }, [idu]);

  function handleFriend() {
    if (localStorage.getItem(idu) === null) {
      localStorage.setItem(idu, true);
      setAmistad(true);
    } else if (localStorage.getItem(idu)) {
      localStorage.removeItem(idu);
      setAmistad(false);
    }
  }

  return (
    <div>
      <main className="miPerfil">
        <img
          className="fotoUsuario"
          src="https://thumbs.dreamstime.com/z/hombre-gris-del-placeholder-de-la-foto-persona-gen%C3%A9rica-silueta-en-un-fondo-blanco-144511705.jpg"
          alt="foto perfil de usuario "
        />
        <div className="dataMiPerfil">
          <p>
            <span>Usuario:</span>{" "}
            {usuario === "" ? <Loading /> : usuario[1].nombre}
          </p>

          <p>
            <span>Apellido:</span>{" "}
            {usuario === "" ? <Loading /> : usuario[1].apellido}
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

          <button className="btn-agregar" onClick={handleFriend}>
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
