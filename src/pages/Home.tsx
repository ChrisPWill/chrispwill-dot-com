import * as React from "react";

import { Link as LinkStyle } from "../components/link-styles";
import { Content, Heading, Section, SectionDivider } from "../components/text";

export function Home() {
  return (
    <>
      <Section>
        <Heading>About me</Heading>
        <Content>
          Hi there. I'm Chris Williams. I'm a software engineer working in the
          Ecosystem team at Atlassian. In my spare time I like cooking,
          travelling, and Japanese culture!
        </Content>
      </Section>
      <SectionDivider />
      <Section>
        <Heading>External Links</Heading>
        <LinkStyle tw="underline">
          <a target="_blank" href="https://github.com/ChrisPWill">
            Github
          </a>
        </LinkStyle>
        <LinkStyle tw="underline">
          <a target="_blank" href="https://www.linkedin.com/in/chrispwill">
            LinkedIn
          </a>
        </LinkStyle>
      </Section>
    </>
  );
}
