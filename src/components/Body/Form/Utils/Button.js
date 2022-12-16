import React, { Component } from "react";
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

export class Button extends Component {
  render() {
    const { text, onClickFn, id, type, listType, color } = this.props;

    if (type === "experience") {
      return (
        <>
          <Btn onClick={onClickFn} id="experience">
            {text}
          </Btn>
        </>
      );
    }

    if (type === "education") {
      return (
        <>
          <Btn onClick={onClickFn} id="education">
            {text}
          </Btn>
        </>
      );
    }

    if (color === "red") {
      return (
        <>
          <RedBtn onClick={onClickFn}>{text}</RedBtn>
        </>
      );
    }

    if (color === "yellow") {
      return (
        <>
          <YellowBtn onClick={onClickFn}>{text}</YellowBtn>
        </>
      );
    }

    if (color === "green") {
      return (
        <>
          <GreenBtn onClick={onClickFn}>{text}</GreenBtn>
        </>
      );
    }

    return (
      <>
        <Btn onClick={onClickFn} id={id} data-list={listType}>
          {text}
        </Btn>
      </>
    );
  }
}

export default Button;
