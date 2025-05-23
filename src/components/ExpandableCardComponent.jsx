import { useState } from "react";
import styled from "styled-components";
import { MichaelKnight } from "../assets/images";

const StyledCard = styled.div`
  position: relative;
  width: 350px;
  height: ${({ $active }) => ($active ? "420px" : "85px")};
  background-color: #192a56;
  border-radius: 20px;
  transition: 0.5s;
`;

const Toggle = styled.button`
  position: absolute;
  width: 70px;
  height: 60px;
  background-color: #192a56;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  cursor: pointer;
  border: none;
  outline: none;

  &:before {
    content: "";
    position: absolute;
    width: 35px;
    height: 35px;
    background-color: transparent;
    left: -34px;
    top: 0;
    border-top-right-radius: 35px;
    box-shadow: 11px -10px 0 10px #192a56;
  }

  &:after {
    content: "";
    position: absolute;
    width: 35px;
    height: 35px;
    background-color: transparent;
    right: -34px;
    top: 0;
    border-top-left-radius: 35px;
    box-shadow: -11px -10px 0 10px #192a56;
  }
`;

const ToggleArrow = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%)
    rotate(${({ $active }) => ($active ? "225deg" : "45deg")});
  transition: 0.5s;
`;

const Content = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
`;

const ContentBx = styled.div`
  position: relative;
  padding: 20px;
  text-align: center;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h2`
  color: #fff;
  font-weight: 500;
  font-size: 1.25em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.1em;
`;

const SubHeading = styled.span`
  font-size: 0.75em;
  font-weight: 400;
  text-transform: capitalize;
`;

const ImgBx = styled.div`
  position: relative;
  width: 240px;
  height: 250px;
  margin-top: 20px;
  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.15);
  border: 5px solid #fff;
  border-radius: 5px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  position: relative;
  margin-top: 20px;
  padding: 10px 35px;
  border-radius: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
  color: #333;
  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.15);
`;

export const ExpandableCardComponent = () => {
  const [active, setActive] = useState(false);
  return (
    <StyledCard $active={active}>
      <Content>
        <ContentBx>
          <Heading>
            Michael Knight <br />
            <SubHeading>F.L.A.G.</SubHeading>
          </Heading>
          <ImgBx>
            <Image src={MichaelKnight} />
          </ImgBx>
          <Button>Let's go!</Button>
        </ContentBx>
      </Content>
      <Toggle onClick={() => setActive((prev) => !prev)}>
        <ToggleArrow $active={active}></ToggleArrow>
      </Toggle>
    </StyledCard>
  );
};
