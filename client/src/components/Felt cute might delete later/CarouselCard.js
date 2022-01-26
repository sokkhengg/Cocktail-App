import React from "react";
import "./Carousel.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";



function CarouselCard({ cocktail, nextSlide, prevSlide }) {
  
  return (
    <>
        <Link to={cocktail ? `/cocktails/${cocktail.id}` : null}>
          <img
            className="image"
            src="https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg"
          />
        <br></br>
        <div className="border"></div>
            <span>{cocktail.name}</span> <span className="alcoholic">{cocktail.alcoholic}</span>
          <div className="border"></div>
          </Link>
    </>
  );
}

export default CarouselCard;
