import * as React from "react";
import { Outlet } from "react-router-dom";

import { TopBar } from "../components/TopBar";

export function App() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}
