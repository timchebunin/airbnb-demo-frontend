import React from "react";
import styled from "styled-components";
import "./grid.css";

import homes from "./user_img/homes.png";
import experiences from "./user_img/experiences.png";
import restaurants from "./user_img/restaurants.png";

const Section = styled.section`
  box-sizing: border-box;
  display: flex;
  align-items: center;

  margin-top: 48px;
`;
const SectionTitle = styled.h2`
  line-height: 34px;
  font-size: 32px;
  margin-bottom: 24px;
  font-weight: bold;
  text-align: left;
  padding-left: 8px;
`;
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
  /*
  .explore-row {
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
  }

  .explore-col-1,
  .explore-col-2,
  .explore-col-3 {
    box-sizing: border-box;
    padding-left: 12px;
    padding-right: 12px;
  }
  .explore-col-1 {
    flex-basis: 33.333333333%;
    max-width: 33.333333333%;
  }
  .explore-col-2 {
    flex-basis: 66.666666667%;
    max-width: 66.666666667%;
  }
  .explore-col-3 {
    flex-basis: 100%;
    max-width: 100%;
  }*/
`;

const ExploreImg = styled.img`
  height: 96px;
  margin-right: 24px;
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <SectionTitle>Explore Airbnb</SectionTitle>
        <div className="row">
          <div className="col-4">
            <ExploreCard>
              <ExploreImg src={homes} />
              <p>Homes</p>
            </ExploreCard>
          </div>
          <div className="col-4">
            <ExploreCard>
              <ExploreImg src={experiences} />
              <p>Experiences</p>
            </ExploreCard>
          </div>
          <div className="col-4">
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
