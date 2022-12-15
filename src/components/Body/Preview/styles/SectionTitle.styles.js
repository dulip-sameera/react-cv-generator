import styled from "styled-components";

const SectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};

  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export default SectionTitle;
