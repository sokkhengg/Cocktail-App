import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./User.css";

// using react bootstrap tab for styling
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Form({ currentUser, setCurrentUser }) {
  return (
    <div>
      <Container className="form-tabs">
      <Row>
          <Col></Col>
          <Col xs={6} >
          
            <Tabs
              defaultActiveKey="login"
              id="login-signup"
              className="mb-3"
              className="form-border"
            >
              <Tab eventKey="login" title="Login" className="form-body">
                <LoginForm
                  setCurrentUser={setCurrentUser}
                  currentUser={currentUser}
                />
              </Tab>
              <Tab eventKey="signup" title="Sign up" className="form-body">
                <SignupForm
                  setCurrentUser={setCurrentUser}
                  currentUser={currentUser}
                />
              </Tab>
            </Tabs>
          </Col>
          <Col></Col>
        
      </Row>
      </Container>
    </div>
  );
}
