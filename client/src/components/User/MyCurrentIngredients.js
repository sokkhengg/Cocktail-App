import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function MyCurrentIngredients({ currentUser }) {
  const [currentIngredients, setCurrentIngredients] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost:3000/user_ingredients/${currentUser.id}`) 
    fetch(`http://localhost:3000/user_ingredients/1`) //hardcoded for ease of testing! replace with your user_id
      .then((r) => r.json())
      .then((r) => setCurrentIngredients(r));
  }, []);

  function handleDeleteUserIngredient(e) {
    const ingredientToDelete = e.target.attributes[0].value;
    fetch(`http://localhost:3000/user_ingredients/${ingredientToDelete}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((r) => {
          console.log(r)
        // add code to delete from frontend too...
    });
  }

  return (
    <>
      <Container>
        <Row
          xs={1}
          md={2}
          className="g-4"
          className="d-flex justify-content-center"
        >
          {currentIngredients.length > 0
            ? currentIngredients.map((ingredient) => {
                return (
                  <Card
                    style={{ width: "18rem", margin: "10px" }}
                    key={ingredient.ingredient.name}
                  >
                    <Card.Body>
                      <Row>
                        <Col md="auto">
                          <Card.Title>{ingredient.ingredient.name}</Card.Title>
                        </Col>
                        <Col>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            data-useringredient-id={ingredient.id}
                            onClick={(e) => handleDeleteUserIngredient(e)}
                          >
                            x
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                );
              })
            : "You don't have any ingredients"}
        </Row>
      </Container>
    </>
  );
}

export default MyCurrentIngredients;
