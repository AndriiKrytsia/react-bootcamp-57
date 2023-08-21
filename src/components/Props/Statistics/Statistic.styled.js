import styled from 'styled-components';

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.spacing(8)};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
