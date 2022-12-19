import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.btnBg};
  color: ${({ theme }) => theme.colors.btnText};
  border: none;
  padding: 5px;
  font-size: 1.25rem;
  font-weight: 700;
  border-radius: 5px;

  &:hover {
    background: ${({ theme }) => theme.colors.btnBgHover};
    cursor: pointer;
  }
`;

const RedBtn = styled(Btn)`
  background: ${({ theme }) => theme.colors.red};

  &:hover {
    background: ${({ theme }) => theme.colors.redHover};
    cursor: pointer;
  }
`;

const YellowBtn = styled(Btn)`
  background: ${({ theme }) => theme.colors.yellow};

  &:hover {
    background: ${({ theme }) => theme.colors.yellowHover};
    cursor: pointer;
  }
`;

const GreenBtn = styled(Btn)`
  background: ${({ theme }) => theme.colors.green};

  &:hover {
    background: ${({ theme }) => theme.colors.greenHover};
    cursor: pointer;
  }
`;

const Button = ({ text, onClickFn, id, type, listType, color }) => {
  // button with id 'experience'
  if (type === "experience") {
    return (
      <>
        <Btn onClick={onClickFn}>{text}</Btn>
      </>
    );
  }

  // button with id 'education
  if (type === "education") {
    return (
      <>
        <Btn onClick={onClickFn} id="education">
          {text}
        </Btn>
      </>
    );
  }

  // red color button
  if (color === "red") {
    return (
      <>
        <RedBtn onClick={onClickFn}>{text}</RedBtn>
      </>
    );
  }

  // yellow color button
  if (color === "yellow") {
    return (
      <>
        <YellowBtn onClick={onClickFn}>{text}</YellowBtn>
      </>
    );
  }

  // green color button
  if (color === "green") {
    return (
      <>
        <GreenBtn onClick={onClickFn}>{text}</GreenBtn>
      </>
    );
  }

  // Normal button
  return (
    <>
      <Btn onClick={onClickFn} id={id} data-list={listType}>
        {text}
      </Btn>
    </>
  );
};

export default Button;
