import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { App } from "./pages/App";
import { Resume } from "./pages/resume/Resume";
import { Home } from "./pages/Home";

const rootElement = document.getElementById("app") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
