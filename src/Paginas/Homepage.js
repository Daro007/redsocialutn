import React from "react";
import Loading from "../Componentes/Loading";
import Perfil from "../Componentes/Perfil";
import PerfilesFirebase from "../Componentes/PerfilesFirebase";
import firebase from "../Config/firebase";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      personas: null,
      usuarios: [],
    };
  }
  async componentDidMount() {
    const url = await "https://my-json-server.typicode.com/Daro007/jsonParaTP/usuarios";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      personas: data,
      loading: false,
    });
    console.log(data);
    var this_class = this;
    return firebase
      .database()
      .ref("usuarios/")
      .once("value")
      .then(function (snapshot) {
        // console.log(snapshot.val());
        let dataUsuarios = Object.values(snapshot.val());

        this_class.setState({
          usuarios: dataUsuarios,
        });
        console.log(dataUsuarios);
      });
  }
  render() {
    return (
      <div>
        {this.state.personas === null ? (
          <Loading
            style={
              this.state.loading === true
                ? { display: "block" }
                : { display: "none" }
            }
          ></Loading>
        ) : (
          this.state.personas.map((perfil) => (
            <Perfil key={perfil.id} persona={perfil} />
          ))
        )}

        {this.state.personas === null ? (
          <Loading
            style={
              this.state.loading === true
                ? { display: "block" }
                : { display: "none" }
            }
          ></Loading>
        ) : (
          <div>
            {this.state.usuarios.map((usuario) => (
              <PerfilesFirebase key={usuario.email} usuarios={usuario} />
            ))}
          </div>
        )}
        {/* {console.log(this.state.usuarios)} */}
      </div>
    );
  }
}

export default Homepage;
