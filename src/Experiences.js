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

const ImgAndStarsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  align-content: flex-start;
`;

const ImgAndStarsPriceTag = styled.div`margin-top: 8px;`;
const ImgAndStarsPriceTagPrice = styled.span`
  font-size: 0.9375rem;
  line-height: 1.2;
  font-weight: bold;
  margin-right: 5px;
`;
const ImgAndStarsPriceTagTag = styled.span`
  font-size: 0.9375rem;
  line-height: 1.2;
`;

const ImgAndStarsReviews = styled.div``;
const ImgAndStarsReviewsStars = styled.img`
  height: 12px;
  margin-right: 4px;
`;
const ImgAndStarsReviewsText = styled.span`
  font-size: 0.75rem;
  margin-left: 4px;
`;
const ImgAndStarsImage = styled.img`
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
            <ImgAndStarsContainer>
              <ImgAndStarsImage src={experiencesImg1} />
              <ImgAndStarsPriceTag>
                <ImgAndStarsPriceTagPrice>29$</ImgAndStarsPriceTagPrice>
                <ImgAndStarsPriceTagTag>Forest therapy</ImgAndStarsPriceTagTag>
              </ImgAndStarsPriceTag>
              <ImgAndStarsReviews>
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsText>44 reviews</ImgAndStarsReviewsText>
              </ImgAndStarsReviews>
            </ImgAndStarsContainer>
          </div>
          <div className="col-xl-3 col-lg-3">
            <ImgAndStarsContainer>
              <ImgAndStarsImage src={experiencesImg2} />
              <ImgAndStarsPriceTag>
                <ImgAndStarsPriceTagPrice>69$</ImgAndStarsPriceTagPrice>
                <ImgAndStarsPriceTagTag>Whale watching</ImgAndStarsPriceTagTag>
              </ImgAndStarsPriceTag>
              <ImgAndStarsReviews>
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsText>46 reviews</ImgAndStarsReviewsText>
              </ImgAndStarsReviews>
            </ImgAndStarsContainer>
          </div>
          <div className="col-xl-3 col-lg-3">
            <ImgAndStarsContainer>
              <ImgAndStarsImage src={experiencesImg3} />
              <ImgAndStarsPriceTag>
                <ImgAndStarsPriceTagPrice>69$</ImgAndStarsPriceTagPrice>
                <ImgAndStarsPriceTagTag>
                  Table Mountain Summit, Cable Car Down
                </ImgAndStarsPriceTagTag>
              </ImgAndStarsPriceTag>
              <ImgAndStarsReviews>
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsText>44 reviews</ImgAndStarsReviewsText>
              </ImgAndStarsReviews>
            </ImgAndStarsContainer>
          </div>
          <div className="col-xl-3 col-lg-3">
            <ImgAndStarsContainer>
              <ImgAndStarsImage src={experiencesImg4} />
              <ImgAndStarsPriceTag>
                <ImgAndStarsPriceTagPrice>50$</ImgAndStarsPriceTagPrice>
                <ImgAndStarsPriceTagTag>Salsa Night</ImgAndStarsPriceTagTag>
              </ImgAndStarsPriceTag>
              <ImgAndStarsReviews>
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsStars src={starIcon} />
                <ImgAndStarsReviewsText>44 reviews</ImgAndStarsReviewsText>
              </ImgAndStarsReviews>
            </ImgAndStarsContainer>
          </div>
        </div>
      </div>
    </Section>
  );
}
