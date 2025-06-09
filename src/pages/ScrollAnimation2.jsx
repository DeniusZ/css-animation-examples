/* import styled from "styled-components";
import { img1, img2, img3 } from "../assets/images";
import { useEffect, useRef } from "react";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background: #1f242d;
  overflow: hidden;
`;

const Section2 = styled(Section)`
  background-color: rgb(96, 30, 158);
  > p {
    color: #0f0;
  }
`;

const Section3 = styled(Section)`
  background-color: #056964;
  > p {
    color: #ff0;
  }
`;

const Section4 = styled(Section)`
  background-color: #ffa600;
  > p {
    color: #056964;
  }
`;

const Section5 = styled(Section)`
  background-color: rgb(255, 0, 85);
`;

const Heading = styled.h1`
  font-size: 90px;
  color: #fff;
`;

const Paragraph = styled.p`
  font-size: 35px;
  color: #0ef;
  font-weight: 600;
`;

const Images = styled.div`
  display: flex;
  gap: 40px;

  > img {
    max-width: 350px;
  }
`;

export const ScrollAnimation2 = () => {
  const sectionRefs = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((sec) => {
        if (!sec) return;
        const secTop = sec.offsetTop;
        const scrollY = window.scrollY;

        if (scrollY >= secTop - 150) {
          sec.classList.add("show-animate");
        } else {
          sec.classList.remove("show-animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Section class="sec1 show-animate">
        <Heading>First Section</Heading>
        <Paragraph>animation on scroll HTML, CSS & javascript</Paragraph>
      </Section>

      <Section2>
        <Heading>Second Section</Heading>
        <Paragraph>animation on scroll HTML, CSS & javascript</Paragraph>
      </Section2>

      <Section3>
        <Heading>Third Section</Heading>
        <Paragraph>animation on scroll HTML, CSS & javascript</Paragraph>
      </Section3>

      <Section4>
        <Heading>Fourth Section</Heading>
        <Paragraph>animation on scroll HTML, CSS & javascript</Paragraph>
      </Section4>

      <Section5>
        <Images>
          <img src={img1} class="animate" />
          <img src={img2} class="animate" />
          <img src={img3} class="animate" />
        </Images>
      </Section5>
    </>
  );
}; */

import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const sectionsData = [
  {
    title: "First Section",
    text: "animation on scroll HTML, CSS & javascript",
    bg: "#1f242d",
    pColor: "#0ef",
  },
  {
    title: "Second Section",
    text: "animation on scroll HTML, CSS & javascript",
    bg: "rgb(96, 30, 158)",
    pColor: "#0f0",
  },
  {
    title: "Third Section",
    text: "animation on scroll HTML, CSS & javascript",
    bg: "#056964",
    pColor: "#ff0",
  },
  {
    title: "Fourth Section",
    text: "animation on scroll HTML, CSS & javascript",
    bg: "#ffa600",
    pColor: "#056964",
  },
  {
    title: "",
    text: "",
    bg: "rgb(255, 0, 85)",
    isImageSection: true,
    images: ["img1.jpg", "img2.jpg", "img3.jpg"],
  },
];

// Styled components
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({ bg }) => bg};

  &.show-animate .animate {
    opacity: 1;
    filter: blur(0px);
  }

  ${({ type }) => {
    switch (type) {
      case "sec2":
        return css`
          .animate {
            transform: translateX(100%);
          }
          &.show-animate .animate {
            transform: translateX(0);
          }
        `;
      case "sec3":
        return css`
          .animate {
            transform: scale(0.7);
          }
          &.show-animate .animate {
            transform: scale(1);
          }
        `;
      case "sec4":
        return css`
          .animate {
            transform: rotate(30deg);
          }
          &.show-animate .animate {
            transform: rotate(0deg);
          }
        `;
      case "sec5":
        return css`
          .animate {
            transform: translateX(100%) rotate(-90deg);
          }
          &.show-animate .animate {
            transform: translateX(0) rotate(0deg);
          }

          .images {
            display: flex;
            gap: 40px;

            img {
              max-width: 350px;

              &:nth-child(2) {
                transition-delay: 0.2s;
              }

              &:nth-child(3) {
                transition-delay: 0.4s;
              }
            }
          }
        `;
      default:
        return "";
    }
  }}
`;

const H1 = styled.h1`
  font-size: 90px;
  color: #fff;
`;

const P = styled.p`
  font-size: 35px;
  font-weight: 600;
  color: ${({ color }) => color || "#0ef"};
  transition-delay: 0.2s;
`;

const Animate = styled.div`
  opacity: 0;
  filter: blur(5px);
  transition: 0.5s;
`;

export const ScrollAnimation2 = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((sec) => {
        if (!sec) return;
        const secTop = sec.offsetTop;
        const scrollY = window.scrollY;

        if (scrollY >= secTop - 150) {
          sec.classList.add("show-animate");
        } else {
          sec.classList.remove("show-animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {sectionsData.map((sec, idx) => {
        const sectionType = `sec${idx + 1}`;

        return (
          <Section
            key={idx}
            ref={(el) => (sectionRefs.current[idx] = el)}
            className={sectionType + (idx === 0 ? " show-animate" : "")}
            bg={sec.bg}
            type={sectionType}
          >
            {sec.isImageSection ? (
              <div className="images">
                {sec.images.map((src, i) => (
                  <Animate key={i} className="animate">
                    <img src={src} alt={`img${i + 1}`} />
                  </Animate>
                ))}
              </div>
            ) : (
              <>
                <Animate className="animate">
                  <H1>{sec.title}</H1>
                </Animate>
                <Animate className="animate">
                  <P color={sec.pColor}>{sec.text}</P>
                </Animate>
              </>
            )}
          </Section>
        );
      })}
    </>
  );
};
