import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const DashbordBlur = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.blur};
  backdrop-filter: blur(25px);
  z-index: 1;
`;

export const DashboardWrapper = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 12px;
  @media screen and (${breakpoints.tablet}) {
    padding: 32px 32px 0;
  }
  @media screen and (${breakpoints.laptop}) {
    padding: 40px 16px 47px;
  }
`;
