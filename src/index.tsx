import React from "react";
import * as ReactDOMCLIENT from "react-dom/client";
import "./index.css";
import App from "./App";

// @ts-ignore 
const root = ReactDOMCLIENT.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{<App />}</React.StrictMode>);
