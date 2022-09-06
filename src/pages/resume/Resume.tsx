import * as React from "react";
import {
  Content,
  Heading,
  Section,
  SectionDivider,
} from "../../components/text";

export function Resume(): React.FC {
  return (
    <>
      <Section>
        <Heading>Profile</Heading>
        <Content>
          I&apos;m a self-taught full-stack web developer. On the backend,
          I&apos;m well versed in Relational and NoSQL DBs, REST/GraphQL APIs,
          microservice based architectures and more. On the frontend, I have
          strong experience in frontend React and CSS frameworks such as
          TailwindCSS.
        </Content>
        <Content>
          I&apos;m highly motivated by challenging problems and drive solutions
          from beginning to end.
        </Content>
      </Section>
      <SectionDivider />
      <Section>
        <Heading>Certifications</Heading>
        <Content>
          <a
            target="_blank"
            href="https://www.credly.com/badges/1dd7d7f7-f7aa-4999-b9e2-e8e4d3186ce8/public_url"
            rel="noreferrer"
          >
            <img src="https://media.chrispwill.com/aws-certified-solutions-architect-associate.png" />
          </a>
        </Content>
      </Section>
    </>
  );
}
