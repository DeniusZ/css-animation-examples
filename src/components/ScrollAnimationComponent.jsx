import styled from "styled-components";
import { useState, useEffect } from "react";

const Section = styled.section`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #333;
  position: fixed;
`;

const Heading = styled.h2`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 18em;
`;

const HeadingCircle = styled(Heading)`
  color: transparent;
  -webkit-text-stroke: 5px #333;
`;

const Circle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Circle1 = styled(Circle)`
  background-color: #22e7c0;
  clip-path: circle(150px at 0 0);
`;

const Circle2 = styled(Circle)`
  background-color: #ffb62e;
  clip-path: circle(150px at 100% 100%);
`;

export const ScrollAnimationComponent = ({ children }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setValue(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Section>
      <Heading>{children}</Heading>
      <Circle1 style={{ clipPath: `circle(${150 + value * 0.75}px at 0 0)` }}>
        <HeadingCircle>{children}</HeadingCircle>
      </Circle1>
      <Circle2
        style={{ clipPath: `circle(${150 + value * 0.75}px at 100% 100%)` }}
      >
        <HeadingCircle>{children}</HeadingCircle>
      </Circle2>
    </Section>
  );
};
