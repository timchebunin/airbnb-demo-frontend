import React from "react";
import styled from "styled-components";
/*import "./grid.css";*/
import "flexboxgrid2";
import "flexboxgrid2/flexboxgrid2.css";

import arrowIcon from "./arrow_icon.svg";
import experiencesImg1 from "./user_img/experiencesImg1.png";
import experiencesImg2 from "./user_img/experiencesImg2.png";
import experiencesImg3 from "./user_img/experiencesImg3.png";
import experiencesImg4 from "./user_img/experiencesImg4.png";
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
  max-height: 350px;
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <SectionHeader>
              <SectionTitle>Experiences</SectionTitle>
              <SectionHeaderArrow>
                <SectionHeaderArrowText>See all</SectionHeaderArrowText>
                <SectionHeaderArrowImg src={arrowIcon} />
              </SectionHeaderArrow>
            </SectionHeader>
          </div>
          <div className="col-xl-3 col-lg-3">
            <FlexContainer>
              <ColumnImg src={experiencesImg1} />
              <PriceTag>
                <PriceTagBold>29$</PriceTagBold>
                <PriceTagRegular>Forest therapy</PriceTagRegular>
              </PriceTag>
              <Reviews>
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsText>44 reviews</ReviewsText>
              </Reviews>
            </FlexContainer>
          </div>
          <div className="col-xl-3 col-lg-3">
            <FlexContainer>
              <ColumnImg src={experiencesImg2} />
              <PriceTag>
                <PriceTagBold>69$</PriceTagBold>
                <PriceTagRegular>Whale watching</PriceTagRegular>
              </PriceTag>
              <Reviews>
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsText>46 reviews</ReviewsText>
              </Reviews>
            </FlexContainer>
          </div>
          <div className="col-xl-3 col-lg-3">
            <FlexContainer>
              <ColumnImg src={experiencesImg3} />
              <PriceTag>
                <PriceTagBold>69$</PriceTagBold>
                <PriceTagRegular>
                  Table Mountain Summit, Cable Car Down
                </PriceTagRegular>
              </PriceTag>
              <Reviews>
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsText>44 reviews</ReviewsText>
              </Reviews>
            </FlexContainer>
          </div>
          <div className="col-xl-3 col-lg-3">
            <FlexContainer>
              <ColumnImg src={experiencesImg4} />
              <PriceTag>
                <PriceTagBold>50$</PriceTagBold>
                <PriceTagRegular>Salsa Night</PriceTagRegular>
              </PriceTag>
              <Reviews>
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsStars src={starIcon} />
                <ReviewsText>44 reviews</ReviewsText>
              </Reviews>
            </FlexContainer>
          </div>
        </div>
      </div>
    </Section>
  );
}
