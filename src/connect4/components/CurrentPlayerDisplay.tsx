import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectCurrentPlayer, selectWinner } from "../redux/selectors";
import { Counter } from "./Counter";
import styled from "styled-components";
import { Winner } from "./Winner";
import { AnimatePresence } from "framer-motion";

const CurrentPlayerDisplayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  min-height: 60px;
  margin: 6px;

  background-color: #ff5e5b;
  border-radius: 12px;
`;

export const CurrentPlayerDisplay: FC = () => {
  const currentPlayer = useSelector(selectCurrentPlayer);
  const winner = useSelector(selectWinner);

  let content: JSX.Element;

  if (winner === "") content = <p>The game is a draw</p>;
  else if (winner) content = <Winner piece={winner} />;
  else if (!currentPlayer) content = <p>There is no current player</p>;
  else
    content = (
      <AnimatePresence>
        <Counter key={currentPlayer} piece={currentPlayer} />
      </AnimatePresence>
    );

  return <CurrentPlayerDisplayWrapper>{content}</CurrentPlayerDisplayWrapper>;
};
