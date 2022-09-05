import * as React from "react";
import { Content, Heading, Section, SectionDivider } from "../../components/text";

export function Resume() {
  return (
    <>
      <Section>
        <Heading>Profile</Heading>
        <Content>
          I'm a self-taught full-stack web developer. On the backend, I'm well
          versed in Relational and NoSQL DBs, REST/GraphQL APIs, microservice
          based architectures and more. On the frontend, I have strong
          experience in frontend React and CSS frameworks such as TailwindCSS.
        </Content>
        <Content>
          I'm highly motivated by challenging problems and drive solutions from
          beginning to end.
        </Content>
      </Section>
      <SectionDivider />
      <Section>
        <Heading>Experience</Heading>
      </Section>
      <SectionDivider />
      <Section>
        <Heading>Certifications</Heading>
      </Section>
      <SectionDivider />
      <Section>
        <Heading>Education</Heading>
      </Section>
    </>
  );
}
