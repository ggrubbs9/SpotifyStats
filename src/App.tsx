import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const click = () => {
    axios.get(`https://accounts.spotify.com/authorize`).then((res) => {
      const persons = res.data;
      console.log(persons);
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <button onClick={click}>Log In</button>
      </header>
    </div>
  );
}

export default App;
