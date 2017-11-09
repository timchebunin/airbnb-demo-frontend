import React from "react";
import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import styled from "styled-components";
/*import "./grid.css";*/
import "flexboxgrid2";
import "flexboxgrid2/flexboxgrid2.css";

const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: center;

  background-color: #ffffff;
  box-shadow: 0px 1px 0px rgba(72, 72, 72, 0.3);
  padding-top: 16px;
  padding-bottom: 16px;
  margin: 0;
`;
const AppLogo = styled.img`
  box-sizing: border-box;
  width: 30px;
`;
const AppLogoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 48px;
`;

const SearchIcon = styled.img`
  box-sizing: border-box;
  width: 20px;
  margin-right: 16px;
`;

const SearchBar = styled.div`
  box-sizing: border-box;
  display: flex;
  aling-content: flex-start;
  align-items: center;

  align-text: left;
  background-color: #ffffff;
  padding-left: 16px;

  line-height: 24px;
  font-size: 16px;
  color: #383838;
  opacity: 0.64;

  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;

  max-width: 392px;
  height: 48px;
`;

const Nav = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-self: center;

  color: #383838;
  line-height: 24px;
  font-size: 14px;
`;

export default function() {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-lx-1 col-lg-1">
            <AppLogoContainer>
              <AppLogo src={logo} />
            </AppLogoContainer>
          </div>
          <div className="col-lx-5 col-lg-5">
            <SearchBar>
              <SearchIcon src={search_icon} />
              <p>Try “Miami”</p>
            </SearchBar>
          </div>
          <div className="col-xl-4 col-xl-offset-2 col-lg-4 col-lg-offset-2">
            <Nav>
              <p>Become a host</p>
              <p>Help</p>
              <p>Sign Up</p>
              <p>Log In</p>
            </Nav>
          </div>
        </div>
      </div>
    </Header>
  );
}
