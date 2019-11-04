import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Connect4Game } from "./connect4/components/Connect4Game";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FFFFEA;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 18px;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Connect4Game />
      </AppWrapper>
    </>
  );
};

export default App;
