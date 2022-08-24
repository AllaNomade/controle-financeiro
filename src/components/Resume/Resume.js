import React from "react";
import ResumeItem from "../ResumeItem/ResumeItem";
import * as Style from "./Resume.styles"
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
  return (
   <Style.Container>
    <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000" />
    <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="1000" />
    <ResumeItem title="Total" Icon={FaDollarSign} value="1000" />
  </Style.Container>
  );
};

export default Resume;
