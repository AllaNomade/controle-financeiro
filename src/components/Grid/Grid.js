import React from "react";
import GridItem from "../GridItem";
import * as Style from "./Grid.styles";

const Grid = ({ itens, setItems }) => {

  return (
    <Style.Table>
      <Style.Thead>
        <Style.Tr>
          <Style.Th width={40}>Descrição</Style.Th>
          <Style.Th width={40}>Valor</Style.Th>
          <Style.Th width={10} alignCenter>
            Tipo
          </Style.Th>
          <Style.Th width={10}></Style.Th>
        </Style.Tr>
      </Style.Thead>
      <Style.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} />
        ))}
      </Style.Tbody>
    </Style.Table>
  );
};

export default Grid;
