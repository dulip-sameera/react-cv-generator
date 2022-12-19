import React from "react";
import SectionTitle from "./styles/SectionTitle.styles";
import { InputField } from "./Utils";

const Personal = ({ data, onChangeFn }) => {
  return (
    <div>
      <SectionTitle>Personal Information</SectionTitle>
      <InputField
        id="firstName"
        type="text"
        maxLength="20"
        onChangeFn={onChangeFn}
        placeholder="First Name"
        value={data.firstName}
      />

      <InputField
        id="lastName"
        type="text"
        maxLength="20"
        onChangeFn={onChangeFn}
        placeholder="Last Name"
        value={data.lastName}
      />

      <InputField
        id="position"
        type="text"
        maxLength="30"
        onChangeFn={onChangeFn}
        placeholder="Position"
        value={data.position}
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
        value={data.address}
      />

      <InputField
        id="phoneNumber"
        type="text"
        maxLength="10"
        onChangeFn={onChangeFn}
        placeholder="Phone Number"
        value={data.phoneNumber}
      />

      <InputField
        id="email"
        type="text"
        maxLength="30"
        onChangeFn={onChangeFn}
        placeholder="Email"
        value={data.email}
      />

      <InputField
        id="description"
        type="textArea"
        onChangeFn={onChangeFn}
        placeholder="Description"
        value={data.description}
      />
    </div>
  );
};

export default Personal;
