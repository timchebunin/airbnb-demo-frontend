import styled from "styled-components";

/* Section styles*/
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

/* Section styles*/

export {
  SectionTitle,
  Section,
  SectionHeader,
  SectionHeaderArrowText,
  SectionHeaderArrowImg,
  SectionHeaderArrow
};
