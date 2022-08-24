import React  from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header"
import Resume from "./components/Resume/Resume";
import GlobalStyle from "./styles";

const App = () => {

  return (
    <>
      <Header />
      <Resume />
      <Form />
      <GlobalStyle />
    </>
  )
};

export default App
