import { ActionWithPayload, Action } from "../../types";

export enum Connect4ActionTypes {
  piecePlaced = "PIECE_PLACED",
  resetGame = "RESET_GAME"
}

export type Connect4Actions = PiecePlacedAction | ResetGameAction;

type PiecePlacedAction = ActionWithPayload<
  Connect4ActionTypes.piecePlaced,
  {
    column: number;
  }
>;

export const createPiecePlacedAction = (column: number): PiecePlacedAction => ({
  type: Connect4ActionTypes.piecePlaced,
  payload: { column }
});

type ResetGameAction = Action<Connect4ActionTypes.resetGame>;

export const createResetGameAction = (): ResetGameAction => ({
  type: Connect4ActionTypes.resetGame
});
