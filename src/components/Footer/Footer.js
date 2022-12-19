import React from "react";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";

const LayoutDiv = styled.div`
  grid-row: 3/4;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 5%;
  height: 100%;

  background: ${({ theme }) => theme.colors.footerBg};
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.footerText};

  display: flex;
  align-items: center;
  gap: 5px;

  & {
    cursor: default;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.footerText};
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <LayoutDiv>
      <FooterText>
        Copyright &#169; 2022 dulip-sameera{" "}
        <Link
          href="https://github.com/dulip-sameera/react-cv-generator/tree/5a125bed76de05d18b30b736600662a657052bf0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
        </Link>
      </FooterText>
    </LayoutDiv>
  );
};

export default Footer;
