import React, { Component } from "react";
import styled from "styled-components";

import "./App.css";
import Header from "./Header.js";
import Explore from "./Explore.js";
import Experiences from "./Experiences.js";

const Main = styled.main``;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main>
          <Explore />
          <Experiences />
        </Main>
      </div>
    );
  }
}

export default App;
