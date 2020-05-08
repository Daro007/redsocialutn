import React from "react";
import Loading from "../Componentes/Loading";
// import Perfil from "../Componentes/Perfil";
import PerfilesFirebase from "../Componentes/PerfilesFirebase";
import firebase from "../Config/firebase";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      completo: [],
      // usuarios: [],
      // idu: [],
    };
  }

  async componentDidMount() {
    var this_class = this;
    return firebase
      .database()
      .ref("usuarios/")
      .once("value")
      .then(function (snapshot) {
        let entries = Object.entries(snapshot.val());

        this_class.setState({
          completo: entries,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.usuarios === null ? (
          <Loading
            style={
              this.state.loading === true
                ? { display: "block" }
                : { display: "none" }
            }
          ></Loading>
        ) : (
          <div>
            {this.state.completo.map((usuario) => (
              <PerfilesFirebase
                key={usuario[0]}
                usuarios={usuario[1]}
                idu={usuario[0]}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Homepage;
