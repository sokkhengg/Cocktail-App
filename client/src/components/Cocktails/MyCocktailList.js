import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CocktailCard from "./CocktailCard"

function MyCocktailList({ currentUser }) {

  const [myCocktails, setMyCocktails] = useState([])

  useEffect(() => {
    //fetch(`http://127.0.0.1:3000/my-custom-cocktails/?id=${currentUser.id}`)
    fetch(`http://127.0.0.1:3000/my-custom-cocktails/?id=1`) //hardcoded for testing!!!!!
    .then(r => r.json())
    .then(r => setMyCocktails(r));
  }, []);
  


  return (
    <div>
        <Container>
        <Row
          xs={1}
          md={3}
          className="g-4"
          className="d-flex justify-content-center"
        >
            {myCocktails ? myCocktails.map((cock) => (
              <CocktailCard key={cock.id} cocktail={cock} />
            )) : null}
          </Row>
          </Container>
      </div>
  );
}

export default MyCocktailList;
