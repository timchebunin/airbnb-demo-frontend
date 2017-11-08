import React, { Component } from "react";
import Header from "./Header.js";
import Explore from "./Explore.js";
import "./App.css";
import styled from "styled-components";

const Main = styled.main``;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main>
          <Explore />
        </Main>
      </div>
    );
  }
}

export default App;
