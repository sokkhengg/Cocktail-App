import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import "./Cocktail.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiMinusCircle } from "react-icons/fi";

// might have an option for user to leave their review

function CocktailCard({ cocktail, currentUser, liked, setLikedAction, likedAction }) {
  // const [deleteCocktail, setDeleteCocktail] = useState([]);
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
     fetch(`http://localhost:3000/user_ingredients/${currentUser}`)
      .then((r) => r.json())
      .then((r) => setCurrentUserIngredients(r));
  }, []);

  function handleLikeClick(cocktail, liked) { 
    const cocktailLiked = {
      cocktail_id: cocktail.id,
      user_id: 1,
      like: !liked
    };
    fetch(`/user_cocktails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cocktailLiked),
    })
    setLikedAction(!likedAction)
  }

//   // maybe we use the post method that why it does not disappear right the way
//   function handleHiddenClick(cocktail) {
  function handleHiddenClick(cocktail, liked) {
    console.log(liked)
    const cocktailHidden = {
      cocktail_id: cocktail.id,
      user_id: currentUser.id
    };
    alert('This will hide your drink');
    console.log(cocktailHidden)

  fetch(`/hidden_cocktails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cocktailHidden),
  }).then((r) => {
    if (r.ok) {
      r.json().then((success) => {
        console.log(success);
        //setHiddenCocktail(hiddenCocktail);
      });
    } else {
      r.json().then((err) => console.log(err));
    }
  });
}

  // function handleDeleteUserCocktailList(e) {
  //   // need to get the right id
  //   const CocktailToDelete = e.target.attributes[0].value;
  //   fetch(`http://localhost:3000/cocktails/${CocktailToDelete}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then((r) => {
  //       console.log(r);
  //       setDeleteCocktail(!deleteCocktail);
  //     });
  // }

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
      <Card style={{ width: "19rem", margin: "12px", marginBottom: "25px" }}>
        
          <Link to={cocktail ? `/cocktails/${cocktail.id}` : null}>
            <Card.Img
              className="card-image-top"
              variant="top"
              style={{ width: "109.5%", borderRadius: "50%", padding: "15px" }}
              src="https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg"
            />
          </Link>
          <div
            class="overlay"
            data-liked={liked}
            data-cid={cocktail}
            onClick={() => handleLikeClick(cocktail, liked)}
          >
            {liked ? "♥" : "♡"} 
          </div>

          {/* hidden button */}
          <div
            class="hidden"
            onClick={() => handleHiddenClick(cocktail)}
          >
            <FiMinusCircle className='minus'/>
          </div>
        
        {/* <br></br>
        <div className="border"></div> */}
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Card.Title className="text-center">
              {name} <br />
              <span className="alcoholic">{alcoholic}</span>
            </Card.Title>
            <div className="border"></div>
            <Card.Text>
              <ul className='card-list'>
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
          </div>

          <div>
            <Card.Footer style={{ backgroundColor: "#fff" }}>
              <Row>
                <Col></Col>
                <Col xs={12} className="text-center">
                  <Link
                    className="make"
                    to={cocktail ? `/cocktails/${cocktail.id}` : null}
                  >
                    <Button
                      variant="success"
                      id="make-button"
                      className="text-center"
                    >
                      Make the {name}
                    </Button>
                  </Link>
                </Col>
                <Col></Col>
              </Row>
            </Card.Footer>
          </div>
        </Card.Body>
        {/* testing a delete button */}

        {/* <Button
        
          variant="outline-danger"
          size="sm"
          // get the that we wanted to deleted
          data-cocktail-id={cocktail.id}
          onClick={(e) => handleDeleteUserCocktailList(e)}
        >
          🗑️
        </Button> */}
      </Card>
    </>
  );
}

export default CocktailCard;
