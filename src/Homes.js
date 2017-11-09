import React from "react";
import styled from "styled-components";
/*import "./grid.css";*/
import "flexboxgrid2";
import "flexboxgrid2/flexboxgrid2.css";

import arrowIcon from "./arrow_icon.svg";
import homesImg1 from "./user_img/homesImg1.png";
import homesImg2 from "./user_img/homesImg2.png";
import homesImg3 from "./user_img/homesImg3.png";
import starIcon from "./starIcon.png";

import {
  Section,
  SectionTitle,
  SectionHeader,
  SectionHeaderArrowImg,
  SectionHeaderArrowText,
  SectionHeaderArrow
} from "./SharedStyledComponents.js";

const FlexContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

const PriceTag = styled.div`margin-top: 8px;`;
const PriceTagBold = styled.span`
  font-size: 0.9375rem;
  line-height: 1.2;
  font-weight: bold;
  margin-right: 5px;
`;
const PriceTagRegular = styled.span`
  alig-self: flex-start;
  font-size: 0.9375rem;
  line-height: 1.2;
  font-weight: 100;
`;

const Reviews = styled.div``;
const ReviewsStars = styled.img`
  height: 12px;
  margin-right: 4px;
`;
const ReviewsText = styled.span`
  font-size: 0.75rem;
  margin-left: 4px;
`;
const ColumnImg = styled.img`
  order: -1;
  max-height: 205px;
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <SectionHeader>
              <SectionTitle>Homes</SectionTitle>
              <SectionHeaderArrow>
                <SectionHeaderArrowText>See all</SectionHeaderArrowText>
                <SectionHeaderArrowImg src={arrowIcon} />
              </SectionHeaderArrow>
            </SectionHeader>
          </div>
          <div className="col-xl-4 col-lg-4">
            <FlexContainer>
              <ColumnImg src={homesImg1} />
              <PriceTag>
                <PriceTagBold>
                  $82 La Salentina, see, nature & relax
                  <br />
                </PriceTagBold>
                <PriceTagRegular>Entire house · 9 beds</PriceTagRegular>
              </PriceTag>
              <Reviews>
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsText>364 · Superhost</ReviewsText>
              </Reviews>
            </FlexContainer>
          </div>
          <div className="col-xl-4 col-lg-4">
            <FlexContainer>
              <ColumnImg src={homesImg2} />
              <PriceTag>
                <PriceTagBold>
                  $82 Your private 3 bedr. riad and exclusi…
                  <br />
                </PriceTagBold>
                <PriceTagRegular>Entire house · 5 beds</PriceTagRegular>
              </PriceTag>
              <Reviews>
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsText>161 · Superhost</ReviewsText>
              </Reviews>
            </FlexContainer>
          </div>
          <div className="col-xl-4 col-lg-4">
            <FlexContainer>
              <ColumnImg src={homesImg3} />
              <PriceTag>
                <PriceTagBold>
                  $200 Dreamy Tropical Tree House
                  <br />
                </PriceTagBold>
                <PriceTagRegular>Entire treehouse · 1 bed</PriceTagRegular>
              </PriceTag>
              <Reviews>
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsText>97 · Superhost</ReviewsText>
              </Reviews>
            </FlexContainer>
          </div>
        </div>
      </div>
    </Section>
  );
}