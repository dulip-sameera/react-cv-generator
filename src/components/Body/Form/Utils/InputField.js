import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.3rem 0.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export class InputField extends Component {
  render() {
    return <div>InputField</div>;
  }
}

export default InputField;
