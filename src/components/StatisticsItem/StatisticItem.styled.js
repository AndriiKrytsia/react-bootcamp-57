import { styled } from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 20px 40px;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.spacing(8)};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Paragraph = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 300;
`;
