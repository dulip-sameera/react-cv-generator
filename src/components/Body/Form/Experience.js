import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem";
import SectionTitle from "./styles/SectionTitle.styles";

export class Experience extends Component {
  render() {
    const { data, onChangeFn, deleteFn, addFn } = this.props;
    const testOb = {
      id: "1",
      position: "Senior Web Developer",
      company: "Facebook Inc.",
      address: "Menlo Park",
      from: "2012",
      to: "2015",
    };

    return (
      <div>
        <SectionTitle>Experience</SectionTitle>
        <ExperienceItem
          id={testOb.id}
          position={testOb.position}
          company={testOb.company}
          address={testOb.address}
          from={testOb.from}
          to={testOb.to}
          deleteFn={deleteFn}
          key={testOb.id}
        />
      </div>
    );
  }
}

export default Experience;
