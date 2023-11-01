import styled from 'styled-components';
export const ItemFriendListItem = styled.li`
  padding: ${p => p.theme.spasing(4)}; 
  display: flex;
  align-items: center;  
  border: 1px solid ${p => p.theme.colors.violet};
  background-color: ${p => p.theme.colors.white};
  gap: ${p => p.theme.spasing(4)}; 
  border-radius: ${p => p.theme.radii.md};
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.2), 0px 1px 6px rgba(46, 47, 66, 0.2);
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.spasing(5)}; 
  }
`;
    
export const StatusFriendListItem = styled.span`
   width: 15px;
   height: 15px;
   border-radius: 50%;
   background-color: ${p => p.$isOnline ? p.theme.background.green : p.theme.background.red};
   margin-left: 10px;
   margin-right: 20px;
`;

export const ImgFriendListItem = styled.img`
  border: 1px solid ${p => p.theme.background.violet};
  border-radius: 25%; 
  padding: ${p => p.theme.spasing(1)};   
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.2), 0px 1px 6px rgba(46, 47, 66, 0.2);
`;

export const NameFriendListItem = styled.p`
  font-weight: 600;
  font-size: 22px;
`;

    
   

   

   