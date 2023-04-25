import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
const Section = (props) => {
  return (
    <Wrap backgImage={props.bgimage}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade clear>
          <ButtonGroup>
            <LeftButton>{props.leftbtn}</LeftButton>
            {props.rightbtn && <RightButton>{props.rightbtn}</RightButton>}
          </ButtonGroup>
          <DownArrow src="images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  // border: 10px solid red;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.backgImage}")`};
`;
const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
`;

const ButtonGroup = styled.div`
  // border: 10px solid blue;
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  // border: 5px solid white;
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;
const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animationDown infinite 1.5s;
`;

const Buttons = styled.div``;
