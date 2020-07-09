import React, { useEffect, useRef, useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import TitleText from "./components/TitleText";
import ProductItem from "./components/ProductItem";
import Footer from "./components/Footer";

import lavender from "./assets/images/lavender.png";
import cinnamon from "./assets/images/cinnamon.png";
import mint from "./assets/images/mint.png";
import orange from "./assets/images/orange.png";
import placeholder from "./assets/images/1280.png";
import MessengerCustomerChat from "react-messenger-customer-chat";

const listProduct = [
  {
    bigImage: lavender,
    colorTheme: "#D1AFC7",
    listImages: [placeholder, placeholder, placeholder, placeholder],
    text: "Summer Collection (No.1)",
    info: "This is Info",
  },
  {
    bigImage: cinnamon,
    colorTheme: "#D5A670",
    listImages: [placeholder, placeholder, placeholder, placeholder],
    text: "Summer Collection (No.2)",
    info: "This is Info",
  },
  {
    bigImage: mint,
    colorTheme: "#98D4BB",
    listImages: [placeholder, placeholder, placeholder, placeholder],
    text: "Summer Collection (No.3)",
    info: "This is Info",
  },
  {
    bigImage: orange,
    colorTheme: "#FFCAAF",
    listImages: [placeholder, placeholder, placeholder, placeholder],
    text: "Summer Collection (No.4)",
    info: "This is Info",
  },
];

function App() {
  const [isSticky, setSticky] = useState(false);
  const [isShowMess, setShow] = useState(false);
  const ref = useRef(null);
  const refMess = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <div className="full-page">
      <div className={`${isSticky ? " sticky" : ""}`} ref={ref}>
        <NavBar></NavBar>
      </div>
      {console.log("refSlide ", ref)}
      {console.log("refMess ", refMess)}
      <main>
        <section className="container py-3">
          <TitleText text="The Candle Project" full={false}></TitleText>
        </section>
        <section className="container py-3">
          <div className="row">
            {listProduct.map((item) => {
              return (
                <div
                  className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-xs-12"
                  key={item.text}
                >
                  <ProductItem item={item}></ProductItem>
                </div>
              );
            })}
          </div>
        </section>
        <section className="container py-3">
          <TitleText text="The Candle Project" full={true}></TitleText>
        </section>
        <section className="container py-3">
          <div className="row">
            {listProduct.map((item) => {
              return (
                <div
                  className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-xs-12"
                  key={item.text}
                >
                  <ProductItem item={item}></ProductItem>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <button onClick={() => setShow(!isShowMess)}>Show/hide</button>
      <Footer></Footer>
      <MessengerCustomerChat
        pageId="112921177133784"
        htmlRef={refMess}
        appId="271352487290845"
        themeColor="#0084ff"
        loggedInGreeting="Xin chào ..."
        loggedOutGreeting="Chao Xìn ..."
        language="vi_VN"
      />
    </div>
  );
}

export default App;
