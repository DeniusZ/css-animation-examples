import styled from "styled-components";
import { AnimatedTextComponent2 } from "../components/AnimatedTextComponent2";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  background-color: #252839;
`;

export const AnimatedText2 = () => {
  return (
    <Main>
      <AnimatedTextComponent2>colorful text</AnimatedTextComponent2>
    </Main>
  );
};
