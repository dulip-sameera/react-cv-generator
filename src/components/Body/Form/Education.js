import React from "react";
import EducationItem from "./EducationItem";
import styled from "styled-components";
import SectionTitle from "./styles/SectionTitle.styles";
import { Button } from "./Utils";

const SectionTitleDif = styled(SectionTitle)`
  margin-top: 1.5rem;
`;

const Education = ({ data, onChangeFn, deleteFn, addFn }) => {
  return (
    <div>
      <SectionTitleDif>Education</SectionTitleDif>

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
};

export default Education;
