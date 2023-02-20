import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Styles
import "./assets/styles/style.scss";
import "./assets/styles/responsive.scss";

ReactDOM.createRoot(document.getElementById("container")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
