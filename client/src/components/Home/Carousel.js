import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import { Link } from "react-router-dom";
import CreatorCards from './CreatorCards';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function CocktailCarousel() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cocktails-random')
      .then((res) => res.json())
      .then((data) => setCocktails(data));
  }, []);

  console.log(cocktails);

  return (
    
    <section >

  




<Container>
  <Row>&nbsp;</Row>
  <Row>&nbsp;</Row>
  <Row>
    <Col> <Carousel className="carousel">
        {cocktails.map((cock) => {
          return (
            
            <Carousel.Item interval={2500}>
              {/* <Link to={cock ? `/cocktails/${cock.id}` : null}> */}
              <img
                className='image'
                src="https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg"
                // src={cock.image}
                alt={cock.name}
              />
              <Carousel.Caption >
                <h3 className='caption'>{cock.name}</h3>
              </Carousel.Caption>
              {/* </Link> */}
            </Carousel.Item>
            
          );
        })}
      </Carousel></Col>
  
    <Col>
    <div className="text-center">
    <img src="logo192.png" alt="logo" height="50px" id="form-logo" />
    </div>
      <h1 className='home-header'>Welcome to Cocktailor</h1>
      <h4 className='home-header'>Cocktail recipes tailor-made for what you have on hand!</h4>

      <div>
        <ul className='app-instructions'>
          <li ><Link to='/login'>Log in</Link> or create an account</li>
          <li>Explore our lenthy list of cocktail recipes.</li>
          <li>Add the ingredients you have and see which cocktails you can make in My Cocktails!</li>
          <li>Check out the recipes to see what ingredients you need to get.</li>
        </ul>
      </div>

      </Col>
      </Row>
</Container>

<Row>&nbsp;</Row>
<Row>&nbsp;</Row>
<Row>&nbsp;</Row>
<Row>&nbsp;</Row>
<Row>&nbsp;</Row>
<Row>&nbsp;</Row>
        <CreatorCards />
    </section>
  );
}

export default CocktailCarousel;
