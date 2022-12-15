import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";

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
    const { firstName, lastName, position } = personalInfo;

    return (
      <LayoutDiv>
        <Header name={`${firstName} ${lastName}`} position={position} />
        <BodyDiv>
          <div>Hello</div>
          <div>World Create Problems, Humans to solve</div>
        </BodyDiv>
      </LayoutDiv>
    );
  }
}

export default Preview;
