import React from "react";
import GridItem from "../GridItem/GridItem.name";
import * as Style from "./Grid.styles";

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

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
          <GridItem key={index} item={item} onDelete={onDelete}/>
        ))}
      </Style.Tbody>
    </Style.Table>
  );
};

export default Grid;
