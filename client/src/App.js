import './App.css';
import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import SignupForm from './components/User/SignupForm';
import Header from './components/Header/Header';
import LoginForm from './components/User/LoginForm';
import Form from './components/User/Form';
import CocktailList from './components/Cocktails/CocktailList';
import MyCocktailList from './components/Cocktails/MyCocktailList';
import CocktailForm from './components/Cocktails/CocktailForm';
import MyLiquorCabinet from './components/User/MyLiquorCabinet';

function App() {
  // state for the current logged in use, set in the useEffect & fetch below
  const [currentUser, setCurrentUser] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [cocktails, setCocktails] = useState('');

  

  // auth keeps the user logged in as they move through the app (doesn't work if the page is refreshed!)
  useEffect(() => {
    fetch('auth') // hits the auth endpoint aka users#show in the UsersController
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => setCurrentUser(user)); // sets the state
        }
      });
  }, []);

  //grabs all cocktails
  useEffect(() => {
    fetch('/cocktails')
      .then((r) => r.json())
      .then((cocktails) => setCocktails(cocktails));
  }, []);

  console.log(cocktails)

  //Filters cocktails
  // const [cocktailFilter, setCocktailFilter] = useState('');

  // const cocktailsToDisplay = cocktails.filter((cocktail) => {
  //   cocktail.name.toLowerCase().includes(cocktailFilter.toLowerCase());
  // })

  // grabs all ingredients from the backend, for use in various forms
  useEffect(() => {
    fetch('/ingredients')
      .then((r) => r.json())
      .then((ingredients) => setIngredients(ingredients));
  }, []);


  console.log(cocktails)

  return (
    <div className="App">
      <Header />
      
      {/* checks if the currentUser exists and shows a confirmation message if so, or displays the login form */}
      {/* {currentUser ? "You logged in, " + currentUser.username + "!" : <LoginForm setCurrentUser={setCurrentUser} currentUser={currentUser} /> } */}

      <Switch>
        {/* <Route
          path="/signup"
          component={() => (
            <SignupForm
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          )}
        /> */}

        <Route
          path="/login"
          component={() => (
            <Form
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          )}
        />

        <Route path="/cocktail-list" component={() => <CocktailList cocktails={cocktails}/>} />

        <Route path="/my-cocktail-list" component={() => <MyCocktailList />} />

        <Route
          path="/new-cocktail"
          component={() => <CocktailForm ingredients={ingredients} />}
        />

<Route
          path="/my-liquor-cabinet"
          component={() => <MyLiquorCabinet ingredients={ingredients} currentUser={currentUser} />}
        />
      </Switch>
    </div>
  );
}

export default App;
