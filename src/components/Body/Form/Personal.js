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
          maxLength="20"
          onChangeFn={onChangeFn}
          placeholder="First Name"
        />
        <InputField
          id="lastName"
          type="text"
          maxLength="20"
          onChangeFn={onChangeFn}
          placeholder="Last Name"
        />

        <InputField
          id="position"
          type="text"
          maxLength="30"
          onChangeFn={onChangeFn}
          placeholder="Position"
        />

        <InputField
          id="image"
          type="file"
          onChangeFn={onChangeFn}
          placeholder="Add Image"
          accept="image/*"
        />

        <InputField
          id="address"
          type="text"
          maxLength="255"
          onChangeFn={onChangeFn}
          placeholder="Address"
        />

        <InputField
          id="phoneNumber"
          type="text"
          maxLength="10"
          onChangeFn={onChangeFn}
          placeholder="Phone Number"
        />

        <InputField
          id="email"
          type="text"
          maxLength="30"
          onChangeFn={onChangeFn}
          placeholder="Email"
        />

        <InputField
          id="description"
          type="textArea"
          onChangeFn={onChangeFn}
          placeholder="Description"
        />
      </div>
    );
  }
}

export default Personal;
