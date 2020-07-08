import React from "react";
import styled from "styled-components";

const TitleTextWrapper = styled.div`
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  width: 100%;
  .title-text {
    text-transform: uppercase;
    /* display: inline-block; */
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
    <TitleTextWrapper>
      <h1 className="title-text">{props.text}</h1>
    </TitleTextWrapper>
  );
}

export default TitleText;
