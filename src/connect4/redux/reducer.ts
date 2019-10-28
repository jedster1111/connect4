import { Connect4State } from "../types";
import { Reducer } from "redux";
import { Connect4Actions, Connect4ActionTypes } from "./actions";
import {
  placePiece,
  createEmptyPieces,
  getNextPlayer,
  findWinner,
  findHighestEmptyRow
} from "../gameLogic";

const initialConnect4State: Connect4State = {
  pieces: createEmptyPieces(),
  currentPlayer: "X",
  winner: undefined
};

export const connect4Reducer: Reducer<Connect4State, Connect4Actions> = (
  state = initialConnect4State,
  action
) => {
  const { currentPlayer, pieces, winner } = state;
  switch (action.type) {
    case Connect4ActionTypes.piecePlaced: {
      const { column } = action.payload;

      if (!currentPlayer || winner) return state;

      const row = findHighestEmptyRow(pieces, column);

      if (!row) return state;

      const newPieces = placePiece(pieces, column, row, currentPlayer);

      if (!newPieces) return state;

      const newWinner = findWinner(newPieces, { col: column, row });

      return {
        ...state,
        pieces: newPieces,
        currentPlayer:
          newWinner === undefined ? getNextPlayer(currentPlayer) : "",
        winner: newWinner
      };
    }

    case Connect4ActionTypes.resetGame: {
      return initialConnect4State;
    }

    default:
      return state;
  }
};
