import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// eslint-disable-next-line no-unused-vars
import React from "react";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
