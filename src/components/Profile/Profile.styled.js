import styled from 'styled-components';
export const ContainerProfile = styled.div`
  width: 400px;
  padding-top: ${p => p.theme.spasing(5)};
  padding-bottom: ${p => p.theme.spasing(5)};
  margin-left: auto ;
  margin-right:auto;
  background-color: ${p => p.theme.background.white};
  border-radius: ${p => p.theme.radii.md};
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.2), 0px 1px 6px rgba(46, 47, 66, 0.2);
  `;

export const ContainerDescription = styled.div`
  margin-bottom: ${p => p.theme.spasing(5)};
`;

export const ImgProfile = styled.img`
  height: 100px;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${p => p.theme.background.violet};
  border-radius: 50%; 
  padding: ${p => p.theme.spasing(1)};   
  margin-bottom: ${p => p.theme.spasing(5)}; 
  box-shadow: 0px 0px 1px rgba(46, 47, 66, 0.2), 0px 1px 1px rgba(46, 47, 66, 0.2), 0px 1px 6px rgba(46, 47, 66, 0.2);
`;

export const NameProfile = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: ${p => p.theme.spasing(3)}; 
`;

export const TagProfile = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: ${p => p.theme.spasing(3)}; 
`;

export const LocationProfile = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: ${p => p.theme.spasing(5)}; 
`;

export const ListStats = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ${p => p.theme.background.violet};
`;

export const ItemStats = styled.li`
  flex-basis: calc(400px / 3);
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.spasing(2)}; 
  gap: ${p => p.theme.spasing(2)}; 
  border: 1px solid ${p => p.theme.background.violet};
`;

export const LabelStats = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

 export const QuantityStats = styled.span`
  font-weight: 700;
  font-size: 16px;
`;


 
 
 
  
