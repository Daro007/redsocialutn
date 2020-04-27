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
// import { render } from "@testing-library/react";

function App() {
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
            <Homepage />
          </Route>
          <Route exact path="/usuarios/:id">
            <PerfilDeUsuario />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
