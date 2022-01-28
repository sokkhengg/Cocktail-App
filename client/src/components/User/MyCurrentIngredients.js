import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "./User.css";

function MyCurrentIngredients({
  currentUser,
  currentIngredients,
  setCurrentIngredients,
  ingredientsUpdated,
  setIngredientsUpdated,
}) {

  useEffect(() => {
    console.log(currentUser.id)
      fetch(`http://localhost:3000/user_ingredients/${currentUser.id}`)
      .then((r) => r.json())
      .then((r) => setCurrentIngredients(r));
  }, [ingredientsUpdated]);


  function handleDeleteUserIngredient(e) {
    console.log(e)
    const ingredientToDelete = e.target.attributes[1].value;
    console.log(ingredientToDelete)
    fetch(`http://localhost:3000/user_ingredients/${ingredientToDelete}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        setIngredientsUpdated(!ingredientsUpdated);
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
          <ListGroup as="ul" variant="flush">
            {currentIngredients.length > 0
              ? currentIngredients.filter(i => i.ingredient.id !== 289 ).map((ingredient) => {
                  return (
                    <>
                      <ListGroup.Item
                        key={ingredient.ingredient.id}
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">
                            {ingredient.ingredient.name}
                          </div>
                        </div>
                        <Button id='trash'
                          variant="outline-light"
                          
                          size="sm"
                          data-useringredient-id={ingredient.id}
                          onClick={(e) => handleDeleteUserIngredient(e)}
                        >
                          🗑️
                        </Button>
                      </ListGroup.Item>
                    </>
                  );
                })
              : "You don't have any ingredients"}
          </ListGroup>
        </Row>
      </Container>
    </>
  );
}

export default MyCurrentIngredients;
