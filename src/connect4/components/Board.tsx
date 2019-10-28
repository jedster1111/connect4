import React, { FC } from "react";
import { PieceTypes, Pieces } from "../types";
import styled from "styled-components";

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

type BoardProps = {
  pieces: Pieces;
  onClickCol: (col: number) => void;
};

const Board: FC<BoardProps> = ({ pieces, onClickCol }) => (
  <div>
    {pieces.map((row, y) => (
      <StyledRow key={y}>
        {row.map((piece, x) => (
          <Square
            key={`${x}.${y}`}
            piece={piece}
            onClick={() => onClickCol(x)}
          />
        ))}
      </StyledRow>
    ))}
  </div>
);

export default Board;
