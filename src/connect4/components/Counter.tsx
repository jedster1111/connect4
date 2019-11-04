import React, { FC } from "react";
import { Transition, motion, MotionProps } from "framer-motion";
import { NonEmptyPieceTypes } from "../types";

const spring: Transition = {
  type: "spring",
  damping: 26,
  stiffness: 350
};

export const Counter: FC<{
  piece: NonEmptyPieceTypes;
  initialAnim?: MotionProps["initial"];
}> = ({ piece, initialAnim }) => (
  <motion.svg
    transition={spring}
    height={30}
    width={30}
    style={{ position: "absolute" }}
    initial={initialAnim || { scale: 0, translateY: 0, opacity: 0 }}
    animate={{ scale: 1, translateY: 0, opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <circle
      r={14.5}
      cx={15}
      cy={15}
      fill={piece === "X" ? "red" : "yellow"}
      stroke="black"
    />
  </motion.svg>
);
