import { breakpoints } from 'styleConfig/breakpoints';
import styled from 'styled-components';

export const BalanceBox = styled.div`
  width: 280px;
  height: 80px;
  padding: 8px 32px 12px 32px;
  background-color: beige;
  margin: 0 auto 32px;
  border-radius: ${p => p.theme.radii.large};
  @media screen and (${breakpoints.tablet}) {
    width: 336px;
    height: 80px;
    margin-right: 32px;
    margin-left: 0;
    margin-bottom: 20px;
  }
  @media screen and (${breakpoints.laptop}) {
    width: 395px;
    height: 80px;
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 32px;
  }
`;

export const BalanceTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.shade};
`;

export const BalanceContent = styled.h3`
  font-weight: ${p => p.theme.fontWeights.normal};  
  font-size: ${p => p.theme.fontSizes.xxxl};
  line-height: 45px;
`;
