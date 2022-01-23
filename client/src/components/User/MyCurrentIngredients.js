import React, { useEffect, useState } from 'react';

function MyCurrentIngredients({currentUser}) {

    const [currentIngredients, setCurrentIngredients] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/user_ingredients/1`) //hardcoded for ease of testing! replace with your user_id
        .then(r => r.json())
        .then(r => setCurrentIngredients(r))
    }, [])


  return (
    <div>
        
        {currentIngredients.length > 0 ? currentIngredients.map(ingredient => {
            console.log(ingredient)
        }) : "You don't have ingredients"}

    </div>
    );
}

export default MyCurrentIngredients;
