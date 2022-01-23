import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SignupForm({ setCurrentUser }) {
  const [errors, setErrors] = useState([]);

  function handleSignupSubmit(e) {
    e.preventDefault();
    const user_object = {
      username: e.target[0].value,
      password: e.target[1].value,
    };

    fetch('signup', {
      // hits the users#create endpoint to add a new user to the database
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user_object),
    })
      // .then((r) => r.json())
      // .then((user) => setCurrentUser(user));
      .then((r) => {
        // setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => setCurrentUser(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form onSubmit={handleSignupSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              
            <p>Click Sign Up to create a new account</p>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default SignupForm;
