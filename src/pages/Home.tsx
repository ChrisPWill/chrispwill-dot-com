import * as React from "react";
import tw from "twin.macro";

const Container = tw.div`
  px-3
  mx-auto
  container
`;

const Section = tw.div`
  mb-5
  lg:text-2xl
`;

const Heading = tw.div`
  text-xl
  lg:text-3xl
  font-bold
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
      </Section>
    </Container>
  );
}
