import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const StyledButton = styled(Button)`
  &:before {
    background-color: #fff200;
    transform-origin: top right;
    transform: rotate(90deg);
    transition: transform 1s;
  }

  &:hover:before {
    transform: rotate(0deg);
  }
`;

export const Button1 = () => {
  return <StyledButton>Hover Me</StyledButton>;
};
