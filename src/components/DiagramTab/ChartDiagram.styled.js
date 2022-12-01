import styled from 'styled-components';
import { breakpoints } from '../../styleConfig/breakpoints';

export const ChartDiagramContainer = styled.div`
  margin: 0 auto;
  width: 280px;
  height: 280px;
  @media screen and (${breakpoints.tablet}) {
    width: 336px;
    height: 336px;
  }
  @media screen and (${breakpoints.laptop}) {
    width: 288px;
    height: 288px;
  }
`;
