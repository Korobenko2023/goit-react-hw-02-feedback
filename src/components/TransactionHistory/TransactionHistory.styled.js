import styled from 'styled-components';
export const ContainerTransactionHistory = styled.table`
  width: 400px;
  margin-left: auto ;
  margin-right: auto;
  background-color: ${p => p.theme.background.white};
  border: 1px solid ${p => p.theme.colors.violet};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.2), 0px 1px 6px rgba(46, 47, 66, 0.2);
`;

export const TheadTransactionHistory = styled.thead`
  background-color: ${p => p.theme.background.blue};
  color: ${p => p.theme.colors.white};
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
`;




  

  
 