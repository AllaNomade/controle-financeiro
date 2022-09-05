import React from "react";
import * as Style from "./GridItem.styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <Style.Tr>
      <Style.Td>{item.desc}</Style.Td>
      <Style.Td>{item.amount}</Style.Td>
      <Style.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </Style.Td>
      <Style.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </Style.Td>
    </Style.Tr>
  );
};

export default GridItem;
