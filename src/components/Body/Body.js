import React, { Component } from "react";
import styled from "styled-components";

const LayoutDiv = styled.div`
  grid-row: 2/3;

  padding: 1.25rem 5%;
  background: ${({ theme }) => theme.colors.bodyBg};

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
`;

export class Body extends Component {
  render() {
    return (
      <LayoutDiv>
        <div>Body</div>
      </LayoutDiv>
    );
  }
}

export default Body;
