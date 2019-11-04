import React, { FC } from "react";
import styled from "styled-components";
import Board from "./Board";
import { CurrentPlayerDisplay } from "./CurrentPlayerDisplay";
import { ResetGameButton } from "./ResetGameButton";
import { TimeControls } from "./TimeControls";

const StyledGameWrapper = styled.div`
  position: relative;
  background-color: #ffed66;
  /* border: solid 1px red; */
  padding: 8px;
`;

const StyledGameButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Connect4Game: FC = () => (
  <StyledGameWrapper>
    <Board />
    <CurrentPlayerDisplay />
    <StyledGameButtonsWrapper>
      <ResetGameButton />
      <TimeControls />
    </StyledGameButtonsWrapper>
  </StyledGameWrapper>
);
