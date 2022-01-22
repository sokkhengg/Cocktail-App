
import React from "react";

function CocktailCard({cocktail}) {

  const { name, instructions, alcoholic, category, image, glass, iba, ingredient_1_name,
    ingredient_2_name, ingredient_3_name, ingredient_4_name, ingredient_5_name,
    ingredient_6_name, ingredient_1_id, ingredient_2_id, ingredient_3_id, ingredient_4_id,
    ingredient_5_id, ingredient_6_id, measure_1, measure_2, measure_3, measure_4,
    measure_5, measure_6 } = cocktail

  return (
    <div>
      <div>{name}</div>
      <div>{category}</div>
      <div>{image}</div>
      <div>{iba}</div>
      <div>{glass}</div>
      <div>{ingredient_1_name}{measure_1}</div>
      <div>{ingredient_2_name}{measure_2}</div>
      <div>{ingredient_3_name}{measure_3}</div>
      <div>{ingredient_4_name}{measure_4}</div>
      <div>{ingredient_5_name}{measure_5}</div>
      <div>{ingredient_6_name}{measure_6}</div>
      <div>{instructions}</div>
      <div>{alcoholic}</div>
    </div>
  );
}

export default CocktailCard;
