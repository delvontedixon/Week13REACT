import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./LoginForm";
import Nav from "./Navigate";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
<>
  <Nav />
  <Login />
</>;
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
