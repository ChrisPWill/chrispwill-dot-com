import * as React from "react";
import { Outlet } from "react-router-dom";
import tw from "twin.macro";

import { TopBar } from "../components/TopBar";

const Container = tw.div`
  sm:container
  sm:mx-auto
  grid
  grid-flow-row
  items-center
  my-3
`;

const TopBarWrapper = tw.div`
  col-span-full
  sm:col-span-3
  sm:col-start-1
  sm:row-start-1
  row-start-1
  sm:mx-auto
  sm:w-32
  md:w-64
  lg:w-96
`;

const OutletWrapper = tw.div`
  col-span-full
  row-start-2
  sm:col-span-4
  sm:col-start-4
  sm:row-start-1
`;

export function App() {
  return (
    <Container>
      <TopBarWrapper><TopBar /></TopBarWrapper>
      <OutletWrapper><Outlet /></OutletWrapper>
    </Container>
  );
}
