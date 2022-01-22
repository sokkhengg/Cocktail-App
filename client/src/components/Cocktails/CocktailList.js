import React from "react";
import CocktailCard from "./CocktailCard"

function CocktailList({cocktails}) {
  return (
    <div id="product" className="product__section">
        <div className="product__wrapper">
          <div className="product__container">
            {cocktails.map((cock) => (
              <CocktailCard key={cock.id} cocktail={cock} />
            ))}
          </div>
        </div>
      </div>
  );
}

export default CocktailList;


// TypeError: cocktails.map is not a function