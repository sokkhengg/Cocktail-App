import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AddNewIngredient({ ingredients, currentUser, ingredientsUpdated, setIngredientsUpdated }) {
  const [ingredientToAdd, setIngredientToAdd] = useState("");
  const [addedIngredient, setAddedIngredient] = useState("");
  const [duplicatedIngredientError, setDuplicatedIngredientError] = useState("")

  const newKeys = { id: "value", name: "label" };
  const ingredients_array = [];
  for (let i = 0; i < ingredients.length; i++) {
    const obj = ingredients[i];
    const renamedObj = renameKeys(obj, newKeys);
    ingredients_array.push(renamedObj);
  }
  function renameKeys(obj, newKeys) {
    const keyValues = Object.keys(obj).map((key) => {
      const newKey = newKeys[key] || key;
      return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
  }

  function handleSubmitUserIngredients(e) {
    e.preventDefault();

    const newUserIngredient = {
      user_id: currentUser.id,
      ingredient_id: ingredientToAdd.value,
    };

    fetch(`http://localhost:3000/user_ingredients/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserIngredient),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((ingredient) => {
            setIngredientsUpdated(!ingredientsUpdated)
            setAddedIngredient(ingredient);
            setTimeout(() => {setAddedIngredient("")}, 3000);
            });
        } else {
          r.json().then((err) => {
            setDuplicatedIngredientError(err)
            setTimeout(() => {setDuplicatedIngredientError("")}, 3000); //deletes the error message after 3 seconds
          });
        }
      });
  }

  function handleSelectChange(e) {
    setIngredientToAdd(e);
  }

  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form onSubmit={(e) => handleSubmitUserIngredients(e)} className="text-center">
              <Row>
                <Col xs={10}>
                  <Select
                    options={ingredients_array}
                    onChange={(e) => handleSelectChange(e)}
                  />
                </Col>
                <Col>
                  <Button variant="primary" type="submit">
                    Add
                  </Button>
                </Col>
                <Col>
                <br />
                {addedIngredient ? <p>🎉 &nbsp;&nbsp;Added {addedIngredient.name}!</p> : null}
                {duplicatedIngredientError ? <p>You already added that!</p> : null}
                </Col>
              </Row>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      
    </div>
  );
}

export default AddNewIngredient;