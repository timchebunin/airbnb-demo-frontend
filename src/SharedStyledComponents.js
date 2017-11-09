import styled from "styled-components";

/* Section haed styles*/
const Section = styled.section`
  box-sizing: border-box;
  display: flex;
  align-items: center;

  margin-top: 48px;
`;
const SectionHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
const SectionTitle = styled.h2`
  align-self: flex-start;

  line-height: 1.0625;
  font-size: 2rem;
  margin-bottom: 24px;
  font-weight: bold;
  text-align: left;
`;
const SectionHeaderArrow = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
const SectionHeaderArrowText = styled.p`
  font-size: 0.875rem;
  line-height: 1.714285714;
  text-align: Right;
  color: #383838;

  margin-right: 8px;
`;
const SectionHeaderArrowImg = styled.img`margin-right: 8px;`;

/* Section head styles*/

/* Image and text in colum */
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
  width: 100%;
`;
/* Image and text in colum */

const NextPage = styled.img`
  position: absolute;
  top: 40%;
  right: -20px;
  z-index: 1;
  height: 40px;
`;
const NextPageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  marting-left: 40px;
`;

export {
  SectionTitle,
  Section,
  SectionHeader,
  SectionHeaderArrowText,
  SectionHeaderArrowImg,
  SectionHeaderArrow,
  FlexContainer,
  PriceTag,
  PriceTagBold,
  PriceTagRegular,
  Reviews,
  ReviewsStars,
  ReviewsText,
  ColumnImg,
  NextPage,
  NextPageContainer
};
