import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

function CreatorCards() {
  return (
    <Container>
      <Row className="text-center">
        <Col xs={4}>
            <Row>
              <Col></Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title className="creator-title">
                      Ben Perry
                    </Card.Title>
                    
                    <Row>&nbsp;</Row>

                    <Row>
                     <Col><a href="https://github.com/bbperry"><img src="github-256.webp" alt="logo" height="45px" id="form-logo" /></a>
                     </Col>

                     <Col><a href="https://www.linkedin.com/in/benjamin-perry-a48609120/"><img src="final-linkedin.png" alt="logo" height="45px" id="form-logo" /></a>
                     </Col>
                    </Row>


                  </Card.Body>
                </Card>
              </Col>
              <Col></Col>
            </Row>
        </Col>

        <Col xs={4}>
            <Row>
              <Col></Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title className="creator-title">
                      Sean Hurley
                    </Card.Title>
                    <Row>&nbsp;</Row>
                    <Row>
                     <Col><a href="https://github.com/smh1988-2"><img src="github-256.webp" alt="logo" height="45px" id="form-logo" /></a>
                     </Col>

                     <Col><a href="https://www.linkedin.com/in/sean-hurley/"><img src="final-linkedin.png" alt="logo" height="45px" id="form-logo" /></a>
                     </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col></Col>
            </Row>
        </Col>

        <Col>
            <Row>
              <Col></Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                      
                    <Card.Title className="creator-title">
                      Sok Heng
                    </Card.Title>
                    <Row>&nbsp;</Row>
                    <Row>
                     <Col><a href="https://github.com/sokkhengg"><img src="github-256.webp" alt="logo" height="45px" id="form-logo" /></a>
                     </Col>

                     <Col><a href="https://www.linkedin.com/in/st009/"><img src="final-linkedin.png" alt="logo" height="45px" id="form-logo" /></a>
                     </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col></Col>
            </Row>
        </Col>


      </Row>
    </Container>
  );
}

export default CreatorCards;
