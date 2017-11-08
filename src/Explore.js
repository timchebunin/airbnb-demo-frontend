import React from "react";
import styled from "styled-components";
/*import "./grid.css";*/
import "flexboxgrid2";
import "flexboxgrid2/flexboxgrid2.css";

import { Section, SectionTitle } from "./SharedStyledComponents.js";

import homes from "./user_img/homes.png";
import experiences from "./user_img/experiences.png";
import restaurants from "./user_img/restaurants.png";

const ExploreCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;

  line-height: normal;
  font-size: 17px;
  font-weight: bold;
  color: #383838;

  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  align-items: center;
`;

const ExploreImg = styled.img`
  height: 96px;
  margin-right: 24px;
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <SectionTitle>Explore Airbnb</SectionTitle>
          </div>
          <div className="col-xl-4 col-lg-4">
            <ExploreCard>
              <ExploreImg src={homes} />
              <p>Homes</p>
            </ExploreCard>
          </div>
          <div className="col-xl-4 col-lg-4">
            <ExploreCard>
              <ExploreImg src={experiences} />
              <p>Experiences</p>
            </ExploreCard>
          </div>
          <div className="col-xl-4 col-lg-4">
            <ExploreCard>
              <ExploreImg src={restaurants} />
              <p>Restaurants</p>
            </ExploreCard>
          </div>
        </div>
      </div>
    </Section>
  );
}
