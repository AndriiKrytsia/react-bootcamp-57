import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: ${({ theme: { shadows } }) => shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.spacing(100)};
`;

export const CardHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const CardPoster = styled.img`
  object-fit: cover;
`;
