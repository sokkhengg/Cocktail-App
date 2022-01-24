import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CocktailCard from "./CocktailCard"

function CocktailList({cocktails}) {
  return (
    <>

    {/* <Row>
    <Col></Col>
    <Col xs={12}> */}
    <Container>
        <Row
          xs={1}
          md={3}
          className="g-4"
          className="d-flex justify-content-center"
        >
            {cocktails ? cocktails.map((cock) => (
              <CocktailCard key={cock.id} cocktail={cock} />
            )) : null}
          </Row>
          </Container>
          {/* </Col>
    <Col></Col> */}
  {/* </Row> */}
  
        
      </>
  );
}

export default CocktailList;