import React from "react";
import Slider from "react-slick";

function Modal({ item }) {
  const sliderImages = [item.bigImage, ...item.listImages];
  console.log(sliderImages);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    cssEase: "linear",
    customPaging: function (i) {
      return (
        <a key={i}>
          <img src={sliderImages[i]} style={{ maxWidth: "100%" }} alt={i} />
        </a>
      );
    },
    dotsClass: "slick-dots slick-thumb",
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5 col-lg-5 col-xl-5 col-sm-12 col-xs-12 modal-image py-3">
          <Slider {...settings}>
            {sliderImages.map((item, i) => {
              return (
                <img
                  key={i}
                  src={item}
                  alt="Summer Collection (No.1)"
                  style={{
                    maxWidth: "100%",
                    display: "block",
                    objectFit: "scale-down",
                  }}
                ></img>
              );
            })}
          </Slider>
        </div>
        <div className="col-md-7 col-lg-7 col-xl-7 col-sm-12 col-xs-12 modal-info my-5">
          <h4 className="" title={item.text}>
            {item.text}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Modal;
