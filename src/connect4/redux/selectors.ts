import { State } from "../../types";

export function selectPieces(state: State) {
  return getCurrentMove(state).pieces;
}

export function selectCurrentPlayer(state: State) {
  return getCurrentMove(state).currentPlayer;
}

export function selectWinner(state: State) {
  return getCurrentMove(state).winner;
}

function getCurrentMove(state: State) {
  const { moves, undoSteps } = state.connect4;

  return moves[moves.length - 1 - undoSteps];
}
