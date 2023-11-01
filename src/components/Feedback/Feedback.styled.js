import styled from 'styled-components';
// export const ContainerStatistics = styled.div`
//   width: 400px;
//   padding-top: ${p => p.theme.spasing(5)};
//   padding-bottom: ${p => p.theme.spasing(5)};
//   margin-left: auto ;
//   margin-right:auto;
//   background-color: ${p => p.theme.background.white};
//   border-radius: ${p => p.theme.radii.md};
//   box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.2), 0px 1px 6px rgba(46, 47, 66, 0.2);
//   `;

export const TitleFeedback = styled.h2`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-bottom: ${p => p.theme.spasing(5)};
`;

export const ButtonFeedback = styled.button`
  cursor: pointer;
  border-radius: ${p => p.theme.radii.md};
  border: 1.5px solid ${p => p.theme.colors.black}; 
  background-color: ${p => p.theme.background.GreenYellow};
  padding: ${p => p.theme.spasing(4)};
  width: 100px;
  margin-bottom: ${p => p.theme.spasing(5)};  
  margin-right: ${p => p.theme.spasing(2)}; 
`; 

export const SpanFeedback = styled.span`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.06em;
`;

