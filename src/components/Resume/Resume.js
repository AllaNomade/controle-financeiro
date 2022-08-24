import React from "react";
import ResumeItem from "../ResumeItem/ResumeItem";
import * as Style from "./Resume.styles"
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
  return (
   <Style.Container>
    <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
    <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
    <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
  </Style.Container>
  );
};

export default Resume;
