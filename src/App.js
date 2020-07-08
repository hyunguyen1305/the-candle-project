import React from "react";

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
  return (
    <div className="full-page">
      <NavBar></NavBar>
      <main>
        <section className="container py-3">
          <TitleText text="The Candle Project"></TitleText>
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
      <Footer></Footer>
    </div>
  );
}

export default App;
