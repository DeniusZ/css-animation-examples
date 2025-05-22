import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const StyledButton = styled(Button)`
  transition: color 1s;
  &:before {
    background-color: #272727;
    transform: translateX(-100%);
    transition: transform 1s;
  }

  &:hover {
    color: white;
  }

  &:hover:before {
    transform: translateX(0);
  }
`;

export const Button2 = () => {
  return (
    <StyledButton href="#" isBlue={true}>
      Hover Me
    </StyledButton>
  );
};
