import * as React from "react";
import tw from "twin.macro";
import { Link, Outlet } from "react-router-dom";

const Title = tw.div`text-3xl font-bold`;

export function App() {
  return (
    <>
      <Title><Link to="/">Chris Williams</Link></Title>
      <Outlet />
    </>
  );
}
