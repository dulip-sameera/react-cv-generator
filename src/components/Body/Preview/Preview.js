import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import SideBar from "./SideBar";

const LayoutDiv = styled.div`
  background: ${({ theme }) => theme.colors.grey};

  grid-column: 2/3;

  display: grid;
  grid-template-rows: 120px 1fr;
  min-height: 900px;
  height: fit-content;
`;

const BodyDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 280px;
`;

export class Preview extends Component {
  render() {
    const { info } = this.props;
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
      <LayoutDiv>
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
  }
}

export default Preview;
