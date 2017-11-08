import React from "react";
import styled from "styled-components";
/*import "./grid.css";*/
import "flexboxgrid2";
import "flexboxgrid2/flexboxgrid2.css";

import experiencesImg1 from "./user_img/experiencesImg1.png";

import {
  Section,
  SectionTitle,
  SectionHeader
} from "./SharedStyledComponents.js";

const ImgAndStarsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  align-content: flex-start;
`;

const ImgAndStarsImage = styled.img`
  order: -1;
  flex-basis: 100%;
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <SectionHeader>
              <SectionTitle>Experiences</SectionTitle>
              <p>arrow</p>
            </SectionHeader>
          </div>
          <div className="col-xl-3 col-lg-3">
            <ImgAndStarsContainer>
              <ImgAndStarsImage src={experiencesImg1} />
            </ImgAndStarsContainer>
          </div>
          <div className="col-xl-3 col-lg-3">
            <ImgAndStarsContainer>
              <ImgAndStarsImage src={experiencesImg1} />
            </ImgAndStarsContainer>
          </div>
          <div className="col-xl-3 col-lg-3">
            <ImgAndStarsContainer>
              <ImgAndStarsImage src={experiencesImg1} />
            </ImgAndStarsContainer>
          </div>
          <div className="col-xl-3 col-lg-3">
            <ImgAndStarsContainer>
              <ImgAndStarsImage src={experiencesImg1} />
            </ImgAndStarsContainer>
          </div>
        </div>
      </div>
    </Section>
  );
}
