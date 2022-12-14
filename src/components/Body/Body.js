import React, { Component } from "react";
import styled from "styled-components";
import { Form } from "./Form";

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
        fistName: "",
        lastName: "",
        position: "",
        address: "",
        phoneNumber: "",
        email: "",
        description: "",
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

  render() {
    return (
      <LayoutDiv>
        <Form data={this.state} />
      </LayoutDiv>
    );
  }
}

export default Body;
