import styled from "styled-components";

const StyledLetter = styled.span`
  color: #555;
  transition-property: color, text-shadow;
  transition-duration: 0.25s;
`;

const Heading = styled.h2`
  position: relative;
  font-size: 3em;
  letter-spacing: 0.05em;
  cursor: default;
  text-transform: uppercase;
  font-weight: 500;

  &:hover ${StyledLetter} {
    color: #00ff2a;
    text-shadow: 0 0 5px #0f0, 0 0 15px #0f0, 0 0 30px #0f0;
  }
`;

export const AnimatedTextComponent = ({ children }) => {
  const spans = children.split("").map((letter, i) => (
    <StyledLetter
      key={i}
      style={{
        transitionDelay: `${i * 40}ms`,
        filter: `hue-rotate(${i * 30}deg)`,
      }}
    >
      {letter}
    </StyledLetter>
  ));
  return <Heading>{spans}</Heading>;
};
