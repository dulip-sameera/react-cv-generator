import React, { Component } from "react";
import styled from "styled-components";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";
import { Button } from "./Utils";

const LayoutDiv = styled.div`
  grid-column: 1/2;
  padding: 1.25rem;

  background: ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
  min-width: 800px;
`;

const Toggles = styled.div`
  width: 100%;
  margin: 3rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export class Form extends Component {
  render() {
    const { info, onChangeFn, addFn, deleteFn, resetFn, loadExampleFn } =
      this.props;
    const { data } = info;
    return (
      <LayoutDiv>
        <Personal data={data.personalInfo} onChangeFn={onChangeFn.personal} />
        <Experience
          data={data.experienceList}
          onChangeFn={onChangeFn.list}
          deleteFn={deleteFn}
          addFn={addFn}
        />
        <Education
          data={data.educationList}
          onChangeFn={onChangeFn.list}
          deleteFn={deleteFn}
          addFn={addFn}
        />

        <Toggles>
          <Button text="Generate PDF" color="green" />
          <Button
            text="Load Example"
            color="yellow"
            onClickFn={loadExampleFn}
          />
          <Button text="Reset" color="red" onClickFn={resetFn} />
        </Toggles>
      </LayoutDiv>
    );
  }
}

export default Form;
