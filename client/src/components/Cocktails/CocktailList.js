import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CocktailCard from "./CocktailCard"

function CocktailList({cocktails}) {
  return (
    <div>
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
      </div>
  );
}

export default CocktailList;