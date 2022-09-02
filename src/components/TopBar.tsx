import * as React from "react";
import tw from "twin.macro";
import { Link } from "react-router-dom";

import { NavLink } from "./link-styles";

const Container = tw.div`
  grid
  grid-flow-row
  place-items-center
  my-3
  sm:mx-auto
  sm:w-32
  md:w-64
  lg:w-96
`;

const Title = tw.div`
  text-center
  text-xl
  sm:text-2xl
  md:text-3xl
  lg:text-4xl
  font-bold
  row-start-3
  sm:row-start-2
`;

const SubTitle = tw.div`
  text-center
  text-base
  sm:text-lg
  md:text-xl
  lg:text-2xl
  row-start-4
  sm:row-start-3
`;

const Nav = tw.div`
  flex
  text-center
  sm:block
  my-2
  row-start-1
  sm:row-start-4
`;

const ImgPlaceholder = tw.div`
  bg-red-400
  hover:bg-red-300
  rounded-full
  w-20
  h-20
  lg:w-24
  lg:h-24
  sm:row-span-1
  row-start-2
  sm:row-start-1
`;

export function TopBar() {
  return (
    <Container>
      <ImgPlaceholder />
      <Title>
        <Link to="/">Chris Williams</Link>
      </Title>
      <SubTitle>Full Stack Developer</SubTitle>
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
