import styled from "styled-components";
import { ExpandableCardComponent } from "../components/ExpandableCardComponent";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  background-color: #0fece1;
`;

export const ExpandableCard = () => {
  return (
    <Main>
      <ExpandableCardComponent>Hello world!</ExpandableCardComponent>
    </Main>
  );
};
