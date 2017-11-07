import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";

const Header = styled.header`
  /* a flex layout context, always one line */
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  background-color: black;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  height: 80px;
  /*padding: 20px;*/
  color: #383838;
  margin: 0;
`;
const SearchBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;

  font-family: Circular_Air;
  line-height: 24px;
  font-size: 16px;
  color: #383838;

  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;

  width: 392px;
  height: 48px;
`;
const AppLogo = styled.img`
  width: 29.77px;
  margin: 50px;
`;

export default function() {
  return (
    <Header>
      <AppLogo src={logo} />
      <SearchBar>
        <p>Yeah!</p>
        <p>Cool guys!</p>
      </SearchBar>
    </Header>
  );
}
