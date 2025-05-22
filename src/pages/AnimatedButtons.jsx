import styled from "styled-components";
import {
  Button1,
  Button2,
  Button3,
  Button4,
  Button5,
} from "../components/Buttons/";

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  margin: 4rem;
`;

export const AnimatedButtons = () => {
  return (
    <Container>
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </Container>
  );
};
