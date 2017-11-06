import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";

const Header = styled.header`
  background-color: black;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  max-wight: 100%;
  max-height: 80px;
  padding: 20px;
  padding-left: 70px;
  color: #383838;
  margin: 0;
`;
const PageTitle = styled.h1`
  display: inline-flex;
  text-align: left;
  font-size: 1.5em;
  color: red;
`;
const AppLogo = styled.img`
  display: inline-flex;
  width: 29.77px;
  top: 24.01px;
`;

export default function() {
  return (
    <Header>
      <AppLogo src={logo} />
      <PageTitle>Hello world!</PageTitle>
    </Header>
  );
}
