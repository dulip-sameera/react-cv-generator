import React, { Component } from "react";
import styled from "styled-components";

const LayoutDiv = styled.div`
  grid-column: 1/2;
  background: ${({ theme }) => theme.colors.white};
`;

export class Main extends Component {
  render() {
    return (
      <LayoutDiv>
        <div>Main</div>
      </LayoutDiv>
    );
  }
}

export default Main;
