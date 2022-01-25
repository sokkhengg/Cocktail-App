import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Cocktail.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CocktailCard({ cocktail, currentUser }) {
  const [currentUserIngredients, setCurrentUserIngredients] = useState([]);

  const {
    name,
    instructions,
    alcoholic,
    category,
    image,
    glass,
    iba,
    ingredient_1_name,
    ingredient_2_name,
    ingredient_3_name,
    ingredient_4_name,
    ingredient_5_name,
    ingredient_6_name,
    ingredient_1_id,
    ingredient_2_id,
    ingredient_3_id,
    ingredient_4_id,
    ingredient_5_id,
    ingredient_6_id,
    measure_1,
    measure_2,
    measure_3,
    measure_4,
    measure_5,
    measure_6,
  } = cocktail;

  // const { id } = useParams();

  useEffect(() => {
    // fetch(`http://localhost:3000/user_ingredients/${currentUser.id}`)
    fetch(`http://localhost:3000/user_ingredients/1`) //hardcoded for ease of testing! replace with your user_id
      .then((r) => r.json())
      .then((r) => setCurrentUserIngredients(r));
  }, []);

  function handleLikeClick(e) {

    const cocktailLiked = {
      cocktail_id: e.target.attributes[2].value,
      user_id: 1,
      like: true
    }

    fetch(`/user_cocktails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cocktailLiked),
    }).then((r) => {
      if (r.ok) {
        r.json().then((success) => {
          console.log(success);
          //setSuccessMessage(success);
        });
      } else {
        //r.json().then((err) => setErrorNewCocktail(err));
      }
    });
  }

  const found1 = currentUserIngredients.find(
    (i) => i.ingredient.name === ingredient_1_name
  );
  const found2 = currentUserIngredients.find(
    (i) => i.ingredient.name === ingredient_2_name
  );
  const found3 = currentUserIngredients.find(
    (i) => i.ingredient.name === ingredient_3_name
  );
  const found4 = currentUserIngredients.find(
    (i) => i.ingredient.name === ingredient_4_name
  );
  const found5 = currentUserIngredients.find(
    (i) => i.ingredient.name === ingredient_5_name
  );
  const found6 = currentUserIngredients.find(
    (i) => i.ingredient.name === ingredient_6_name
  );

  return (
    <>
      <Card border="secondary" style={{ width: "18rem", margin: "10px" }}>
        <Link to={cocktail ? `/cocktails/${cocktail.id}` : null}>
          <Card.Img
            className="card-image-top"
            variant="top"
            style={{ width: "109.5%" }}
            src="https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg"
          />
        </Link>
        <br></br>
        <div className="border"></div>
        <Card.Body>
          <Card.Title>
            {name} <span className="alcoholic">{alcoholic}</span>
          </Card.Title>
          <div className="border"></div>
          <Card.Text>
            <ul>
              {ingredient_1_id ? (
                <li>
                  {measure_1} {ingredient_1_name}{" "}
                  {found1 ? (
                    <span className="have">✅</span>
                  ) : (
                    <span className="need">Need</span>
                  )}
                </li>
              ) : null}
              {ingredient_2_id ? (
                <li>
                  {measure_2} {ingredient_2_name}{" "}
                  {found2 ? (
                    <span className="have">✅</span>
                  ) : (
                    <span className="need">Need</span>
                  )}
                </li>
              ) : null}
              {ingredient_3_id ? (
                <li>
                  {measure_3} {ingredient_3_name}{" "}
                  {found3 ? (
                    <span className="have">✅</span>
                  ) : (
                    <span className="need">Need</span>
                  )}
                </li>
              ) : null}
              {ingredient_4_id ? (
                <li>
                  {measure_4} {ingredient_4_name}{" "}
                  {found4 ? (
                    <span className="have">✅</span>
                  ) : (
                    <span className="need">Need</span>
                  )}
                </li>
              ) : null}
              {ingredient_5_id ? (
                <li>
                  {measure_6} {ingredient_5_name}{" "}
                  {found5 ? (
                    <span className="have">✅</span>
                  ) : (
                    <span className="need">Need</span>
                  )}
                </li>
              ) : null}
              {ingredient_6_id ? (
                <li>
                  {measure_6} {ingredient_6_name}{" "}
                  {found6 ? (
                    <span className="have">✅</span>
                  ) : (
                    <span className="need">Need</span>
                  )}
                </li>
              ) : null}
            </ul>
          </Card.Text>
          <Link
            className="make"
            to={cocktail ? `/cocktails/${cocktail.id}` : null}
          >
            <Button variant="success">Make a {name}</Button>
          </Link>
          <br />
          <br />
          {/* {currentUser.username ? (
            <Button
              data-cocktail-id={cocktail.id}
              onClick={(e) => handleLikeClick(e)}
            >
              Like
            </Button>
          ) : null} */}
        </Card.Body>
      </Card>
    </>
  );
}

export default CocktailCard;
