import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from 'react';
import CocktailCard from "./CocktailCard"

// THIS DOESN'T WORK YET
function MyCocktailList() {

const [myCocktails, setMyCocktails] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/user_cocktails`)
      .then((r) => r.json())
      .then((myCocktails) => setMyCocktails(myCocktails));
  }, []);

const cocktails  = myCocktails.cocktail

console.log(cocktails)

  return (
    <div>
      <Container>
        <Row
          xs={1}
          md={3}
          className="g-4"
          className="d-flex justify-content-center"
        >
          
            {myCocktails ? cocktails.map((cock) => (
              <CocktailCard key={cock.id} cocktail={cock} />
            )) : null}
          </Row>
          </Container>
    </div>
  );
}

export default MyCocktailList;

