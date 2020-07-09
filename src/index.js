import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <MessengerCustomerChat
      pageId="112921177133784"
      appId="271352487290845"
      themeColor="#0084ff"
      loggedInGreeting="Xin chào ..."
      greetingDialogDisplay="fade"
      language="vi_VN"
    />
  </BrowserRouter>,
  document.getElementById("root")
);
