import React from "react";
import styled from "styled-components";
/*import "./grid.css";*/
import "flexboxgrid2";
import "flexboxgrid2/flexboxgrid2.css";

import logo from "./logoBottom.svg";
import DownIcon from "./dropdown.svg";
import facebookIcon from "./facebook.svg";
import twitterIcon from "./twitter.svg";
import instagramIcon from "./instagram.svg";

import { PriceTagRegular, PriceTagBold } from "./SharedStyledComponents.js";

const Footer = styled.footer`
  box-sizing: border-box;
  display: flex;
  align-items: center;

  background-color: #ffffff;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
  padding-top: 48px;
  padding-bottom: 35px;
  margin-top: 65px;
`;

const DropDownIcon = styled.img`
  box-sizing: border-box;
  width: 15px;
`;
const DropDown = styled.div`
  box-sizing: border-box;
  display: flex;
  aling-content: flex-start;
  align-items: center;
  justify-content: space-between;

  align-text: left;
  background-color: #ffffff;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 13px;
  padding-bottom: 13px;

  margin-bottom: 16px;

  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
`;
const DropDownText = styled.span`
  font-size: 1.125rem;
  color: #383838;
  font-weight: 100;
`;

const Nav = styled.nav`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  align-self: center;
`;
const BoldNav = PriceTagBold.extend`
  margin-top: 0;
  margin-bottom: 16px;
`;
const RegularNav = PriceTagRegular.extend`
  margin-top: 0;
  margin-bottom: 8px;
`;

const BottomNavContainer = styled.nav`
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const BottomLogoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flow: row nowrap;
  align-items: center;
`;
const BottomLogo = styled.img`
  height: 22px;
  margin-right: 13px;
`;
const SocialLogo = styled.img`height: 24px;`;
const Divider = styled.hr`
  margin-top: 48px;
  margin-bottom: 32px;
  float: center;
`;

export default function() {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <div className="col-lx-3 col-lg-3">
            <DropDown>
              <DropDownText>English</DropDownText>
              <DropDownIcon src={DownIcon} />
            </DropDown>
            <DropDown>
              <DropDownText>United States dollar</DropDownText>
              <DropDownIcon src={DownIcon} />
            </DropDown>
          </div>
          <div className="col-lx-3 col-lx-offset-1 col-lg-3 col-lg-offset-1">
            <Nav>
              <BoldNav>Airbnb</BoldNav>
              <RegularNav>About us</RegularNav>
              <RegularNav>Careers</RegularNav>

              <RegularNav>Press</RegularNav>
              <RegularNav>Policies</RegularNav>

              <RegularNav>Help</RegularNav>
              <RegularNav>Diversity & Belonging</RegularNav>
            </Nav>
          </div>
          <div className="col-lx-3 col-lg-3">
            <Nav>
              <BoldNav>Discover</BoldNav>
              <RegularNav>Trust & Safety</RegularNav>
              <RegularNav>Travel Credit</RegularNav>

              <RegularNav>Gift Cards</RegularNav>
              <RegularNav>Airbnb Citizen</RegularNav>

              <RegularNav>Business Travel</RegularNav>
              <RegularNav>Guidebooks</RegularNav>
              <RegularNav>Airbnbmag</RegularNav>
            </Nav>
          </div>
          <div className="col-lx-2 col-lg-2">
            <Nav>
              <BoldNav>Hosting</BoldNav>
              <RegularNav>Why Host</RegularNav>
              <RegularNav>Hospitality</RegularNav>

              <RegularNav>Responsible Hosting</RegularNav>
              <RegularNav>Community Center</RegularNav>
            </Nav>
          </div>
          <div className="col-lx-12 col-lg-12">
            <Divider />
          </div>
          <div className="col-lx-3 col-lg-3">
            <BottomLogoContainer>
              <BottomLogo src={logo} />
              <RegularNav>© Airbnb Inc.</RegularNav>
            </BottomLogoContainer>
          </div>
          <div className="col-lx-4 col-lx-offset-5 col-lg-4 col-lg-offset-5">
            <BottomNavContainer>
              <RegularNav>Terms</RegularNav>
              <RegularNav>Privacy</RegularNav>
              <RegularNav>Site map</RegularNav>
              <SocialLogo src={facebookIcon} />
              <SocialLogo src={twitterIcon} />
              <SocialLogo src={instagramIcon} />
            </BottomNavContainer>
          </div>
        </div>
      </div>
    </Footer>
  );
}
