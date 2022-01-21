import logo from './logo.svg';
import './App.css';

function App() {

  function handleSubmit(e){
    e.preventDefault();
    console.log(e)
    const user_object = {
      username: e.target[0].value,
      password: e.target[1].value
    }

    fetch("http://localhost:3000/users", {
      method: "POST",  
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user_object)
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }

  return (
    <div className="App">
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="password"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
