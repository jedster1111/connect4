import { Connect4State } from "./connect4/types";
import { Connect4Actions } from "./connect4/redux/actions";

export type State = { connect4: Connect4State };

export type Actions = Connect4Actions;

export type Action<T extends string> = {
  type: T;
};

export type ActionWithPayload<T extends string, P> = Action<T> & {
  payload: P;
};

export type Filter<T, U> = T extends U ? never : T;
