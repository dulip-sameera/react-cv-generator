import React, { Component } from "react";
import styled from "styled-components";
import { Form } from "./Form";
import Preview from "./Preview";
import updateDataState from "./Form/Utils/updateDataState";

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
          image: "",
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
    let value = e.target.value;

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
      case "image":
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onloadend = function () {
          this.setState((state) =>
            updateDataState(state, id, fileReader.result)
          );
        }.bind(this);
        break;
      case "address":
        this.setState((state) => updateDataState(state, id, value));
        break;
      case "phoneNumber":
        this.setState((state) => updateDataState(state, id, value));
        break;
      case "email":
        this.setState((state) => updateDataState(state, id, value));
        break;
      case "description":
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
