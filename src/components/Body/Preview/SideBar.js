import React, { Component } from "react";
import styled from "styled-components";
import defaultImage from "../../../assets/profile_pic.png";
import { Description, SectionTitle, SubTitle } from "./styles";

const LayoutDiv = styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  background: ${({ theme }) => theme.colors.grey};
`;

const Image = styled.img`
  width: 220px;
  height: 280px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: 220px;

  & > *:hover {
    cursor: default;
  }
`;

export class SideBar extends Component {
  render() {
    let { image, address, email, phoneNumber } = this.props;

    if (!image) {
      image = defaultImage;
    }

    return (
      <LayoutDiv>
        <Image src={image} />
        <Container>
          <SectionTitle>Personal Details</SectionTitle>

          <SubTitle>Address</SubTitle>
          <Description>{address}</Description>

          <SubTitle>Phone Number</SubTitle>
          <Description>{phoneNumber}</Description>

          <SubTitle>Email</SubTitle>
          <Description>{email}</Description>
        </Container>
      </LayoutDiv>
    );
  }
}

export default SideBar;
