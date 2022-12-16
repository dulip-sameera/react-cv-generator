import React, { Component } from "react";
import styled from "styled-components";
import EducationItem from "./EducationItem";
import ExperienceItem from "./ExperienceItem";
import { Description, SectionTitle } from "./styles";

const LayoutDiv = styled.div`
  grid-column: 1/2;
  background: ${({ theme }) => theme.colors.white};
  padding: 30px 20px;

  & > *:hover {
    cursor: default;
  }
`;

export class Main extends Component {
  render() {
    const { description, experience, education } = this.props;

    return (
      <LayoutDiv>
        <SectionTitle>Description</SectionTitle>
        <Description>{description}</Description>

        <SectionTitle>Experience</SectionTitle>
        {experience.map((item) => {
          return (
            <ExperienceItem
              key={item.id}
              from={item.from}
              to={item.to}
              position={item.position}
              company={item.company}
              address={item.address}
            />
          );
        })}

        <SectionTitle>Education</SectionTitle>
        {education.map((item) => {
          return (
            <EducationItem
              key={item.id}
              from={item.from}
              to={item.to}
              universityName={item.universityName}
              city={item.city}
              degree={item.degree}
              subject={item.subject}
            />
          );
        })}
      </LayoutDiv>
    );
  }
}

export default Main;
