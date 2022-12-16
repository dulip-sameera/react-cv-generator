import React, { Component } from "react";
import styled from "styled-components";
import Experience from "./Experience";
import Personal from "./Personal";

const LayoutDiv = styled.div`
  grid-column: 1/2;
  padding: 1.25rem;

  background: ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
`;

export class Form extends Component {
  render() {
    const { info, onChangeFn, addFn, deleteFn } = this.props;
    const { data } = info;
    console.log(data);
    return (
      <LayoutDiv>
        <Personal data={data.personalInfo} onChangeFn={onChangeFn.personal} />
        <Experience
          data={data.experienceList}
          onChangeFn={onChangeFn.list}
          deleteFn={deleteFn}
          addFn={addFn}
        />
      </LayoutDiv>
    );
  }
}

export default Form;
