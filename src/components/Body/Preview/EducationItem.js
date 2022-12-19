import React from "react";
import styled from "styled-components";
import { Description, SubTitle } from "./styles";

const LayoutDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

const Period = styled(SubTitle)`
  grid-column: 1/2;
`;
const UniversityName = styled(SubTitle)``;

const Degree = styled(Description)`
  margin-bottom: 0px;
`;

const Subject = styled(Description)`
  margin-bottom: 0px;
`;

const EducationItem = ({ from, to, universityName, city, degree, subject }) => {
  return (
    <LayoutDiv>
      <Period>
        {from} - {to}
      </Period>
      <div>
        <UniversityName>
          {universityName}, {city}
        </UniversityName>
        <Degree>Degree: {degree}</Degree>
        <Subject>Subject: {subject}</Subject>
      </div>
    </LayoutDiv>
  );
};

export default EducationItem;
