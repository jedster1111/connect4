import React from "react";
import styled from "styled-components";
import Board from "./connect4/components/Board";
import { CurrentPlayerDisplay } from "./connect4/components/CurrentPlayerDisplay";
import { ResetGameButton } from "./connect4/components/ResetGameButton";
import { TimeControls } from "./connect4/components/TimeControls";

const AppWrapper = styled.div`
  margin-top: 300px;
  border: solid 1px black;
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Board />
      <CurrentPlayerDisplay />
      <ResetGameButton />
      <TimeControls />
    </AppWrapper>
  );
};

export default App;
