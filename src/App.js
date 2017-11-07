import React, { Component } from "react";
import Header from "./Header.js";
import Explore from "./Explore.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Explore />
      </div>
    );
  }
}

export default App;
