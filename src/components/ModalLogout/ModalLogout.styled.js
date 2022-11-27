import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${breakpoints.tablet}) {
    background-color: rgba(0, 0, 0, 0.25);
  }
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  background-color: ${p => p.theme.colors.primary};
  position: relative;
  top: 60px;
  width: 100%;
  height: 100%;
  @media (${breakpoints.tablet}) {
    width: 540px;
    height: 508px;

    border-radius: 20px;
  }
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.xxl};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.black};
  @media (${breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.xxxl};
  }
`;

