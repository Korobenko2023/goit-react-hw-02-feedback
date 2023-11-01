import styled from 'styled-components';
export const ContainerStatistics = styled.div`
  width: 400px;
  padding-top: ${p => p.theme.spasing(5)};
  padding-bottom: ${p => p.theme.spasing(5)};
  margin-left: auto ;
  margin-right:auto;
  background-color: ${p => p.theme.background.white};
  border-radius: ${p => p.theme.radii.md};
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.2), 0px 1px 6px rgba(46, 47, 66, 0.2);
  `;

export const TitleStatistics = styled.h2`
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 10px;
`;

export const ListStatistics = styled.ul`
  display: flex;
  justify-content: center;
`;

