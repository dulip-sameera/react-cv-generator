import React, { Component } from "react";
import styled from "styled-components";

const LayoutDiv = styled.div`
  grid-row: 1/2;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  & > *:hover {
    cursor: default;
  }
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  height: 30rem;
`;

const Position = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  height: 1.5rem;
`;

export class Header extends Component {
  render() {
    const { name, position } = this.props;
    return (
      <LayoutDiv>
        <Name>{name}</Name>
        <Position>{position}</Position>
      </LayoutDiv>
    );
  }
}

export default Header;
