import React, { FC } from "react";
import { useDispatch } from "react-redux";
import {
  createStepBackAction,
  createStepForwardsAction
} from "../redux/actions";

export const TimeControls: FC = () => {
  const dispatch = useDispatch();
  const handleUndo = () => dispatch(createStepBackAction());
  const handleRedo = () => dispatch(createStepForwardsAction());
  return (
    <div>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
    </div>
  );
};
