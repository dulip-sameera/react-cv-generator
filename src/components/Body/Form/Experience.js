import React from "react";
import ExperienceItem from "./ExperienceItem";
import SectionTitle from "./styles/SectionTitle.styles";
import { Button } from "./Utils";

const Experience = ({ data, onChangeFn, deleteFn, addFn }) => {
  return (
    <div>
      <SectionTitle>Experience</SectionTitle>

      {data.map((item) => {
        return (
          <ExperienceItem
            id={item.id}
            position={item.position}
            company={item.company}
            address={item.address}
            from={item.from}
            to={item.to}
            deleteFn={deleteFn}
            key={item.id}
            onChangeFn={onChangeFn}
          />
        );
      })}

      <Button text="Add" onClickFn={addFn} type="experience" />
    </div>
  );
};

export default Experience;
