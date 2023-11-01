import styled from 'styled-components';
export const ItemStatistics = styled.li`
  flex-basis: calc(400px / 5);
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.spasing(2)}; 
  gap: ${p => p.theme.spasing(2)}; 
  border: 1px solid ${p => p.theme.colors.violet};
  background-color: ${p => p.theme.getRandomHexColor()};
  color: ${p => p.theme.colors.white};
`;

export const LabelStatistics = styled.span`
font-weight: 500;
font-size: 14px;
`;

export const PercentageStatistics = styled.span`
font-weight: 600;
font-size: 22px;
`;
