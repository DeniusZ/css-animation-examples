import styled, { keyframes } from "styled-components";

const animateText = keyframes`
    0%, 20% {
        color: #fff2;
    }
    21%, 79% {
        color: #0f0
    }
    80%, 100% {
        color: #fff2;
    }
`;

const StyledLetter = styled.span`
  position: relative;
  animation: ${animateText} 1s linear infinite;
`;

const Heading = styled.h2`
  position: relative;
  font-size: 3em;
  letter-spacing: 0.25em;
  cursor: default;
  text-transform: uppercase;
  font-weight: 500;
  color: #fff2;
`;

export const AnimatedTextComponent2 = ({ children }) => {
  const spans = children.split("").map((letter, i) => (
    <StyledLetter
      key={i}
      style={{
        filter: `hue-rotate(${i * 50}deg)`,
        animationDuration: `${Math.random() * 5}s`,
      }}
    >
      {letter}
    </StyledLetter>
  ));
  return <Heading>{spans}</Heading>;
};
