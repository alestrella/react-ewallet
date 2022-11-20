import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.loginPageBgColor};
  margin: 0 auto;
  width: 100%;
  height: 100vh;
`;

export const AuthPageTitleGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthPageImg = styled.img`
  display: none;
  @media screen and (${breakpoints.tablet}) {
    display: block;
    height: 260px;
    width: 250px;
    margin-right: 40px;
    margin-top: 60px;
  }
`;

export const AuthPageTitle = styled.div`
  display: none;
  @media screen and (${breakpoints.tablet}) {
    display: block;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    line-height: ${({ theme }) => theme.lineHeights.body};
    color: ${({ theme }) => theme.colors.black};
  }
`;
