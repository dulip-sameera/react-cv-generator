import styled from "styled-components";

const Description = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
  min-height: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 10px;
`;

export default Description;
