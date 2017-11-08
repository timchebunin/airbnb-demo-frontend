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

  line-height: 34px;
  font-size: 32px;
  margin-bottom: 24px;
  font-weight: bold;
  text-align: left;
`;

/* Section styles*/

export { SectionTitle, Section, SectionHeader };
