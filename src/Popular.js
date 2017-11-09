import React from "react";
import styled from "styled-components";
/*import "./grid.css";*/
import "flexboxgrid2";
import "flexboxgrid2/flexboxgrid2.css";

import arrowIcon from "./arrow_icon.svg";
import popularImg1 from "./user_img/popularImg1.png";
import popularImg2 from "./user_img/popularImg2.png";
import popularImg3 from "./user_img/popularImg3.png";
import popularImg4 from "./user_img/popularImg4.png";
import starIcon from "./starIcon.png";

import {
  Section,
  SectionTitle,
  SectionHeader,
  SectionHeaderArrowImg,
  SectionHeaderArrowText,
  SectionHeaderArrow,
  FlexContainer,
  PriceTag,
  PriceTagBold,
  PriceTagRegular,
  ColumnImg
} from "./SharedStyledComponents.js";

const BolgText = PriceTagBold.extend`
  box-sizing: border-box;
  fonts-ize: 1.125rem;
  line-height: 1.166666667;
  margin-top: 2px;
`;
const RegularText = PriceTagRegular.extend`
  box-sizing: border-box;
  fonts-ize: 1.125rem;
  line-height: 1.166666667;
  margin-top: 4px;
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <SectionHeader>
              <SectionTitle>Popular reservations around the world</SectionTitle>
              <SectionHeaderArrow>
                <SectionHeaderArrowText>See all</SectionHeaderArrowText>
                <SectionHeaderArrowImg src={arrowIcon} />
              </SectionHeaderArrow>
            </SectionHeader>
          </div>
          <div className="col-xl-3 col-lg-3">
            <FlexContainer>
              <ColumnImg src={popularImg1} />
              <PriceTag>
                <BolgText>Chumley’s</BolgText>
                <RegularText>About $60 per person</RegularText>
              </PriceTag>
            </FlexContainer>
          </div>
          <div className="col-xl-3 col-lg-3">
            <FlexContainer>
              <ColumnImg src={popularImg2} />
              <PriceTag>
                <BolgText>Hanjan</BolgText>
                <RegularText>About $50 per person</RegularText>
              </PriceTag>
            </FlexContainer>
          </div>
          <div className="col-xl-3 col-lg-3">
            <FlexContainer>
              <ColumnImg src={popularImg3} />
              <PriceTag>
                <BolgText>Prime Meats</BolgText>
                <RegularText>About $55 per person</RegularText>
              </PriceTag>
            </FlexContainer>
          </div>
          <div className="col-xl-3 col-lg-3">
            <FlexContainer>
              <ColumnImg src={popularImg4} />
              <PriceTag>
                <BolgText>Seaprice</BolgText>
                <RegularText>About $70 per person</RegularText>
              </PriceTag>
            </FlexContainer>
          </div>
        </div>
      </div>
    </Section>
  );
}
