import { useState } from 'react';
// import './Form.css';
import React, { Component } from 'react'
import Select from 'react-select'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';

// refactor and styling using boostrap
function CocktailForm({ ingredients }) {

  const [newCocktail, setNewCocktail] = useState([]);
  const [errorNewCocktail, setErrorNewCocktail] = useState('')

  
  //FIX THIS SEAN, YAH BUM
  const newKeys = { id: "value", name: "label" };
  const ingredients_array =[] 
  for (let i = 0; i < ingredients.length; i++) {
    const obj = ingredients[i]
    //console.log(i)
    const renamedObj = renameKeys(obj, newKeys);
    ingredients_array.push(renamedObj)
  }

  //console.log(ingredients_array)
  function renameKeys(obj, newKeys) {
    const keyValues = Object.keys(obj).map(key => {
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
      iba: e.target[3].value,
      glass: e.target[4].value,
      instructions: e.target[5].value,
    };

    fetch('http://localhost:3000/cocktails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cocktail_object),
    }).then((r) => {
      if (r.ok) {
        r.json().then(newCocktail => setNewCocktail(newCocktail));
      } else {
        r.json().then(err => setErrorNewCocktail(err));
      }
    });
  }

  // style using react bootstrap
  return (
    <>
      <Container>
      <Row>
          <Col></Col>
          <Col xs={6}>

    {/* <div className='form'> */}
      {/* <section> */}
        <Form onSubmit={handleCocktailSubmit}>
          <h4>Add a New Cocktail</h4>

          <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Cocktail Name:</Form.Label>
                <Form.Control type="text" placeholder="Cocktail Name" />
              </Form.Group>
          {/* <label htmlFor="name">Cocktail Name: </label>
          <input
            required
            placeholder="Cocktail Name"
            type="text"
            title="name"
          /> */}


          {/* <label htmlFor="category">Category: </label> */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Category:</Form.Label>
                <Form.Control type="text" placeholder="Category" />
              </Form.Group>

              <Form.Select aria-label="Default select example">
  <option>Please Choose...</option>
            <option value="Beer">Beer</option>
            <option value="Cocktail">Cocktail</option>
            <option value="Cocoa">Cocoa</option>
            <option value="Coffee / Tea">Coffee / Tea</option>
            <option value="Homemade Liqueur">Homemade Liqueur</option>
            <option value="Milk / Float / Shake">Milk / Float / Shake</option>
            <option value="Ordinary Drink">Ordinary Drink</option>
            <option value="Other">Other</option>
            <option value="Punch / Party Drink">Punch / Party Drink</option>
            <option value="Shot">Shot</option>
            <option value="Soft Drink / Soda">Soft Drink / Soda</option>
</Form.Select>

          {/* <select
            required
            name="category"
            placeholder="Category"
          >
            <option value="" disabled selected hidden>
              Please Choose...
            </option>
            <option value="Beer">Beer</option>
            <option value="Cocktail">Cocktail</option>
            <option value="Cocoa">Cocoa</option>
            <option value="Coffee / Tea">Coffee / Tea</option>
            <option value="Homemade Liqueur">Homemade Liqueur</option>
            <option value="Milk / Float / Shake">Milk / Float / Shake</option>
            <option value="Ordinary Drink">Ordinary Drink</option>
            <option value="Other">Other</option>
            <option value="Punch / Party Drink">Punch / Party Drink</option>
            <option value="Shot">Shot</option>
            <option value="Soft Drink / Soda">Soft Drink / Soda</option>
          </select> */}

          {/* <label htmlFor="image">Image URL: </label>
          <input
            required
            placeholder="Image URL"
            type="text"
            title="image"
          /> */}
<br/>
<Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image URL:</Form.Label>
                <Form.Control type="text" placeholder="Image URL" />
              </Form.Group>

          {/* <label htmlFor="iba">IBA: </label>
          <input
            required
            placeholder="IBA"
            type="text"
            title="iba"
          /> */}

<Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>IBA:</Form.Label>
                <Form.Control type="text" placeholder="IBA" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Glass Type:</Form.Label>
                <Form.Control type="text" placeholder="Glass Type" />
              </Form.Group>
          {/* <label htmlFor="glass">Glass Type: </label>
          <input
            required
            placeholder="Glasstype"
            type="text"
            title="glass"
          /> */}

<Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Instructions:</Form.Label>
                <Form.Control type="text" placeholder="Instructions" />
              </Form.Group>
          {/* <label htmlFor="instructions">Instructions: </label>
          <textarea
            rows="5"
            cols="50"
            required
            placeholder="Instructions"
            type="text"
          /> */}

          <Form.Label>Ingredients:</Form.Label>
          <Select options={ingredients_array} />

          <label htmlFor="measure_1"></label>
          <input
           rows="5"
            required
            placeholder="measure..."
            type="text"
            title="measure_1"
          />

          <Select options={ingredients_array} />

          <label htmlFor="measure_2"></label>
          <input
            required
            placeholder="measure..."
            type="text"
            title="measure_2"
          />

          <Select options={ingredients_array} />

          <label htmlFor="measure_3"></label>
          <input
            required
            placeholder="measure..."
            type="text"
            title="measure_3"
          />

          <Select options={ingredients_array} />

          <label htmlFor="measure_4"></label>
          <input
            required
            placeholder="measure..."
            type="text"
            title="measure_4"
          />

          <Select options={ingredients_array} />

          <label htmlFor="measure_5"></label>
          <input
            required
            placeholder="measure..."
            type="text"
            title="measure_5"
          />

          <Select options={ingredients_array} />

          <label htmlFor="measure_6"></label>
          <input
            required
            placeholder="measure..."
            type="text"
            title="measure_6"
          />
<br/>
<Button variant="primary" type="submit">
Add Cocktail
              </Button>
          {/* <button>Add Cocktail</button> */}
        </Form>
      {/* </section> */}
    {/* </div> */}
    </Col>

          <Col></Col>
    </Row>
    </Container>

    </>

  );
}

export default CocktailForm;
