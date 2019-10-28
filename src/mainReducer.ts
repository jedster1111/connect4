import { combineReducers } from "redux";
import { connect4Reducer } from "./connect4/redux/reducer";

export const mainReducer = combineReducers({
  connect4: connect4Reducer
});
