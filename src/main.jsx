//import React
import { createRoot } from "react-dom/client";

//import BrowserRouter
import { BrowserRouter } from "react-router-dom";

//import Styling Full Project
import "./index.css";

//import Component App
import App from "./App.jsx";

//import flowbite
import "flowbite";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <ComponentTokenProvider> */}
    <App />
    {/* </ComponentTokenProvider> */}
  </BrowserRouter>,
);
