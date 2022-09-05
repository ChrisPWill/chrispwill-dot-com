import * as React from "react";
import tw from "twin.macro";

import { Link as LinkStyle } from "../components/link-styles";

const Container = tw.div`
  px-3
  mx-auto
  container
`;

const Section = tw.div`
  mb-5
`;

const Heading = tw.div`
  text-xl
  font-bold
  border-l-8
  border-blue-400
  text-blue-400
  px-2
  pt-0
  pb-1
`;

const Content = tw.div`
`;

export function Home() {
  return (
    <Container>
      <Section>
        <Heading>About me</Heading>
        <Content>
          Hi there. I'm Chris Williams. I'm a software engineer working in the
          Ecosystem team at Atlassian.
        </Content>
      </Section>
      <Section>
        <Heading>External Links</Heading>
        <LinkStyle tw="underline"><a target="_blank" href="https://github.com/ChrisPWill">Github</a></LinkStyle>
        <LinkStyle tw="underline"><a target="_blank" href="https://www.linkedin.com/in/chrispwill">LinkedIn</a></LinkStyle>
      </Section>
    </Container>
  );
}
