import React from "react";
import styled from "styled-components";
/*import "./grid.css";*/
import "flexboxgrid2";
import "flexboxgrid2/flexboxgrid2.css";

import { Section, SectionTitle } from "./SharedStyledComponents.js";

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <SectionTitle>Explore Airbnb</SectionTitle>
          </div>
          <div className="col-xl-4 col-lg-4" />
          <div className="col-xl-4 col-lg-4" />
          <div className="col-xl-4 col-lg-4" />
        </div>
      </div>
    </Section>
  );
}
