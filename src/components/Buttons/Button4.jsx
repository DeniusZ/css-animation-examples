import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const StyledButton = styled(Button)`
  color: #e1332d;
  border: 3px solid #e1332d;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 300;
  letter-spacing: -2px;
  transition: all 0.5s;

  &:hover {
    letter-spacing: 10px;
    font-weight: 900;
    border-width: 7px;
  }
`;

export const Button4 = () => {
  return (
    <StyledButton href="#" isBlue={true}>
      Hover Me
    </StyledButton>
  );
};
