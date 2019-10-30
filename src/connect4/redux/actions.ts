import { ActionWithPayload, Action } from "../../types";

export enum Connect4ActionTypes {
  piecePlaced = "PIECE_PLACED",
  resetGame = "RESET_GAME",
  stepBack = "STEP_BACK"
}

export type Connect4Actions =
  | PiecePlacedAction
  | ResetGameAction
  | StepBackAction;

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

type StepBackAction = Action<Connect4ActionTypes.stepBack>;

export const createStepBackAction = (): StepBackAction => ({
  type: Connect4ActionTypes.stepBack
});
