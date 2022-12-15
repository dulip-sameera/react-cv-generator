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
`;

const BodyDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
`;

export class Preview extends Component {
  render() {
    const { info } = this.props;
    const { personalInfo } = info;
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
          <Main description={description} />
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
