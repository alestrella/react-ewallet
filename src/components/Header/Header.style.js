import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  z-index: 1;
`;

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  max-width: 1280px;
  margin: 0 auto;

  @media screen and (${breakpoints.tablet}) {
    padding: 20px 32px;
  }

  @media screen and (${breakpoints.laptop}) {
    padding: 20px 16px;
  }
`;
