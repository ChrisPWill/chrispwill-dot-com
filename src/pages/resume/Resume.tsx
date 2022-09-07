import * as React from "react";

import {
  Content,
  Heading,
  Section,
  SectionDivider,
} from "../../components/text";
import {
  Certification,
  CertificationImage,
  CertificationInfo,
  CertificationTitle,
} from "./certification";
import {
  ExperienceByline,
  ExperienceDetail,
  ExperienceSkill,
  ExperienceTitle,
} from "./experience";

export const Resume: React.FC = () => {
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
        <Heading>Work Experience</Heading>
        <Content>
          <div>
            <ExperienceTitle>Atlassian</ExperienceTitle>
            <div>
              <ExperienceByline>Apr 2020</ExperienceByline>
              <ExperienceDetail>Software Engineer</ExperienceDetail>
              <ExperienceByline>Description</ExperienceByline>
              <ExperienceDetail>
                I currently work in the Ecosystem Access team within Atlassian,
                improving the state of the technologies used to power
                Atlassian&apos;s addon system in cloud.
              </ExperienceDetail>
              <ExperienceByline>Skills</ExperienceByline>
              <ExperienceDetail>
                <ExperienceSkill>AWS</ExperienceSkill>
                <ExperienceSkill>Typescript</ExperienceSkill>
                <ExperienceSkill>ReactJS</ExperienceSkill>
                <ExperienceSkill>GraphQL</ExperienceSkill>
                <ExperienceSkill>NodeJS</ExperienceSkill>
                <ExperienceSkill>Java</ExperienceSkill>
                <ExperienceSkill>Spring Boot</ExperienceSkill>
              </ExperienceDetail>
            </div>
          </div>
          <div>
            <ExperienceTitle>Escrow.com</ExperienceTitle>
            <div>
              <ExperienceByline>Jun 2017</ExperienceByline>
              <ExperienceDetail>Engineering Team Lead</ExperienceDetail>
              <ExperienceByline>Description</ExperienceByline>
              <ExperienceDetail>
                I lead a team of engineers working on constant improvements to
                the site and its backend services. I led the development of the
                Escrow Platform API, the biggest new development in the business
                in almost two decades.
              </ExperienceDetail>
              <ExperienceByline>Mar 2016</ExperienceByline>
              <ExperienceDetail>Software Engineer</ExperienceDetail>
              <ExperienceByline>Description</ExperienceByline>
              <ExperienceDetail>
                I took part in full stack development on Escrow.com from backend
                work (mainly C#, Python and SQL Server) to frontend work
                (ReactJS).
              </ExperienceDetail>
              <ExperienceByline>Skills</ExperienceByline>
              <ExperienceDetail>
                <ExperienceSkill>C#</ExperienceSkill>
                <ExperienceSkill>Python</ExperienceSkill>
                <ExperienceSkill>Javascript</ExperienceSkill>
                <ExperienceSkill>ReactJS</ExperienceSkill>
                <ExperienceSkill>SQL Server</ExperienceSkill>
              </ExperienceDetail>
            </div>
          </div>
        </Content>
      </Section>
      <Section>
        <Heading>Certifications</Heading>
        <a
          target="_blank"
          href="https://www.credly.com/badges/1dd7d7f7-f7aa-4999-b9e2-e8e4d3186ce8/public_url"
          rel="noreferrer"
        >
          <Certification>
            <CertificationImage src="https://media.chrispwill.com/aws-certified-solutions-architect-associate.png" />
            <CertificationInfo>
              <CertificationTitle>
                AWS Solutions Architect - Associate
              </CertificationTitle>
              Achieved on August 20, 2022
            </CertificationInfo>
          </Certification>
        </a>
      </Section>
    </>
  );
};
