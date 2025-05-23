import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const StyledButton = styled(Button)`
  transition: 1s;
  &:before {
    background-color: #272727;
    transition: 1s;
    transform: rotateX(90deg);
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-color: #272727;
    transition: 1s;
    transform: rotateY(90deg);
  }

  &:hover {
    color: white;
  }

  &:hover:before {
    transform: rotateX(0);
  }
  &:hover:after {
    transform: rotateY(0);
  }
`;

export const Button3 = () => {
  return <StyledButton>Hover Me</StyledButton>;
};
