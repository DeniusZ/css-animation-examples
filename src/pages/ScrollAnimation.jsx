import styled from "styled-components";
import { ScrollAnimationComponent } from "../components/ScrollAnimationComponent";

const Main = styled.main`
  min-height: 200dvh;
`;

export const ScrollAnimation = () => {
  return (
    <Main>
      <ScrollAnimationComponent>scroll</ScrollAnimationComponent>
    </Main>
  );
};
