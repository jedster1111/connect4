import { State } from "../../types";
import { Pieces } from "../types";
import { findHighestEmptyRow } from "../gameLogic";

export function selectPieces(state: State) {
  return getCurrentMove(state).pieces;
}

export function selectCurrentPlayer(state: State) {
  return getCurrentMove(state).currentPlayer;
}

export function selectWinner(state: State) {
  return getCurrentMove(state).winner;
}

export function selectCanUndo(state: State) {
  const { moves } = state.connect4;
  return selectUndoSteps(state) !== moves.length - 1;
}

export function selectCanRedo(state: State) {
  return selectUndoSteps(state) !== 0;
}

export function selectHighestRowsInColumns(
  state: State
): (number | undefined)[] {
  const pieces = selectPieces(state);
  const width = pieces[0].length;
  const result: (number | undefined)[] = [];
  for (let i = 0; i < width; i++) {
    result.push(findHighestEmptyRow(pieces, i));
  }
  return result;
}

function selectUndoSteps(state: State) {
  return state.connect4.undoSteps;
}

function getCurrentMove(state: State) {
  const { moves, undoSteps } = state.connect4;

  return moves[moves.length - 1 - undoSteps];
}
