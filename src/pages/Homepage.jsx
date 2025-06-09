import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
`;

export const Homepage = () => {
  return (
    <StyledNav>
      <Link to="animatedText">Animated Neon Text</Link>
      <Link to="animatedText2">Animated Neon Text 2</Link>
      <Link to="parallax">Parallax Landing Page</Link>
      <Link to="animatedButtons">Animated Buttons 1</Link>
      <Link to="expandableCard">Expandable Card</Link>
      <Link to="scrollAnimation">Scroll Animation</Link>
      <Link to="scrollAnimation2">Scroll Animation 2</Link>
    </StyledNav>
  );
};
