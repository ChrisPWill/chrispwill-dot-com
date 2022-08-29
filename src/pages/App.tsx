import * as React from "react";
import tw from "twin.macro";
import { Link, Outlet } from "react-router-dom";

const Title = tw.div`text-3xl font-bold`;
const TopNav = tw.div`my-2`;
const Button = tw.span`font-bold py-2 px-4 rounded mx-1`;
const BlueButton = tw(Button)`bg-gray-500 hover:bg-gray-700 text-white`

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
