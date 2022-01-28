import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CocktailCard from "./CocktailCard";
import "./Cocktail.css";

// https://www.npmjs.com/package/react-spinners
import PulseLoader from "react-spinners/PulseLoader";

function MyCocktailList({ currentUser }) {
  const [myCocktails, setMyCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedAction, setLikedAction] = useState(false);
  const [likedCocktails, setLikedCocktails] = useState([]);

  useEffect(() => {
    fetch(`/my-custom-cocktails/?id=1`)
      .then((r) => r.json())
      .then((r) => {
        setMyCocktails(r);
        setLoading(false);
      });
  }, []);

    //getting likes, reviews, made status
    useEffect(() => {
      fetch(`/user_cocktails/1`)
        .then((r) => r.json())
        .then((r) => setLikedCocktails(r));
    }, [likedAction]);
  
    // create an array of the liked cocktail's ids
    const likedCocktailsIdArray = [];
    likedCocktails.map((c) => {
      likedCocktailsIdArray.push(c.cocktail.id);
    });
    console.log(likedCocktailsIdArray)
    console.log(myCocktails)

  return (
    <div>
      {loading ? (
        <Container className="fill">
          <Row>
            <Col></Col>
            <Col className="text-center">
            <PulseLoader color={"#d3a526"} loading={loading} size={50} />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      ) : (
        <>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>
                You can make {myCocktails.length} cocktails! 🥂
              </Card.Title>
            </Card.Body>
          </Card>

          <Container>
            <Row
              xs={1}
              md={3}
              //className="g-4"
              className="d-flex justify-content-center"
            >



{myCocktails
            ? myCocktails.map((cock) => {
                if (likedCocktailsIdArray.includes(cock.id))
                  return (
                    <CocktailCard
                      key={cock.id}
                      cocktail={cock}
                      currentUser={currentUser}
                      liked={true}
                      setLikedAction={setLikedAction}
                      likedAction={likedAction}
                    />
                  )
                else
                  return (
                    
                    <CocktailCard
                      key={cock.id}
                      cocktail={cock}
                      currentUser={currentUser}
                      liked={false}
                      setLikedAction={setLikedAction}
                      likedAction={likedAction}
                    />
                  );
              })
            : null}





              {myCocktails
                ? myCocktails.map((cock) => (
                    <CocktailCard key={cock.id} cocktail={cock} currentUser={currentUser} liked={true}likedAction={likedAction} setLikedAction={setLikedAction} />
                  ))
                : null}
            </Row>
          </Container>
        </>
      )}
    </div>
  );
}

export default MyCocktailList;
