import React, { Component } from "react";
import styled from "styled-components";
import Personal from "./Personal";

const LayoutDiv = styled.div`
  grid-column: 1/2;
  padding: 1.25rem;

  background: ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
`;

export class Form extends Component {
  render() {
    const { info, onChangeFn } = this.props;
    const { data, experience, education } = info;
    // console.log(info);
    return (
      <LayoutDiv>
        <Personal data={data.personalInfo} onChangeFn={onChangeFn} />
      </LayoutDiv>
    );
  }
}

export default Form;
