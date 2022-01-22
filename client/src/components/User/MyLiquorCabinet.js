import React from "react";
import AddNewIngredient from "./AddNewIngredient";
import MyCurrentIngredients from "./MyCurrentIngredients";

function MyLiquorCabinet({ ingredients, currentUser }) {


  return (
    <div>
        <MyCurrentIngredients currentUser={currentUser} />
        <AddNewIngredient ingredients={ingredients} currentUser={currentUser} />
    </div>
  );
}

export default MyLiquorCabinet;
