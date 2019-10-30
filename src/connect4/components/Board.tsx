import React, { FC } from "react";
import { PieceTypes } from "../types";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectPieces } from "../redux/selectors";
import { createPiecePlacedAction } from "../redux/actions";

const StyledSquare = styled.button`
  width: 50px;
  height: 50px;
  border: solid 1px black;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const StyledRow = styled.div`
  display: flex;
`;

const Square: FC<{ piece: PieceTypes; onClick: () => void }> = ({
  piece,
  onClick
}) => <StyledSquare onClick={onClick}>{piece}</StyledSquare>;

const Board: FC = () => {
  const pieces = useSelector(selectPieces);
  const dispatch = useDispatch();

  return (
    <div>
      {pieces.map((row, y) => (
        <StyledRow key={y}>
          {row.map((piece, x) => (
            <Square
              key={`${x}.${y}`}
              piece={piece}
              onClick={() => dispatch(createPiecePlacedAction(x))}
            />
          ))}
        </StyledRow>
      ))}
    </div>
  );
};

export default Board;
