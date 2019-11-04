import React, { FC } from "react";
import { ReactComponent as Medal } from "../../static/medal.svg";
import styled from "styled-components";
import { NonEmptyPieceTypes } from "../types";
import { Counter } from "./Counter";
import { motion, AnimatePresence, Variants } from "framer-motion";

const StyledWinnerWrapper = styled(motion.div)`
  position: absolute;
  top: 35px;
  left: 50%;
  background-color: rgba(255, 94, 91, 0.95);
  width: 150px;
  height: 150px;
  border-radius: 15px;
  padding: 8px 4px;
  box-shadow: 10px 10px 18px -6px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledTextWrapper = styled(motion.div)`
  margin: 16px;
`;

const StyledCounterWrapper = styled(motion.div)`
  position: relative;
  height: 30px;
  width: 30px;
  margin: 8px;
`;

const childVariants: Variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -50 }
};

const wrapperVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    scale: 1
  },
  closed: {
    transition: {
      when: "afterChildren"
    },
    scale: 0
  }
};
export const Winner: FC<{ piece: NonEmptyPieceTypes }> = ({ piece }) => (
  <StyledWinnerWrapper
    initial="closed"
    animate="open"
    exit="closed"
    variants={wrapperVariants}
    style={{ translateX: "-50%" }}
  >
    <StyledTextWrapper variants={childVariants}>Winner!</StyledTextWrapper>
    <motion.div variants={childVariants}>
      <Medal width={50} height={50} />
    </motion.div>
    <StyledCounterWrapper variants={childVariants}>
      <Counter piece={piece} />
    </StyledCounterWrapper>
  </StyledWinnerWrapper>
);
