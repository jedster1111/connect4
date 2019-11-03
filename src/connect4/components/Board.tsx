import React, { FC } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { PieceTypes } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { selectPieces, selectHighestRowsInColumns } from "../redux/selectors";
import { createPiecePlacedAction } from "../redux/actions";
import { Counter } from "./Counter";

const StyledSquare = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  border: solid 1px black;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const Square: FC<{
  piece: PieceTypes;
  highestRowInCol: number | undefined;
  onClick: () => void;
}> = ({ piece, onClick, highestRowInCol }) => {
  return (
    <StyledSquare onClick={onClick}>
      <AnimatePresence>
        {piece && (
          <Counter piece={piece} highestRowInCol={highestRowInCol || 0} />
        )}
      </AnimatePresence>
    </StyledSquare>
  );
};

const StyledRow = styled.div`
  display: flex;
`;

const Board: FC = () => {
  const pieces = useSelector(selectPieces);
  const highestRowsInCol = useSelector(selectHighestRowsInColumns);
  const dispatch = useDispatch();

  return (
    <div>
      {pieces.map((row, y) => (
        <StyledRow key={y}>
          {row.map((piece, x) => (
            <Square
              key={`${x}.${y}`}
              piece={piece}
              highestRowInCol={highestRowsInCol[x]}
              onClick={() => dispatch(createPiecePlacedAction(x))}
            />
          ))}
        </StyledRow>
      ))}
    </div>
  );
};

export default Board;
