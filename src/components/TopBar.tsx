import * as React from "react";
import tw from "twin.macro";
import { Link } from "react-router-dom";

import { Link as LinkStyle } from "./link-styles";

const Container = tw.div`
  grid
  grid-flow-row
  place-items-center
  my-3
  md:mx-auto
  md:w-64
  lg:w-96
`;

const Title = tw.div`
  text-center
  text-xl
  md:text-3xl
  lg:text-4xl
  font-bold
  row-start-3
  md:row-start-2
`;

const SubTitle = tw.div`
  text-center
  text-base
  md:text-xl
  lg:text-2xl
  row-start-4
  md:row-start-3
`;

const Nav = tw.div`
  flex
  text-center
  md:block
  my-2
  row-start-1
  md:row-start-4
`;

const ProfileImg = tw.img`
  rounded-full
  w-20
  h-20
  lg:w-24
  lg:h-24
  md:row-span-1
  row-start-2
  md:row-start-1
`;

const TopBarLink = tw(LinkStyle)`
  block
`;

export const TopBar: React.FC = () => {
  return (
    <Container>
      <ProfileImg src="https://media.chrispwill.com/profile.jpg" />
      <Title>
        <Link to="/">Chris Williams</Link>
      </Title>
      <SubTitle>Software Developer @ Atlassian</SubTitle>
      <Nav>
        <Link to="/">
          <TopBarLink>Home</TopBarLink>
        </Link>
        <Link to="resume">
          <TopBarLink>Resume</TopBarLink>
        </Link>
      </Nav>
    </Container>
  );
};
