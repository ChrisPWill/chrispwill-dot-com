import * as React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

import { TopBar } from "../components/TopBar";

const GlobalStyles = styled.div`
  font-family: "Roboto", sans-serif;
`;

const MinHeight = styled.div`
  @media (min-width: 768px) {
    min-height: 90vh;
  }
`;

const Container = tw(MinHeight)`
  md:container
  md:mx-10
  md:my-10
  md:shadow-2xl
  grid
  grid-flow-row
  items-center
`;

const TopBarWrapper = tw.div`
  md:h-full
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
  md:h-full
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
    <GlobalStyles>
      <Container>
        <TopBarWrapper>
          <TopBar />
        </TopBarWrapper>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </Container>
    </GlobalStyles>
  );
};
