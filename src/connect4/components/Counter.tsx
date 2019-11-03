import React, { FC } from "react";
import { Transition, motion } from "framer-motion";
import { NonEmptyPieceTypes } from "../types";

const spring: Transition = {
  type: "spring",
  damping: 26,
  stiffness: 350
};

export const Counter: FC<{
  piece: NonEmptyPieceTypes;
  highestRowInCol: number;
}> = ({ piece, highestRowInCol }) => (
  <motion.svg
    transition={spring}
    height={30}
    width={30}
    style={{ position: "absolute" }}
    initial={{
      translateY:
        (highestRowInCol === undefined ? -1 : highestRowInCol + 2) * -50,
      opacity: 1
    }}
    animate={{ translateY: 0, opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <circle r={15} cx={15} cy={15} fill={piece === "X" ? "red" : "yellow"} />
  </motion.svg>
);
