import React from "react";
import styled from "styled-components";
import { Description, SubTitle } from "./styles";

const LayoutDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

const Period = styled(SubTitle)``;
const Position = styled(SubTitle)``;

const Company = styled(Description)`
  margin-bottom: 0px;
`;

const Address = styled(Description)`
  margin-bottom: 0px;
`;

const ExperienceItem = ({ from, to, address, position, company }) => {
  return (
    <LayoutDiv>
      <Period>
        {from} - {to}
      </Period>
      <div>
        <Position>{position}</Position>
        <Company>{company}</Company>
        <Address>{address}</Address>
      </div>
    </LayoutDiv>
  );
};

export default ExperienceItem;
