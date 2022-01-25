import { useState } from "react";
// import './Form.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";

// refactor and styling using boostrap
function CocktailForm({ ingredients }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorNewCocktail, setErrorNewCocktail] = useState("");

  const [ingredient1, setIngredient1] = useState("");
  const [ingredient1Id, setIngredient1Id] = useState("");

  const [ingredient2, setIngredient2] = useState("");
  const [ingredient2Id, setIngredient2Id] = useState("");

  const [ingredient3, setIngredient3] = useState("");
  const [ingredient3Id, setIngredient3Id] = useState("");

  const [ingredient4, setIngredient4] = useState("");
  const [ingredient4Id, setIngredient4Id] = useState("");

  const [ingredient5, setIngredient5] = useState("");
  const [ingredient5Id, setIngredient5Id] = useState("");

  const [ingredient6, setIngredient6] = useState("");
  const [ingredient6Id, setIngredient6Id] = useState("");

  //FIX THIS SEAN, YAH BUM
  const newKeys = { id: "value", name: "label" };
  const ingredients_array = [];
  for (let i = 0; i < ingredients.length; i++) {
    const obj = ingredients[i];
    //console.log(i)
    const renamedObj = renameKeys(obj, newKeys);
    ingredients_array.push(renamedObj);
  }

  //console.log(ingredients_array)
  function renameKeys(obj, newKeys) {
    const keyValues = Object.keys(obj).map((key) => {
      const newKey = newKeys[key] || key;
      return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
  }

  function handleCocktailSubmit(e) {
    e.preventDefault();
    console.log(e);

    const cocktail_object = {
      name: e.target[0].value,
      category: e.target[1].value,
      image: e.target[2].value,
      glass: e.target[3].value,
      instructions: e.target[4].value,
      ingredient_1_name: ingredient1,
      ingredient_1_id: ingredient1Id,
      measure_1: e.target[6].value,
      ingredient_2_name: ingredient2,
      ingredient_2_id: ingredient2Id,
      measure_2: e.target[8].value,
      ingredient_3_name: ingredient3,
      ingredient_3_id: ingredient3Id,
      measure_3: e.target[10].value,
      ingredient_4_name: ingredient4,
      ingredient_4_id: ingredient4Id,
      measure_4: e.target[12].value,
      ingredient_5_name: ingredient5,
      ingredient_5_id: ingredient5Id,
      measure_5: e.target[14].value,
      ingredient_6_name: ingredient6,
      ingredient_6_id: ingredient6Id,
      measure_6: e.target[16].value,
    };

    console.log(cocktail_object);

    fetch("http://localhost:3000/cocktails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cocktail_object),
    }).then((r) => {
      if (r.ok) {
        r.json().then((success) => {
          console.log(success);
          setSuccessMessage(success);
        });
      } else {
        r.json().then((err) => setErrorNewCocktail(err));
      }
    });
  }

  function handleIngredient1(e) {
    console.log(e);
    setIngredient1(e.label);
    setIngredient1Id(e.value);
  }
  function handleIngredient2(e) {
    console.log(e);
    setIngredient2(e.label);
    setIngredient2Id(e.value);
  }
  function handleIngredient3(e) {
    console.log(e);
    setIngredient3(e.label);
    setIngredient3Id(e.value);
  }
  function handleIngredient4(e) {
    console.log(e);
    setIngredient4(e.label);
    setIngredient4Id(e.value);
  }
  function handleIngredient5(e) {
    console.log(e);
    setIngredient5(e.label);
    setIngredient5Id(e.value);
  }
  function handleIngredient6(e) {
    console.log(e);
    setIngredient6(e.label);
    setIngredient6Id(e.value);
  }

  // style using react bootstrap
  return (
    <>
      <Container>
        

       
            {/* make the button prettier */}
            {successMessage ?
              <>
                <Link to={`/cocktails/${successMessage}`}>
                  <Button onClick={() => setSuccessMessage("")}>
                    Check out your cocktail!
                  </Button>
                </Link>
                <br/>
                <br/>
                <Button onClick={() => setSuccessMessage("")}>
                  Add another cocktail!
                </Button>
              </>
             : 
             <Form onSubmit={handleCocktailSubmit}>
          <h4>Add a New Cocktail</h4>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Cocktail Name:</Form.Label>
              <Form.Control type="text" placeholder="Cocktail Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Image URL:</Form.Label>
              <Form.Control type="text" placeholder="Image URL" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Glass Type:</Form.Label>
              <Form.Control type="text" placeholder="Glass Type" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Instructions:</Form.Label>
              <Form.Control type="text" placeholder="Instructions" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Cocktail Name:</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose Category...</option>
                <option value="Beer">Beer</option>
                <option value="Cocktail">Cocktail</option>
                <option value="Cocoa">Cocoa</option>
                <option value="Coffee / Tea">Coffee / Tea</option>
                <option value="Homemade Liqueur">Homemade Liqueur</option>
                <option value="Milk / Float / Shake">
                  Milk / Float / Shake
                </option>
                <option value="Ordinary Drink">Ordinary Drink</option>
                <option value="Other">Other</option>
                <option value="Punch / Party Drink">Punch / Party Drink</option>
                <option value="Shot">Shot</option>
                <option value="Soft Drink / Soda">Soft Drink / Soda</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Ingredients 1:</Form.Label>
              <Select
                options={ingredients_array}
                onChange={(e) => handleIngredient1(e)}
              />
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control type="text" placeholder="measure...1" />
              </Form.Group>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Ingredients 2:</Form.Label>
              <Select
                options={ingredients_array}
                onChange={(e) => handleIngredient2(e)}
              />
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control type="text" placeholder="measure...2" />
              </Form.Group>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Ingredients 3:</Form.Label>
              <Select
                options={ingredients_array}
                onChange={(e) => handleIngredient3(e)}
              />

              <Form.Group as={Col} controlId="formGridName">
                <Form.Control type="text" placeholder="measure...3" />
              </Form.Group>
            </Form.Group>
          </Row>

{/* ingredient second row */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Ingredients 4:</Form.Label>
              <Select
                  options={ingredients_array}
                  onChange={(e) => handleIngredient4(e)}
                />

<Form.Group as={Col} controlId="formGridName">
                <Form.Control type="text" placeholder="measure...4" />
              </Form.Group>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Ingredients 5:</Form.Label>
              <Select
                  options={ingredients_array}
                  onChange={(e) => handleIngredient5(e)}
                />

<Form.Group as={Col} controlId="formGridName">
                <Form.Control type="text" placeholder="measure...5" />
              </Form.Group>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Ingredients 6:</Form.Label>
              
              <Select
                  options={ingredients_array}
                  onChange={(e) => handleIngredient6(e)}
                />

<Form.Group as={Col} controlId="formGridName">
                <Form.Control type="text" placeholder="measure...6" />
              </Form.Group>
            </Form.Group>
          </Row>

 {/* <Row> */}
          <Col></Col>
          <Col xs="auto" >
          <Button variant="primary" type="submit">
                  Add Cocktail
                </Button> 
                
          </Col>
          <Col></Col>
        {/* </Row> */}

        </Form>
                
             }

      </Container>
    </>
  );
}

export default CocktailForm;
