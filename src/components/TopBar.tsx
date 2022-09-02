import * as React from "react";
import tw from "twin.macro";
import { Link } from "react-router-dom";

import { NavLink } from "./link-styles";

const Container = tw.div`
  md:container
  md:mx-auto
  grid
  grid-flow-col
  justify-items-center
  my-3
`;

const Title = tw.div`
  text-2xl
  md:text-3xl
  font-bold
  my-auto
  ml-1
  row-start-3
  md:row-start-1
  col-start-1
  md:col-start-2
  md:col-span-2
`;

const Nav = tw.div`
  my-2
  row-start-1
  md:row-start-2
  col-start-1
  md:col-start-2
  md:col-span-2
`;

const ImgPlaceholder = tw.div`
  bg-red-400
  hover:bg-red-300
  rounded-full
  w-20
  h-20
  place-self-center
  md:col-span-1
  md:row-span-2
  row-start-2
  md:row-start-1
  col-start-1
  md:col-start-1
`;

export function TopBar() {
  return (
    <Container>
      <ImgPlaceholder />
      <Title>
        <Link to="/">Chris Williams</Link>
      </Title>
      <Nav>
        <Link to="/">
          <NavLink>Home</NavLink>
        </Link>
        <Link to="resume">
          <NavLink>Resume</NavLink>
        </Link>
      </Nav>
    </Container>
  );
}
