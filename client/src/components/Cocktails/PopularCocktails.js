// import React, { useEffect, useState } from "react";

// function PopularCocktails() {
//   const [popularCocktails, setPopularCocktails] = useState([]);
//   const [cocktailArray, setCocktailArray] = useState([]);
//   const [cocktails, setCocktails] = useState([])

//   useEffect(() => {
//     fetch("/popular")
//       .then((r) => r.json())
//       .then((r) => {
//         setPopularCocktails(r);
//       })
//   }, []);

//   useEffect(() => {
//     fetch("/cocktails")
//       .then((r) => r.json())
//       .then((r) => {
//         setCocktails(r);
//       })
//   }, []);

//   const sortedList = [];
//   for (let cocktail in popularCocktails) {
//     sortedList.push([cocktail, popularCocktails[cocktail]]);
//   }

//   sortedList.sort(function (a, b) {
//     return b[1] - a[1];
//   });


//     sortedList.map(p => {
//         fetch(`cocktails/${p[0]}`)
//         .then(r => r.json())
//         .then(r => {
//             cocktailArray.push(r)
//             //setCocktailArray([...cocktailArray, r])
//         })
//     })
//   }

//   let res = cocktails.filter(item => cocktailArray.includes(item.id));
//   console.log(res);

//   return (
//     <div>
//       <p>POPULAR</p>
//       {cocktailArray.length > 1 ? cocktailArray.map(p => {

//       return (
//           <p>
//               {p.name}
//           </p>
//       )
//       }) : <p>it's empty??!</p>}
//     </div>
//   );

// export default PopularCocktails;
