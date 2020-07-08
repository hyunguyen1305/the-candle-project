import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import iconHomePage from "../assets/images/icon.png";

import { MdClose } from "react-icons/md";

const PromotionWrapper = styled.div`
  display: ${(props) => (props.closeNav ? "none" : "flex")};
  -webkit-align-items: center;
  align-items: center;

  -webkit-justify-content: space-between;
  justify-content: space-between;

  padding: 0 12px;
  height: 40px;
  width: 100%;

  background-color: rgb(230, 124, 115);
  color: white;

  .icon-close {
    cursor: pointer;
    margin-left: auto;
    font-size: 2rem;
  }
`;

const NavBarWrapper = styled.nav`
  background-color: white;
  .homepage {
    display: inline-block;
    font-family: "Oswald", sans-serif;
    padding: 16px 8px;
    font-weight: 400;
    font-size: 16pt;
  }
`;

function NavBar() {
  const [closeNav, setClose] = useState(false);
  return (
    <header>
      <PromotionWrapper closeNav={closeNav} className="container-fluid">
        <div></div>
        <div>Khuyến mãi: Giảm 100%</div>
        <div onClick={() => setClose(true)}>
          <MdClose className="icon-close" color="white"></MdClose>
        </div>
      </PromotionWrapper>
      <NavBarWrapper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            boxShadow: "rgba(0, 0, 0, 0.5) 0px 2px 2px",
          }}
          className="container-fluid"
        >
          <Link to="/" title="Homepage - The Candle Project">
            <img
              src={iconHomePage}
              alt="The Candle Project"
              style={{
                width: "60px",
                height: "60px",
                padding: "8px",
                verticalAlign: "middle",
              }}
            ></img>
          </Link>
          <Link to="/" title="Homepage - The Candle Project">
            <div className="homepage">The Candle Project</div>
          </Link>
        </div>
      </NavBarWrapper>
    </header>
  );
}

export default NavBar;
