import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function SignupForm({ setCurrentUser }) {
  const [errors, setErrors] = useState([]);

  function handleSignupSubmit(e) {
    e.preventDefault();
    setErrors([]);

    const user_object = {
      username: e.target[0].value,
      password: e.target[1].value,
    };


    fetch("signup", {
      // hits the users#create endpoint to add a new user to the database
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_object),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setCurrentUser(user)
            window.location = "/my-liquor-cabinet";
          });
          

        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }
  //display error message on frontend

  return (
    <>
      <Container>
        <Row>&nbsp;</Row>
        <Row>
          <Col></Col>
          <Col className="text-center">
            <img src="logo192.png" alt="logo" height="50px" id="form-logo" />
            <h4>Sign up</h4>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={10}>
            <Form onSubmit={handleSignupSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Username</Form.Label> */}
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
                    Sign Up
                  </Button>
                </Col>
                <Col></Col>
                <Container>
        {errors.map((err) => (
          <p key={err}>{err}</p>
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

export default SignupForm;
