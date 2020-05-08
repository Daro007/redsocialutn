import React from "react";
import "./App.css";
import Registro from "./Paginas/Registro";
import Login from "./Paginas/Login";
import Homepage from "./Paginas/Homepage";
import PerfilDeUsuario from "./Paginas/PerfilDeUsuario";
import { Switch, Route } from "react-router-dom";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import BarraNav from "./Componentes/Nav";
import { Redirect } from "react-router-dom";
// import firebase from "./Config/firebase";
// import { render } from "@testing-library/react";

function App() {
  // const [isLogIn, setIsLogIn] = useState(false);

  // firebase.auth().onAuthStateChanged((firebaseUser) => {
  //   if (firebaseUser) {
  //     setIsLogIn(true);
  //     console.log(isLogIn);
  //   } else {
  //     setIsLogIn(false);
  //   }
  // });

  return (
    <div className="App">
      <div id="content-wrap">
        <Header />
        <BarraNav />
        <Switch>
          <Route exact path="/Registro">
            <Registro />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/">
            {localStorage.getItem("usuarioLogueado") ? (
              <Homepage />
            ) : (
              <Redirect exact to="/Login" />
            )}
          </Route>
          <Route exact path="/usuarios/:idu">
            <PerfilDeUsuario />
          </Route>
        </Switch>
      </div>
      <Footer />
      {console.log(localStorage.getItem("usuarioLogueado"))}
    </div>
  );
}

export default App;
