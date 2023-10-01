import React from 'react';
import { DiCss3, DiDotnet, DiFirebase, DiGit, DiHtml5, DiJavascript, DiJavascript1, DiJsBadge, DiMsqlServer, DiMysql, DiReact, DiTypo3, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From Back-end To Front-end including databases and cloud
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <DiHtml5 size="3rem" />
          <DiCss3 size="3rem" />
          <DiJsBadge size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience in React and <br />
            Vue with Typescript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDotnet size="3rem" />
          <DiMsqlServer size="3rem" />
          <DiMysql size="3rem" />
          <DiGit size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            .NET and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDotnet size="3rem" />
          <DiJsBadge size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            XUnit, Jest and Cypress
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
