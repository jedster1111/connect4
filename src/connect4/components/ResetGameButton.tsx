import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { createResetGameAction } from "../redux/actions";
import { Button } from "../../common/components/Button";

export const ResetGameButton: FC = () => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(createResetGameAction())}>
      Reset Game
    </Button>
  );
};
