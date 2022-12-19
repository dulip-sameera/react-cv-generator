import React from "react";
import styled from "styled-components";

const Input = styled.input`
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.darkGrey};
  padding: 0.3rem 0.6rem;
  margin-bottom: 0.7rem;
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

const TextArea = styled.textarea`
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.darkGrey};
  padding: 0.3rem 0.6rem;
  margin-bottom: 0.7rem;
  border-radius: 5px;
  font-size: 1.25rem;
  font-weight: 700;
  outline: none;
  border: none;
  resize: none;
  width: 100%;
  height: 20ch;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const InputImage = styled(Input)`
  &:hover {
    cursor: pointer;
  }
`;

const InputField = ({
  id,
  type,
  maxLength,
  onChangeFn,
  placeholder,
  value,
  accept,
  list,
  dataField,
  dataList,
}) => {
  // to input a file
  if (type === "file") {
    return (
      <InputImage id={id} type={type} accept={accept} onChange={onChangeFn} />
    );
  }

  // to generate text area
  if (type === "textArea") {
    return (
      <TextArea
        id={id}
        placeholder={placeholder}
        onChange={onChangeFn}
        value={value}
      ></TextArea>
    );
  }

  // to input data to a list
  if (list) {
    return (
      <Input
        type={type}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChangeFn}
        data-field={dataField}
        data-list={dataList}
        data-id={id}
        value={value}
      />
    );
  }

  // normal input
  return (
    <Input
      id={id}
      type={type}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={onChangeFn}
      value={value}
    />
  );
};

export default InputField;
