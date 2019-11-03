import React, { FC, CSSProperties } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import { PieceTypes, NonEmptyPieceTypes } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { selectPieces, selectHighestRowsInColumns } from "../redux/selectors";
import { createPiecePlacedAction } from "../redux/actions";

const Counter: FC<{ styles: CSSProperties; piece: NonEmptyPieceTypes }> = ({
  styles,
  piece
}) => (
  <animated.svg
    height={30}
    width={30}
    transform={styles.transform}
    opacity={styles.opacity}
    style={{ position: "absolute" }}
  >
    <circle r={15} cx={15} cy={15} fill={piece === "X" ? "red" : "yellow"} />
  </animated.svg>
);

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

const StyledRow = styled.div`
  display: flex;
`;

const Square: FC<{
  piece: PieceTypes;
  highestRowInCol: number | undefined;
  onClick: () => void;
}> = ({ piece, onClick, highestRowInCol }) => {
  const transitions = useTransition(piece, null, {
    from: {
      transform: `translate(0 -${(highestRowInCol === undefined
        ? -1
        : highestRowInCol + 1) * 50})`,
      opacity: 1
    },
    enter: { transform: "translate(0 0)", opacity: 1 },
    leave: { transform: "translate(0 0)", opacity: 0 }
  });
  return (
    <StyledSquare onClick={onClick}>
      {transitions.map(({ item, key, props }) => {
        return item && <Counter key={key} styles={props} piece={item} />;
      })}
    </StyledSquare>
  );
};

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
