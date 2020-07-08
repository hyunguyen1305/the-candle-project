import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  -webkit-align-items: center;
  align-items: center;

  -webkit-justify-content: center;
  justify-content: center;

  padding: 0 12px;
  height: 64px;
  width: 100%;

  background-color: #333333;
  color: white;
`;

function Footer() {
  return (
    <footer>
      <FooterWrapper className="container-fluid">
        <div>- 2020 -</div>
      </FooterWrapper>
    </footer>
  );
}

export default Footer;
