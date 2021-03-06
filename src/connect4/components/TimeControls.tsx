import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createStepBackAction,
  createStepForwardsAction
} from "../redux/actions";
import { selectCanRedo, selectCanUndo } from "../redux/selectors";
import { Button } from "../../common/components/Button";

export const TimeControls: FC = () => {
  const dispatch = useDispatch();
  const canRedo = useSelector(selectCanRedo);
  const canUndo = useSelector(selectCanUndo);

  const handleUndo = () => dispatch(createStepBackAction());
  const handleRedo = () => dispatch(createStepForwardsAction());
  return (
    <div>
      <Button onClick={handleUndo} disabled={!canUndo}>
        Undo
      </Button>
      <Button onClick={handleRedo} disabled={!canRedo}>
        Redo
      </Button>
    </div>
  );
};
