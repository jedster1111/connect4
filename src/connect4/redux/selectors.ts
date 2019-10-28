import { State } from "../../types";

export function selectPieces(state: State) {
  return state.connect4.pieces;
}

export function selectCurrentPlayer(state: State) {
  return state.connect4.currentPlayer;
}

export function selectWinner(state: State) {
  return state.connect4.winner;
}
