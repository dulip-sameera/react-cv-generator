import React, { Component } from "react";
import EducationItem from "./EducationItem";

import SectionTitle from "./styles/SectionTitle.styles";
import { Button } from "./Utils";

export class Education extends Component {
  render() {
    const { data, onChangeFn, deleteFn, addFn } = this.props;

    return (
      <div>
        <SectionTitle>Education</SectionTitle>

        {data.map((item) => {
          return (
            <EducationItem
              id={item.id}
              universityName={item.universityName}
              city={item.city}
              degree={item.degree}
              subject={item.subject}
              from={item.from}
              to={item.to}
              deleteFn={deleteFn}
              key={item.id}
              onChangeFn={onChangeFn}
            />
          );
        })}

        <Button text="Add" onClickFn={addFn} type="education" />
      </div>
    );
  }
}

export default Education;
