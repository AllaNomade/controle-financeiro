import React, { useState } from "react";
import * as Style from "./Form.styles"

const Form = () => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }
  };

  return(
    <>
    <Style.Container>
        <Style.InputContent>
          <Style.Label>Descrição</Style.Label>
          <Style.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </Style.InputContent>
        <Style.InputContent>
          <Style.Label>Valor</Style.Label>
          <Style.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </Style.InputContent>
        <Style.RadioGroup>
          <Style.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <Style.Label htmlFor="rIncome">Entrada</Style.Label>
          <Style.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <Style.Label htmlFor="rExpenses">Saída</Style.Label>
        </Style.RadioGroup>
        <Style.Button onClick={handleSave}>ADICIONAR</Style.Button>
      </Style.Container>
    </>
  )
};

export default Form;
