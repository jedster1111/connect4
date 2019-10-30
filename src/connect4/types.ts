import { Filter } from "../types";

export type PieceTypes = "O" | "X" | "";
export type NonEmptyPieceTypes = Filter<PieceTypes, "">;

export type Pieces = PieceTypes[][];

export type Connect4State = {
  moves: {
    pieces: Pieces;
    currentPlayer: PieceTypes;
    winner: PieceTypes | undefined;
  }[];

  undoSteps: number;
};
