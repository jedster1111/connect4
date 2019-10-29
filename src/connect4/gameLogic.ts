import { Pieces, NonEmptyPieceTypes, PieceTypes } from "./types";
import produce from "immer";
import { is } from "../functionalHelpers/is";

export function createEmptyPieces(): Pieces {
  return [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""]
  ];
}

export function getNextPlayer(
  currentPlayer: NonEmptyPieceTypes
): NonEmptyPieceTypes {
  return currentPlayer === "X" ? "O" : "X";
}

export function placePiece(
  pieces: Pieces,
  column: number,
  row: number,
  piece: NonEmptyPieceTypes
): Pieces | undefined {
  if (!isColumnInRange(column)) return undefined;

  return produce(pieces, draftPieces => {
    let i = 0;
    while (i < draftPieces.length && !draftPieces[i][column]) {
      i++;
    }

    draftPieces[row][column] = piece;
  });
}

/**
 * Returns undefined if the column is full
 */
export function findHighestEmptyRow(
  pieces: Pieces,
  col: number
): number | undefined {
  let i = 0;
  while (i < pieces.length && !pieces[i][col]) {
    i++;
  }
  return i <= 0 ? undefined : i - 1;
}

const directions = ["up", "upRight", "right", "downRight"] as const;

const directionMap = {
  up: { col: 0, row: -1 },
  upRight: { col: 1, row: -1 },
  right: { col: 1, row: 0 },
  downRight: { col: 1, row: 1 }
};

export function findWinner(
  pieces: Pieces,
  lastPiecePlaced: { col: number; row: number }
): PieceTypes | undefined {
  const { col, row } = lastPiecePlaced;
  const currentPiece = pieces[row][col];
  const result = {
    up: 1,
    upRight: 1,
    right: 1,
    downRight: 1
  };

  directions.forEach(direction => {
    let rowToCheck = row + directionMap[direction].row;
    let colToCheck = col + directionMap[direction].col;
    while (
      isRowInRange(rowToCheck) &&
      isColumnInRange(colToCheck) &&
      is(currentPiece)(pieces[rowToCheck][colToCheck])
    ) {
      result[direction]++;

      rowToCheck = rowToCheck + directionMap[direction].row;
      colToCheck = colToCheck + directionMap[direction].col;
    }

    rowToCheck = row - directionMap[direction].row;
    colToCheck = col - directionMap[direction].col;
    while (
      isRowInRange(rowToCheck) &&
      isColumnInRange(colToCheck) &&
      is(currentPiece)(pieces[rowToCheck][colToCheck])
    ) {
      result[direction]++;

      rowToCheck = rowToCheck - directionMap[direction].row;
      colToCheck = colToCheck - directionMap[direction].col;
    }
  });

  if (Object.values(result).some(numberInARow => numberInARow >= 4))
    return currentPiece;

  if (isBoardFull(pieces)) return "";

  return undefined;
}

function isRowInRange(row: number): boolean {
  if (row < 0 || row > 5) return false;
  return true;
}
function isColumnInRange(column: number): boolean {
  if (column < 0 || column > 6) return false;
  return true;
}

function isBoardFull(pieces: Pieces): boolean {
  return pieces.every(row => row.every(square => Boolean(square)));
}
