import React, { Component } from "react";
import styled from "styled-components";
import { Form } from "./Form";
import updateDataState from "./Form/Utils/updateDataState";
import Preview from "./Preview";

const LayoutDiv = styled.div`
  grid-row: 2/3;

  padding: 1.25rem 5%;
  background: ${({ theme }) => theme.colors.bodyBg};

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
`;

export class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        personalInfo: {
          firstName: "",
          lastName: "",
          position: "",
          address: "",
          phoneNumber: "",
          email: "",
          description: "",
        },
        experienceList: [],
        educationList: [],
      },

      experience: {
        id: "",
        position: "",
        company: "",
        address: "",
        from: "",
        to: "",
      },

      education: {
        id: "",
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
    };
  }

  onInputChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    switch (id) {
      case "firstName":
        this.setState((state) => updateDataState(state, id, value));
        break;
      case "lastName":
        this.setState((state) => updateDataState(state, id, value));
        break;
      case "position":
        this.setState((state) => updateDataState(state, id, value));
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <LayoutDiv>
        <Form info={this.state} onChangeFn={this.onInputChange} />
        <Preview info={this.state.data} />
      </LayoutDiv>
    );
  }
}

export default Body;
