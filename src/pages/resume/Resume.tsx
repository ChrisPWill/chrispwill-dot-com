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
  ExperienceBylineUnderline,
  ExperienceDetail,
  ExperienceSkill,
  ExperienceTitle,
} from "./experience";
import { LinkUnderlined } from "../../components/link-styles";

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
              <ExperienceBylineUnderline>Apr 2020</ExperienceBylineUnderline>
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
                <ExperienceSkill>PostgreSQL</ExperienceSkill>
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
              <ExperienceBylineUnderline>Jun 2017</ExperienceBylineUnderline>
              <ExperienceDetail>Engineering Team Lead</ExperienceDetail>
              <ExperienceByline>Description</ExperienceByline>
              <ExperienceDetail>
                I led a team of engineers working on constant improvements to
                the site and its backend services.
              </ExperienceDetail>
              <ExperienceByline>Notable work</ExperienceByline>
              <ExperienceDetail>
                <div className="mb-2">
                  I led the development of the{" "}
                  <LinkUnderlined>
                    <a
                      target="_blank"
                      href="https://www.escrow.com/api"
                      rel="noreferrer"
                    >
                      Escrow Platform Api
                    </a>{" "}
                  </LinkUnderlined>{" "}
                  - the biggest new development in the business enabling simpler
                  integration between other platforms and products.
                </div>
                <div>
                  I also led the migration of the Microsoft SQL Server database
                  to support Unicode, an involved process which involved
                  scripts, safeguards and detailed change management.
                </div>
              </ExperienceDetail>
              <ExperienceBylineUnderline>Mar 2016</ExperienceBylineUnderline>
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
        <Heading>Education</Heading>
        <Content>
          <div>
            <ExperienceTitle>University of New South Wales</ExperienceTitle>
            <div>
              <ExperienceBylineUnderline>2010-2015</ExperienceBylineUnderline>
              <ExperienceDetail>
                Bachelor&apos;s Degree, Mechanical Engineering
              </ExperienceDetail>
              <ExperienceByline>Performance</ExperienceByline>
              <ExperienceDetail>Class 1 Honours</ExperienceDetail>
              <ExperienceByline>Activities and Societies</ExperienceByline>
              <ExperienceDetail>
                UNSW Kendo Club, UNSW Mechatronics Society
              </ExperienceDetail>
              <ExperienceByline>Skills</ExperienceByline>
              <ExperienceDetail>
                <ExperienceSkill>C++</ExperienceSkill>
                <ExperienceSkill>Matlab</ExperienceSkill>
                <ExperienceSkill>CAD</ExperienceSkill>
                <ExperienceSkill>3D Modelling</ExperienceSkill>
              </ExperienceDetail>
            </div>
          </div>
          <div>
            <ExperienceTitle>Other Education</ExperienceTitle>
            <div>
              <ExperienceBylineUnderline>2019</ExperienceBylineUnderline>
              <ExperienceDetail>
                KCP International Language School
              </ExperienceDetail>
              <ExperienceByline>Location</ExperienceByline>
              <ExperienceDetail>Shinjuku, Tokyo - Japan</ExperienceDetail>
              <ExperienceByline>Description</ExperienceByline>
              <ExperienceDetail>
                An intensive Japanese language school located in the heart of
                Tokyo.
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
