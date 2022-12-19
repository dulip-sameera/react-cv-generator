import React from "react";
import styled from "styled-components";

const LayoutDiv = styled.div`
  grid-row: 1/2;
  display: flex;
  align-items: center;

  padding: 0 5%;
  background: ${({ theme }) => theme.colors.headerBg};
`;

const BrandName = styled.h1`
  font-family: "Yantramanav";
  font-weight: 900;
  font-size: 2.5rem;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.colors.brandName};

  &:hover {
    cursor: default;
  }
`;

const Header = () => {
  return (
    <LayoutDiv>
      <BrandName>CV Generator</BrandName>
    </LayoutDiv>
  );
};

export default Header;
