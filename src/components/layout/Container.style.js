import styled from 'styled-components';
import ellipseTop from '../img/ellipseTop.svg';
import ellipseBottom from '../img/ellipseBottom.svg';
import { breakpoints } from 'styleConfig/breakpoints';
import { keyframes } from 'styled-components';

const Animation = keyframes`
100% {background-position: -50% 50%;}
`;

export const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.PageBgColor};
  margin: 0 auto;
  width: 100%;
  height: 100vmax;
  overflow: hidden;
  @media screen and (${breakpoints.laptop}) {
    height: 100vh;
  }
  :after {
    display: none;
    @media screen and (${breakpoints.tablet}) {
      display: block;
      content: '';
      position: absolute;
      background-image: url(${ellipseTop});
      background-repeat: no-repeat;
      width: 618px;
      height: 547px;
      top: -100px;
      right: -280px;
      z-index: 0;
      animation: ${Animation} 3s infinite alternate linear;
    }
    @media screen and (${breakpoints.laptop}) {
      top: -120px;
      right: -70px;
    }
  }
  :before {
    display: none;
    @media screen and (${breakpoints.tablet}) {
      display: block;
      content: '';
      position: absolute;
      background-image: url(${ellipseBottom});
      background-repeat: no-repeat;
      width: 637px;
      height: 547px;
      bottom: -249px;
      left: -147px;
      z-index: 0;
      animation: ${Animation} 5s infinite alternate linear;
    }
    @media screen and (${breakpoints.laptop}) {
      bottom: -204px;
      left: -127px;
    }
  }
`;
