import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const StyledButton = styled(Button)`
  &:before {
    content: "YEAH!";
    background-color: #f44336;
    transition: 1s;
    transform: translateY(-100%);
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  &:hover:before {
    transform: translateY(0);
  }
`;

export const Button5 = () => {
  return <StyledButton>Hover Me</StyledButton>;
};
