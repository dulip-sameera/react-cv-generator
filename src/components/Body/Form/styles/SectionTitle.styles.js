import styled from "styled-components";

const SectionTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.3rem;

  &:hover {
    cursor: default;
  }
`;

export default SectionTitle;
