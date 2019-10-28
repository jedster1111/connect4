import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { createResetGameAction } from "../redux/actions";

export const ResetGameButton: FC = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(createResetGameAction())}>
      Reset Game
    </button>
  );
};
