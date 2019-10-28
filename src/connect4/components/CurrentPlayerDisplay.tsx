import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectCurrentPlayer, selectWinner } from "../redux/selectors";

export const CurrentPlayerDisplay: FC = () => {
  const currentPlayer = useSelector(selectCurrentPlayer);
  const winner = useSelector(selectWinner);

  if (winner) return <p>The winner is {winner}</p>;
  if (winner === "") return <p>The game is a draw</p>;

  if (!currentPlayer) return <p>There is no current player</p>;

  return <p>The current player is: {currentPlayer}</p>;
};
