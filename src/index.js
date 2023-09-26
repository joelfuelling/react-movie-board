import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./components/UI/starRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "OK", "Good", "Great"]}
    />
    <StarRating className="test" />
  </React.StrictMode>
);
