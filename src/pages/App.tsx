import * as React from "react";
import { Outlet } from "react-router-dom";
import tw from "twin.macro";

import { TopBar } from "../components/TopBar";

const Container = tw.div`
  md:container
  md:mx-auto
  grid
  grid-flow-row
  items-center
`;

const TopBarWrapper = tw.div`
  md:h-screen
  col-span-full
  md:col-span-3
  md:col-start-1
  md:row-start-1
  row-start-1
  md:w-64
  lg:w-96
  bg-gradient-to-tl
  from-blue-500
  to-green-200
  md:bg-gradient-to-b
  md:from-blue-500
  md:to-green-200
`;

const OutletWrapper = tw.div`
  md:h-screen
  py-4
  md:py-8
  md:px-8
  col-span-full
  row-start-2
  md:col-span-4
  md:col-start-4
  md:row-start-1
`;

export function App() {
  return (
    <Container>
      <TopBarWrapper><TopBar /></TopBarWrapper>
      <OutletWrapper><Outlet /></OutletWrapper>
    </Container>
  );
}
