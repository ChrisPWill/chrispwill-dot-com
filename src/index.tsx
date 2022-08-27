import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<App />}></Route>
    </Routes>
  </BrowserRouter>
);
