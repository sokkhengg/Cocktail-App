import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddNewIngredient({ ingredients, currentUser }) {

    const [ingredientToAdd, setIngredientToAdd] = useState("");
    const [addedIngredient, setAddedIngredient] = useState("");

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
    console.log(ingredientToAdd)

    const user_id = currentUser.id
    const ingredient_id = ingredientToAdd.value

    const newUserIngredient = {"user_id": user_id, "ingredient_id": ingredient_id}

    fetch(`http://localhost:3000/user_ingredients/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserIngredient)
    }).then(r => r.json()).then(r => {
        console.log(r)
        setAddedIngredient(r)
    })
  }

  function handleSelectChange(e) {
    setIngredientToAdd(e)
  }

  return (
    <div>
           <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
          <Form onSubmit={e => handleSubmitUserIngredients(e)}>
        <Select options={ingredients_array} onChange={e => handleSelectChange(e)} />
        <Button variant="primary" type="submit">
          I Have It!
        </Button>
      </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      {addedIngredient ? <p>You added {addedIngredient.name}</p> : null}
   
    </div>
  );
}

export default AddNewIngredient;
