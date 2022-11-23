import styled from 'styled-components';
import { Form, Field } from 'formik';
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

export const StyledForm = styled(Form)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
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

export const StyledInput = styled(Field)`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0 ${p => p.theme.space[1]}px;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  background-color: transparent;
  outline: 0;
  border-radius: 0;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  width: 280px;
  height: 32px;
  color: ${p => p.theme.colors.black};
  &::placeholder {
    color: ${p => p.theme.colors.shadow};
  }
  svg {
    width: 24px;
    height: 24px;
    color: ${p => p.theme.colors.border};
    margin-right: ${p => p.theme.space[4]}px;
  }
  @media (${breakpoints.tablet}) {
    width: 410px;
  }
  &:hover {
    outline: none;
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  }
  &:focus {
    outline: none;
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  }

  &::selection {
    color: ${p => p.theme.colors.shadow};
    background: ${p => p.theme.colors.primary};
  }
`;

export const PrimaryButton = styled.button`
  transition: all 0.3s ease;
  width: 300px;
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
  width: 300px;
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
