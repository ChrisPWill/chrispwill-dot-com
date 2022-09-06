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
  md:col-start-1
  md:col-span-1
  md:row-start-1
  row-start-1
  bg-gradient-to-tl
  from-blue-500
  to-green-200
  md:bg-gradient-to-b
  md:from-blue-500
  md:to-green-200
`;

const OutletWrapper = tw.div`
  ml-0
  md:h-screen
  px-3
  py-4
  md:py-8
  md:px-8
  col-span-full
  row-start-2
  md:col-span-5
  md:col-start-2
  md:row-start-1
  place-self-start
`;

export const App: React.FC = () => {
  return (
    <Container>
      <TopBarWrapper>
        <TopBar />
      </TopBarWrapper>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Container>
  );
};
