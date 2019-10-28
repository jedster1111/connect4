import React from "react";
import styled from "styled-components";
import Board from "./connect4/components/Board";
import { useSelector, useDispatch } from "react-redux";
import { selectPieces } from "./connect4/redux/selectors";
import { createPiecePlacedAction } from "./connect4/redux/actions";
import { CurrentPlayerDisplay } from "./connect4/components/CurrentPlayerDisplay";
import { ResetGameButton } from "./connect4/components/ResetGameButton";

const AppWrapper = styled.div`
  border: solid 1px black;
`;

const App: React.FC = () => {
  const pieces = useSelector(selectPieces);
  const dispatch = useDispatch();
  return (
    <AppWrapper>
      <Board
        pieces={pieces}
        onClickCol={col => dispatch(createPiecePlacedAction(col))}
      />
      <CurrentPlayerDisplay />
      <ResetGameButton />
    </AppWrapper>
  );
};

export default App;
