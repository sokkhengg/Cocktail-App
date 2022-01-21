import "./App.css";
//import SignupForm from "./SignupForm";
import Header from "./Header";
import LoginForm from "./LoginForm";
import { useEffect, useState } from "react";

function App() {

  // state for the current logged in use, set in the useEffect & fetch below
  const [currentUser, setCurrentUser] = useState('')

  // auth keeps the user logged in as they move through the app (doesn't work if the page is refreshed!)
  useEffect(() => {
    fetch("auth") // hits the auth endpoint aka users#show in the UsersController
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user)) // sets the state
      }
    })
  },[])
  
  return (
    <div className="App">
      <Header />
      {/* <SignupForm /> */}

      {/* checks if the currentUser exists and shows a confirmation message if so, or displays the login form */}
      {currentUser ? "You logged in, " + currentUser.username + "!" : <LoginForm setCurrentUser={setCurrentUser} currentUser={currentUser} /> }
    </div>
  );
}

export default App;
