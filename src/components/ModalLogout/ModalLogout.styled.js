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
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 999;
  @media (${breakpoints.tablet}) {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.colors.primary};
  position: relative;
  width: 100%;
  padding: 80px 10px;
  @media (${breakpoints.tablet}) {
    top: 0;
    width: 540px;
    border-radius: 20px;
  }
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.black};
  margin-bottom: 30px;
  @media (${breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.xxxl};
  }
`;

export const PrimaryButton = styled.button`
  transition: all 0.3s ease;
  width: 200px;
  height: 50px;
  margin-bottom: ${p => p.theme.space[4]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.medium};
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`;

export const SecondaryButton = styled.button`
  transition: all 0.3s ease;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;
  color: ${p => p.theme.colors.secondary};
  background-color: transparent;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.medium};
  outline: none;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`;
