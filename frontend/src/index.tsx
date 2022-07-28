import React from "react";
import {App} from "./App";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");

if (!container) {
  throw new Error("id present in the container was not found!");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
