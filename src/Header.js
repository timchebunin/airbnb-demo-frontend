import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import "./grid.css";

const Header = styled.header`
  /* centered, always one line */
  align-items: center;
  background-color: black;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  height: 80px;
  color: #383838;
  margin: 0;
`;
const AppLogo = styled.img`width: 1.875 rem;`;
const SearchBar = styled.div`
  background-color: #ffffff;

  font-size: 1 rem;
  color: #383838;

  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;

  width: 392px;
  height: 48px;
`;

const Nav = styled.div`
  background-color: teal;
  color: red;
`;

export default function() {
  return (
    <Header className="row">
      <div className="col-1">
        <AppLogo src={logo} />
      </div>
      <div className="col-5">
        <SearchBar>
          <p>Yeah!</p>
        </SearchBar>
      </div>
      <div className="col-6">
        <Nav>
          <p>Navigation</p>
        </Nav>
      </div>
    </Header>
  );
}
