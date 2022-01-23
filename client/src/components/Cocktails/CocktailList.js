import React from "react";
import CocktailCard from "./CocktailCard"

function CocktailList({cocktails}) {
  return (
    <div>
        <div>
          <div>
            {cocktails ? cocktails.map((cock) => (
              <CocktailCard key={cock.id} cocktail={cock} />
            )) : null}
          </div>
        </div>
      </div>
  );
}

export default CocktailList;
