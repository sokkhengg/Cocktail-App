import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";

function CocktailDetail({}) {

    const [cocktail, setCocktail] = useState([]);
    const [currentUserIngredients, setCurrentUserIngredients] = useState([]);

    const { id } = useParams();

    useEffect(() => {
      fetch(`http://localhost:3000/cocktails/${id}`)
        .then((r) => r.json())
        .then((cocktail) => {
            setCocktail(cocktail);
        });
    }, []);

    console.log(cocktail)

    const { name, instructions, alcoholic, category, image, glass, iba, ingredient_1_name,
        ingredient_2_name, ingredient_3_name, ingredient_4_name, ingredient_5_name,
        ingredient_6_name, ingredient_1_id, ingredient_2_id, ingredient_3_id, ingredient_4_id,
        ingredient_5_id, ingredient_6_id, measure_1, measure_2, measure_3, measure_4,
        measure_5, measure_6 } = cocktail

      // Grabs the current users's ingredients,
      // checks each ingredient (individually) in this cocktail against those,
      // if the user has that ingredient the ternary(ln50) displays a ✅ emoji

        useEffect(() => {
          // fetch(`http://localhost:3000/user_ingredients/${currentUser.id}`)
          fetch(`http://localhost:3000/user_ingredients/1`) //hardcoded for ease of testing! replace with your user_id
            .then((r) => r.json())
            .then((r) => setCurrentUserIngredients(r));
        }, []);

        const found1 = currentUserIngredients.find(i => i.ingredient.name === ingredient_1_name)
        const found2 = currentUserIngredients.find(i => i.ingredient.name === ingredient_2_name)
        const found3 = currentUserIngredients.find(i => i.ingredient.name === ingredient_3_name)
        const found4 = currentUserIngredients.find(i => i.ingredient.name === ingredient_4_name)
        const found5 = currentUserIngredients.find(i => i.ingredient.name === ingredient_5_name)
        const found6 = currentUserIngredients.find(i => i.ingredient.name === ingredient_6_name)

        // const found1 = true //remove this line when testing!

  return (
    <div className='detail-container'>
<Container>
<Row>
    <Col></Col>
    <Col>

    <div class="container">
        <img className="cocktail-image" src="https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg" alt={name}/>

        <div
            class="overlay"
            onClick={() => console.log("clicked", { cocktail })}
          >
            ♡
          </div>
        </div>

        
        

          <h1>{name} <br />
          
          <span className='alcoholic'>{alcoholic}</span></h1>
          <div className="border"></div>
          <br />
          <h6>Category: {category}</h6>
          
          {iba? <p>IBA: {iba}</p> : null}
          {glass? <p>Glass: {glass}</p> : null}
          <div className="border"></div>
          <div className='instructions'>
            <br />
            <h6>Ingredients:</h6>
            <ul className='ingredient-list'>
                  {ingredient_1_id ? <li>{measure_1} {ingredient_1_name} {found1 ? <span className='have'>✅</span> : <span className='need'>Need</span>}</li> : null}
                  {ingredient_2_id ? <li>{measure_2} {ingredient_2_name} {found2 ? <span className='have'>✅</span> : <span className='need'>Need</span>}</li> : null}
                  {ingredient_3_id ? <li>{measure_3} {ingredient_3_name} {found3 ? <span className='have'>✅</span> : <span className='need'>Need</span>}</li> : null}
                  {ingredient_4_id ? <li>{measure_4} {ingredient_4_name} {found4 ? <span className='have'>✅</span> : <span className='need'>Need</span>}</li> : null}
                  {ingredient_5_id ? <li>{measure_6} {ingredient_5_name} {found5 ? <span className='have'>✅</span> : <span className='need'>Need</span>}</li> : null}
                  {ingredient_6_id ? <li>{measure_6} {ingredient_6_name} {found6 ? <span className='have'>✅</span> : <span className='need'>Need</span>}</li> : null}
              </ul>
            <p>{instructions}</p>
          </div>
          </Col>
    <Col></Col>
  </Row>
  </Container>
    </div>
  );
}

export default CocktailDetail;