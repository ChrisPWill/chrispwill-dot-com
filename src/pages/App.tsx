import * as React from "react";
import tw from "twin.macro";
import { Link, Outlet } from "react-router-dom";

import { BlueButton } from "../components/buttons";

const Title = tw.div`text-3xl font-bold`;
const TopNav = tw.div`my-2`;

export function App() {
  return (
    <>
      <Title><Link to="/">Chris Williams</Link></Title>
      <TopNav>
        <Link to="/"><BlueButton>Home</BlueButton></Link>
        <Link to="resume"><BlueButton>Resume</BlueButton></Link>
      </TopNav>
      <Outlet />
    </>
  );
}
