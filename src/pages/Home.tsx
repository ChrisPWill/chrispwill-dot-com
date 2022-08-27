import * as React from "react";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const SubTitle = tw.div`text-2xl`;

export function Home() {
  return (
    <>
      <SubTitle>A software engineer's home</SubTitle>
      <Link to="resume">Resume</Link>
    </>
  );
}
