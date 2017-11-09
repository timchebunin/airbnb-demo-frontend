import React from "react";
import styled from "styled-components";
/*import "./grid.css";*/
import "flexboxgrid2";
import "flexboxgrid2/flexboxgrid2.css";

import arrowIcon from "./arrow_icon.svg";
import featuredImg1 from "./user_img/featuredImg1.png";
import featuredImg2 from "./user_img/featuredImg2.png";
import featuredImg3 from "./user_img/featuredImg3.png";
import featuredImg4 from "./user_img/featuredImg4.png";
import featuredImg5 from "./user_img/featuredImg5.png";
import featuredImg6 from "./user_img/featuredImg6.png";

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
  ColumnImg
} from "./SharedStyledComponents.js";

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <SectionHeader>
              <SectionTitle>Featured destinations</SectionTitle>
              <SectionHeaderArrow>
                <SectionHeaderArrowText>See all</SectionHeaderArrowText>
                <SectionHeaderArrowImg src={arrowIcon} />
              </SectionHeaderArrow>
            </SectionHeader>
          </div>
          <div className="col-xl-2 col-lg-2">
            <FlexContainer>
              <ColumnImg src={featuredImg1} />
              <PriceTag>
                <PriceTagBold>Paris</PriceTagBold>
              </PriceTag>
            </FlexContainer>
          </div>
          <div className="col-xl-2 col-lg-2">
            <FlexContainer>
              <ColumnImg src={featuredImg2} />
              <PriceTag>
                <PriceTagBold>Miami</PriceTagBold>
              </PriceTag>
            </FlexContainer>
          </div>
          <div className="col-xl-2 col-lg-2">
            <FlexContainer>
              <ColumnImg src={featuredImg3} />
              <PriceTag>
                <PriceTagBold>Tokyo</PriceTagBold>
              </PriceTag>
            </FlexContainer>
          </div>
          <div className="col-xl-2 col-lg-2">
            <FlexContainer>
              <ColumnImg src={featuredImg4} />
              <PriceTag>
                <PriceTagBold>Cape town</PriceTagBold>
              </PriceTag>
            </FlexContainer>
          </div>
          <div className="col-xl-2 col-lg-2">
            <FlexContainer>
              <ColumnImg src={featuredImg5} />
              <PriceTag>
                <PriceTagBold>Seoul</PriceTagBold>
              </PriceTag>
            </FlexContainer>
          </div>
          <div className="col-xl-2 col-lg-2">
            <FlexContainer>
              <ColumnImg src={featuredImg6} />
              <PriceTag>
                <PriceTagBold>Los Angeles</PriceTagBold>
              </PriceTag>
            </FlexContainer>
          </div>
        </div>
      </div>
    </Section>
  );
}
