import React, { forwardRef } from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import SideBar from "./SideBar";

const LayoutDiv = styled.div`
  background: ${({ theme }) => theme.colors.grey};

  grid-column: 2/3;
  width: 210mm;
  height: 299.2mm;
  display: grid;
  grid-template-rows: 32mm 267.2mm;
`;
// 32mm 265mm;
// 136.8mm 75mm;
const BodyDiv = styled.div`
  display: grid;
  grid-template-columns: 136.8mm 75mm;
  min-width: 800px;
`;

const Preview = ({ info }, ref) => {
  const { personalInfo, experienceList, educationList } = info;
  const {
    firstName,
    lastName,
    position,
    image,
    email,
    address,
    phoneNumber,
    description,
  } = personalInfo;

  return (
    <LayoutDiv ref={ref}>
      <Header name={`${firstName} ${lastName}`} position={position} />
      <BodyDiv>
        <Main
          description={description}
          experience={experienceList}
          education={educationList}
        />
        <SideBar
          image={image}
          email={email}
          address={address}
          phoneNumber={phoneNumber}
        />
      </BodyDiv>
    </LayoutDiv>
  );
};

export default forwardRef(Preview);
