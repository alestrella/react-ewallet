import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 16px;
  @media screen and (${breakpoints.tablet}) {
    height: 40px;
    width: 40px;
    margin-right: 20px;
  }
`;

export const LogoText = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  
  @media screen and (${breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
  }
`;
