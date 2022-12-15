import React, { Component } from "react";
import SectionTitle from "./styles/SectionTitle.styles";
import { InputField } from "./Utils";

export class Personal extends Component {
  render() {
    const { data, onChangeFn } = this.props;
    console.log(data);
    return (
      <div>
        <SectionTitle>Personal Information</SectionTitle>
        <InputField
          id="firstName"
          type="text"
          maxLength="100"
          onChangeFn={onChangeFn}
          placeholder="First Name"
        />
        <InputField
          id="lastName"
          type="text"
          maxLength="100"
          onChangeFn={onChangeFn}
          placeholder="Last Name"
        />

        <InputField
          id="position"
          type="text"
          maxLength="100"
          onChangeFn={onChangeFn}
          placeholder="Position"
        />
      </div>
    );
  }
}

export default Personal;
