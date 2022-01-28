import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Link from "react-router-bootstrap";
// import { LinkContainer } from 'react-router-bootstrap';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Error from "./Error";


function LoginForm({ setCurrentUser, currentUser }) {
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);

  const [isLoading, setIsLoading] = useState(false);


  function handleLoginSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    console.log(e);

    const user_object = {
      username: e.target[0].value,
      password: e.target[1].value,
    };

    fetch("login", {
      //hits the "login" endpoint aka "session#create"
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_object),
    }).then((r) => {
      if (r.ok) {
      setIsLoading(false);
        r.json().then((user) => {
          setCurrentUser(user)
          setSuccess(user)
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <Container>
        <Row>&nbsp;</Row>

        <Row>
          <Col></Col>
          <Col className="text-center">
            <img src="logo192.png" alt="logo" height="50px" id="form-logo" />
            <h4>Login</h4>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={10}>
            <Form onSubmit={(e) => handleLoginSubmit(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Enter username" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
              </Form.Group>

              <Row>
                <Col></Col>
                <Col className="text-center">
                  <Button variant="primary" type="submit" id="login-button">
                  {isLoading ? "Loading..." : "Login"}
                  </Button>
                </Col>
                <Col></Col>
                <br/>
                <Container className="text-center">
                  <br />
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
        {success.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </Container>
              </Row>
            </Form>
          </Col>
          <Col></Col>
        </Row>        
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>
      </Container>
    </>
  );
}

export default LoginForm;
