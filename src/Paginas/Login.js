import React from "react";
import { FaReact } from "react-icons/fa";
import { Field, Form, Formik } from "formik";
import { Col, Container, Row } from "reactstrap";
import { ReactstrapInput } from "reactstrap-formik";

function Login() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Campo obligatorio";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Por favor ingrese un e-mail válido";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        //Aca va la llamada a la API

        setTimeout(() => {
          setSubmitting(false);
          alert(`Has iniciado sesión ->  ${JSON.stringify(values, null, 2)}`);
        }, 2000);
      }}
      render={({ submitForm, isSubmitting, values }) => (
        <div>
          <h2 className="text-center bg-danger text-white py-2">
            Curso de Desarrollo en React JS <FaReact className="app-logo" />{" "}
          </h2>
          <Form className="col-lg-4 offset-lg-4">
            <h2 className="text-center">Iniciar sesión</h2>
            <br />
            <Container style={{ paddingTop: "5px" }}>
              <Row>
                <Col xs="12">
                  <Field
                    type="email"
                    label="Email"
                    name="email"
                    id="email"
                    component={ReactstrapInput}
                  />
                </Col>
                <Col xs="12">
                  <Field
                    type="password"
                    label="Password"
                    name="password"
                    id="password"
                    component={ReactstrapInput}
                  />
                </Col>
                <Col xs="12">
                  <button type="submit" className="btn btn-dark">
                    Inicia sesión
                  </button>
                </Col>
              </Row>
            </Container>
          </Form>
        </div>
      )}
    />
  );
}

export default Login;
