import styled from "styled-components";

export const Button = styled.button`
  color: #272727;
  font-family: sans-serif;
  font-size: 45px;
  border: 5px solid #272727;
  padding: 40px 80px;
  position: relative;
  background-color: transparent;
  cursor: pointer;
  letter-spacing: 2px;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
`;
