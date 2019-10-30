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
  moves: [
    { pieces: createEmptyPieces(), currentPlayer: "X", winner: undefined }
  ],
  undoSteps: 0
};

export const connect4Reducer: Reducer<Connect4State, Connect4Actions> = (
  state = initialConnect4State,
  action
) => {
  const { moves, undoSteps } = state;
  const currentMove = moves[moves.length - 1 - undoSteps];
  switch (action.type) {
    case Connect4ActionTypes.piecePlaced: {
      const { column } = action.payload;

      if (!currentMove.currentPlayer || currentMove.winner) return state;

      const row = findHighestEmptyRow(currentMove.pieces, column);

      if (row === undefined) return state;

      const newPieces = placePiece(
        currentMove.pieces,
        column,
        row,
        currentMove.currentPlayer
      );

      if (!newPieces) return state;

      const newWinner = findWinner(newPieces, { col: column, row });

      const newMoves = [
        ...moves.slice(0, moves.length - undoSteps),
        {
          pieces: newPieces,
          currentPlayer:
            newWinner === undefined
              ? getNextPlayer(currentMove.currentPlayer)
              : ("" as const),
          winner: newWinner
        }
      ];

      return {
        ...state,
        moves: newMoves,
        undoSteps: 0
      };
    }

    case Connect4ActionTypes.stepBack: {
      if (undoSteps === moves.length - 1) return state;
      return {
        ...state,
        undoSteps: undoSteps + 1
      };
    }

    case Connect4ActionTypes.resetGame: {
      return initialConnect4State;
    }

    default:
      return state;
  }
};
