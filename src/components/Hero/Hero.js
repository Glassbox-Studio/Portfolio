import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi I'm, <br />
        Ricardo Rivera
      </SectionTitle>
      <SectionText>
        Front-End Web Developer <br />
        and Technology Specialist <br />
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:rrivera1215@gmail.com")}
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
