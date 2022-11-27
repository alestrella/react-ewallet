import styled, { keyframes } from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const CurrencyLoaderBox = styled.div`
  position: relative;
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.large};
  max-width: 280px;
  min-height: 174px;
  margin: 0 auto;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: -60%;
    left: -25%;
    width: 400px;
    height: 400px;
    background-image: linear-gradient(
      0deg,
      ${p => p.theme.colors.accent},
      transparent
    );
    animation: rotate 3s linear infinite;
    animation-delay: -2s;
    @media screen and (${breakpoints.tablet}) {
      top: -50%;
      left: -10%;
    }
    @media screen and (${breakpoints.laptop}) {
      width: 600px;
      height: 600px;
      top: -35%;
      left: -26%;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: -60%;
    left: -25%;
    width: 400px;
    height: 400px;
    background-image: linear-gradient(180deg, #d44ae2, transparent);
    animation: rotate 3s linear infinite;
    animation-delay: -2s;
    @media screen and (${breakpoints.tablet}) {
      top: -50%;
      left: -10%;
    }
    @media screen and (${breakpoints.laptop}) {
      width: 600px;
      height: 600px;
      top: -35%;
      left: -26%;
    }
  }
  & span {
    position: absolute;
    inset: 5px;
    border-radius: inherit;
    background-color: ${p => p.theme.colors.secondary};
    z-index: 2;
    overflow: hidden;
    text-align: center;
    & h3 {
      padding: 20px;
      font-family: ${p => p.theme.fonts.primary};
      font-style: normal;
      font-weight: ${p => p.theme.fontWeights.normal};
      font-size: ${p => p.theme.fontSizes.m};
      line-height: ${p => p.theme.lineHeights.body};
      color: ${p => p.theme.colors.primary};
    }
  }
  @media screen and (${breakpoints.tablet}) {
    max-width: 336px;
    min-height: 182px;
    margin: 0;
  }
  @media screen and (${breakpoints.laptop}) {
    max-width: 393px;
    min-height: 347px;
    margin: 0;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
