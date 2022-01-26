import React, { useState, useEffect } from "react";
import './Carousel.css';
import CarouselCard from "./CarouselCard";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";



function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [toggle, setToggle] = useState(false);
    


    const [cocktails, setCocktails] = useState([]);
    useEffect(() => {
      fetch('http://localhost:3000/cocktails')
        .then((res) => res.json())
        .then((data) => setCocktails(data));
    }, []);

    const length = cocktails.length;



    useEffect(() => {
        setTimeout(() => setToggle((prevToggle) => !prevToggle), 2500);
        return () => nextSlide();
      }, [toggle]);

      function nextSlide() {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
      };
    
      function prevSlide() {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
      };
    
      if (!Array.isArray(cocktails) || cocktails.lenth <= 0) {
        return null;
      }





  return (
    <section className="slider">
        <AiOutlineDoubleLeft className="left-arrow" onClick={prevSlide} />
        <AiOutlineDoubleRight className="right-arrow" onClick={nextSlide} />
        {cocktails.map((cock, index) => {
            return (
            
                <div
                    className={index === currentSlide ? "slide active" : "slide"}
                    key={index}
                >
                    {index === currentSlide && (

                    <CarouselCard key={cock.id} cocktail={cock} prevSlide={prevSlide} nextSlide={nextSlide}/>  
                    
                    
                    // <div>    
                    // <img src="https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg"
                    //  alt={cock.name} className="image" />
                    //  {cock.name}
                    //  </div>   
                     
                )}
                </div>

            );
        })}
    </section>


  );
}

export default Carousel;