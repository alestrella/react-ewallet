import styled from 'styled-components';
import { Field } from 'formik';

export const Switcher = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  height: 44px;
`;

export const SwitchBox = styled.div`
  position: relative;
  margin: 0px 20px 0px 20px;
  height: 100%;
`;

export const Switch = styled(Field)`
  -webkit-appearance: none;
  appearance: none;

  width: 80px;
  height: 40px;
  border-radius: 30px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  opacity: 1;
  cursor: pointer;

  transition: background-color 200ms ease-in-out;
`;

export const StyledButton = styled.span`
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${p =>
    p.checked ? p.theme.colors.accent : p.theme.colors.accentSecondary};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;

  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${p => (p.checked ? '-2px' : '40px')};
  top: -2px;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  width: 44px;
  height: 44px;
  box-shadow: ${p =>
    p.checked
      ? '0px 6px 15px rgba(36, 204, 167, 0.5)'
      : '0px 6px 15px rgba(255, 101, 150, 0.5)'};
`;

export const Income = styled.p`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => (p.checked ? p.theme.colors.accent : p.theme.colors.border)};
  transition: all 0.5s ease;
`;

export const Expense = styled.p`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p =>
    p.checked ? p.theme.colors.accentSecondary : p.theme.colors.border};
  transition: all 0.5s ease;
`;
