import React from "react";
import styled from "styled-components";

import Fade from "react-reveal/Fade";

const TitleTextWrapper = styled.div`
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  width: 100%;
  .title-text {
    text-transform: uppercase;
    display: ${(props) => (props.full ? "inline-block" : "block")};
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    position: relative;
    font-size: 4rem;
    font-weight: 400;
    font-family: "Oswald", sans-serif;
    font-style: italic;
  }
`;

function TitleText(props) {
  return (
    <TitleTextWrapper full={props.full}>
      <h1 className="title-text">
        <Fade top delay={500}>
          {props.text}
        </Fade>
      </h1>
    </TitleTextWrapper>
  );
}

export default TitleText;
