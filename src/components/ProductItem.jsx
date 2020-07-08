import React, { useRef } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Modal from "./Modal";

const MySwal = withReactContent(Swal);

const ProductItemWrapper = styled.div`
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin: 1rem 0;
  cursor: pointer;
  .product-item__image {
    max-width: 100%;
    object-fit: scale-down;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .product-item__text {
    padding: 12px 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  .quick-view {
    position: absolute;
    left: 0;
    transform: translateY(100%);
    bottom: 0;
    padding: 4px 8px;
    background-color: ${(props) => props.colorTheme};
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    color: white;
    text-transform: capitalize;
    font-family: Helvetica, sans-serif;
    text-align: center;
    width: 100%;
  }
  &:hover {
    transform: translateY(-0.5rem);
    .product-item__text {
      color: ${(props) => props.colorTheme};
    }
    .product-item__image {
      transform: translateY(-1rem);
    }
    .quick-view {
      transform: translateY(0%);
    }
  }
`;

function ProductItem({ item }) {
  const slider = useRef(null);
  const settings = {
    fade: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 750,
    cssEase: "linear",
    easing: true,
    arrows: false,
  };
  const handleClick = () => {
    MySwal.fire({
      showCloseButton: true,
      grow: "fullscreen",
      // background: "transparent",
      showConfirmButton: false,
      // focusCancel: false,
      html: <Modal item={item}></Modal>,
      showClass: {
        popup: "animate__animated animate__backInDown",
      },
      hideClass: {
        popup: "animate__animated animate__backOutUp",
      },
    });
  };
  return (
    <ProductItemWrapper
      onMouseEnter={() => {
        console.log(slider.current);
        slider.current.slickPlay();
      }}
      onMouseLeave={() => {
        slider.current.slickGoTo(0);
        slider.current.slickPause();
      }}
      colorTheme={item.colorTheme}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Slider ref={slider} {...settings}>
          <img
            src={item.bigImage}
            alt={item.text}
            className="product-item__image"
          ></img>
          {item.listImages.map((item, i) => {
            return (
              <img
                key={i}
                src={item}
                alt="Summer Collection (No.1)"
                className="product-item__image"
              ></img>
            );
          })}
        </Slider>
        <div className="quick-view" onClick={handleClick}>
          Quick View
        </div>
      </div>
      <h2
        className="product-item__text"
        title={item.text}
        onClick={handleClick}
      >
        {item.text}
      </h2>
    </ProductItemWrapper>
  );
}

export default ProductItem;
