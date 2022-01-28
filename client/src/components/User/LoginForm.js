import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "react-router-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import FloatingLabel from "react-bootstrap/FloatingLabel";

function LoginForm({ setCurrentUser, currentUser }) {
  const [errorMsg, setErrorMsg] = useState({});

  function handleLoginSubmit(e) {
    e.preventDefault();
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
        r.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        r.json().then((err) => {
          console.log(err)
          setErrorMsg(err)
        });
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
                    Log in
                  </Button>
                </Col>
                <Col></Col>
              </Row>
            </Form>
          </Col>
          <Col></Col>
        </Row>
        <Row>&nbsp;</Row>

        {/* {errorMsg !== {} ? <p>no error</p> : <p>error</p>} */}

        {/* {currentUser ? (
          <>
            <Row>
              <Col></Col>
              <Col className="text-center">

                <Link to="/cocktail-list">Cocktails</Link>

              </Col>
              <Col></Col>
            </Row>
          </>
        ) : null} */}
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>
      </Container>
    </>
  );
}

export default LoginForm;
