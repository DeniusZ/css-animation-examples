import styled from "styled-components";
import { AnimatedTextComponent } from "../components/AnimatedTextComponent";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  background-color: #222;
`;

export const AnimatedText = () => {
  return (
    <Main>
      <AnimatedTextComponent>hover over me!</AnimatedTextComponent>
    </Main>
  );
};
