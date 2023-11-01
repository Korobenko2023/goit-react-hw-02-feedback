import styled from 'styled-components';
export const TrTransactionItem = styled.tr`
    &:nth-child(2n) {
    background-color: ${p => p.theme.background.PowderBlue}; 
}
`;
 export const TdTransactionItem = styled.td`
    color: ${p => p.theme.colors.lightBlack}; 
    padding: ${p => p.theme.spasing(1)}; 
    text-transform: capitalize;
 `;

  