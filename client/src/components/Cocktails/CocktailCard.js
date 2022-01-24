import React from "react";
import './Cocktail.css';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

function CocktailCard({cocktail}) {

  // const path = {cocktails ? `/cocktails/${id}` :null};


  const { id, name, instructions, alcoholic, category, image, glass, iba, ingredient_1_name,
    ingredient_2_name, ingredient_3_name, ingredient_4_name, ingredient_5_name,
    ingredient_6_name, ingredient_1_id, ingredient_2_id, ingredient_3_id, ingredient_4_id,
    ingredient_5_id, ingredient_6_id, measure_1, measure_2, measure_3, measure_4,
    measure_5, measure_6 } = cocktail


  return (
    <>
      <Card border="secondary" style={{  width: "18rem", margin: "10px" }} >
      <Link to={cocktail ? `/cocktails/${id}` :null} ><Card.Img className="card-image-top" variant="top" style={{width: "109.5%"}} src="https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg" /></Link>
        <Card.Body>
          <Card.Title>{name} <span className='alcoholic'>{alcoholic}</span></Card.Title>
          <Card.Text>
            {instructions}
          </Card.Text>
          <Link to={cocktail ? `/cocktails/${id}` :null} >Make a {name}</Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default CocktailCard;
