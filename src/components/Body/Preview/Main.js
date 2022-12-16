import React, { Component } from "react";
import styled from "styled-components";
import { Description, SectionTitle } from "./styles";

const LayoutDiv = styled.div`
  grid-column: 1/2;
  background: ${({ theme }) => theme.colors.white};
  padding: 30px 20px;

  & > *:hover {
    cursor: default;
  }
`;

export class Main extends Component {
  render() {
    const { description } = this.props;

    return (
      <LayoutDiv>
        <SectionTitle>Description</SectionTitle>
        <Description>{description}</Description>
      </LayoutDiv>
    );
  }
}

export default Main;
