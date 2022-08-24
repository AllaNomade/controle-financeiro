import React from "react";
import * as Style from "./ResumeItem.styles";

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <Style.Container>
      <Style.Header>
        <Style.HeaderTitle>{title}</Style.HeaderTitle>
        <Icon />
      </Style.Header>
      <Style.Total>{value}</Style.Total>
    </Style.Container>
  )
};

export default ResumeItem;
