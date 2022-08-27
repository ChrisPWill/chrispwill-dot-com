import * as React from "react";
import tw from "twin.macro";

const Title = tw.div`text-3xl font-bold`;
const SubTitle = tw.div`text-2xl`;

export function App() {
  return (
    <>
      <Title>Chris Williams</Title>
      <SubTitle>A software engineer's site</SubTitle>
    </>
  );
}
