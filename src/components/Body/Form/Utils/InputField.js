import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input`
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.darkGrey};
  padding: 0.3rem 0.6rem;
  margin-bottom: 0.3rem;
  border-radius: 5px;
  font-size: 1.25rem;
  font-weight: 700;
  outline: none;
  border: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export class InputField extends Component {
  render() {
    const { id, type, maxLength, placeholder, onchangeFn } = this.props;

    return (
      <Input
        id={id}
        type={type}
        maxlength={maxLength}
        placeholder={placeholder}
        onChange={onchangeFn}
      />
    );
  }
}

export default InputField;
