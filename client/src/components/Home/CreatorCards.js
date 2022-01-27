import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";


function CreatorCards() {

  return (
    
    <Container className='creator-container' fluid>
        <Row >
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className='creator-title'>Sean Hurley</Card.Title>
                        <Card.Text>
                            <Card.Link className='creator-links' href="#"><AiFillLinkedin className='linkedin'/> Sean's LinkedIn</Card.Link>
                        </Card.Text>
                    
                    <Card.Link className='creator-links' href="https://github.com/smh1988-2"><BsGithub /> Sean's GitHub</Card.Link>
            </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className='creator-title'>Ben Perry</Card.Title>
                        <Card.Text>
                            <Card.Link className='creator-links' href="#"><AiFillLinkedin className='linkedin'/> Ben's LinkedIn</Card.Link>
                        </Card.Text>
                    
                    <Card.Link className='creator-links' href="https://github.com/bbperry"><BsGithub /> Ben's GitHub</Card.Link>
            </Card.Body>
        </Card>
        </Col>


        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className='creator-title'>Sok Heng</Card.Title>
                        <Card.Text>
                            <Card.Link className='creator-links' href="#"><AiFillLinkedin className='linkedin'/> Sok's LinkedIn</Card.Link>
                        </Card.Text>
                    
                    <Card.Link className='creator-links' href="https://github.com/sokkhengg"><BsGithub /> Sok's GitHub</Card.Link>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
  );
}

export default CreatorCards;
