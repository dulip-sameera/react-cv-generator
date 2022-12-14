import React, { Component } from "react";
import styled from "styled-components";

const LayoutDiv = styled.div`
  grid-column: 1/2;
  padding: 1.25rem;

  background: ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
`;

export class Form extends Component {
  render() {
    const { data, experience, education } = this.props.info;
    return (
      <LayoutDiv>
        <div>Form</div>
      </LayoutDiv>
    );
  }
}

export default Form;
