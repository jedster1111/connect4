import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createStepBackAction,
  createStepForwardsAction
} from "../redux/actions";
import { selectCanRedo, selectCanUndo } from "../redux/selectors";
import { DH_NOT_SUITABLE_GENERATOR } from "constants";

export const TimeControls: FC = () => {
  const dispatch = useDispatch();
  const canRedo = useSelector(selectCanRedo);
  const canUndo = useSelector(selectCanUndo);

  const handleUndo = () => dispatch(createStepBackAction());
  const handleRedo = () => dispatch(createStepForwardsAction());
  return (
    <div>
      <button onClick={handleUndo} disabled={!canUndo}>
        Undo
      </button>
      <button onClick={handleRedo} disabled={!canRedo}>
        Redo
      </button>
    </div>
  );
};
