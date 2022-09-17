import * as React from "react";

import { LinkUnderlined as LinkStyle } from "../components/link-styles";
import { Content, Heading, Section, SectionDivider } from "../components/text";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <>
      <Section>
        <Heading>About me</Heading>
        <Content>
          Hi there. I&apos;m Chris Williams. I&apos;m a software engineer
          working in the Ecosystem team at Atlassian. In my spare time I like
          cooking, travelling, and Japanese culture!
        </Content>
      </Section>
      <SectionDivider />
      <Section>
        <Heading>Professional Info</Heading>
        <Content>
          Check out my{" "}
          <LinkStyle>
            <Link to="/resume">resume</Link>
          </LinkStyle>
          !
        </Content>
      </Section>
      <SectionDivider />
      <Section>
        <Heading>External Links</Heading>
        <div>
          <LinkStyle>
            <a
              target="_blank"
              href="https://github.com/ChrisPWill"
              rel="noreferrer"
            >
              Github
            </a>
          </LinkStyle>
        </div>
        <div>
          <LinkStyle>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/chrispwill"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </LinkStyle>
        </div>
      </Section>
    </>
  );
};
