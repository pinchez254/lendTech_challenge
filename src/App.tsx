import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="counter">
          <h1>React/UX Tech Challenge Lendtech</h1>
          <Counter />
        </div>
      </header>
    </div>
  );
}

export default App;
