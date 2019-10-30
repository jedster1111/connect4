import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { createStepBackAction } from "../redux/actions";

export const TimeControls: FC = () => {
  const dispatch = useDispatch();
  const handleUndo = () => dispatch(createStepBackAction());
  return (
    <div>
      <button onClick={handleUndo}>Undo</button>
    </div>
  );
};
