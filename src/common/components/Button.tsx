import React, { FC, ComponentProps } from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const StyledButton = styled(motion.button)`
  padding: 8px;
  margin: 4px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  min-width: 100px;
  border: solid black 1px;
  box-sizing: content-box;
  background-color: #ffffea;
  transition: all 0.3s;

  &:hover {
    background-color: #e3e3d1;
  }
`;

export const Button: FC<ComponentProps<typeof StyledButton>> = props => (
  <StyledButton {...props} />
);
