import React from "react";
import ResumeItem from "../ResumeItem/ResumeItem";
import * as Style from "./Resume.styles"

const Resume = () => {
  return (
   <Style.Container>
    <ResumeItem />
    <ResumeItem />
    <ResumeItem />
  </Style.Container>
  );
};

export default Resume;
