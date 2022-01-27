import React, { useState } from "react";
import AddNewIngredient from "./AddNewIngredient";
import MyCurrentIngredients from "./MyCurrentIngredients";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyLiquorCabinet({ ingredients, currentUser }) {

  const [ingredientsUpdated, setIngredientsUpdated] = useState(false)
  const [currentIngredients, setCurrentIngredients] = useState([]);



  return (
    <div>
      <br />
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10} className="text-center">
            <h3>
              Add/delete what you have in your liquor cabinet, fridge, and
              pantry.
            </h3>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <br />

      <AddNewIngredient ingredients={ingredients} currentUser={currentUser} ingredientsUpdated={ingredientsUpdated} setIngredientsUpdated={setIngredientsUpdated} />
      <br />
      <MyCurrentIngredients currentUser={currentUser} currentIngredients={currentIngredients} setCurrentIngredients={setCurrentIngredients} ingredientsUpdated={ingredientsUpdated} setIngredientsUpdated={setIngredientsUpdated} />
    </div>
  );
}

export default MyLiquorCabinet;
