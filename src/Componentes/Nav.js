import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function BarraNav() {
  return (
    <Navbar className="navbar navbar-dark bg-dark navbar-expand-lg" expand="lg">
      <Navbar.Brand>
        <span className="text-white"> UTN.BA - </span>
        <span className="text-danger">Centro de e-Learning</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="navbar-nav ml-auto justify-content-end"
      >
        <Nav className="navbar-nav ml-auto justify-content-end">
          <Nav.Link>
            {" "}
            <Link className="nav-link" to="/">
              <span>Inicio</span>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/Registro">
              <span>Registro </span>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/Login">
              {" "}
              <span> Login</span>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BarraNav;
