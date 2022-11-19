import styled from "styled-components";
import { Form, Field} from 'formik';
import { breakpoints } from "styleConfig/breakpoints";



export const StyledForm = styled(Form)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: start;
/* min-width: 340px; */
color: ${p => p.theme.colors.shadow};
  /* @media (${breakpoints.tablet}) {
    width: 380px;
  };
  @media (${breakpoints.laptop}) {
    width: 500px;
  }; */
`;
export const FormInput = styled(Field)`

position: relative;
transition: all .3s ease;
margin-bottom: ${p => p.theme.space[1]}px;
padding: 0 ${p => p.theme.space[0]}px;
font-family: ${p => p.theme.fonts.primary};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.l};
background-color: transparent;
border: 0;
outline: 0;
border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
height: 40px;
min-width: 280px;
color: ${p => p.theme.colors.black};
&::placeholder {
    color: ${p => p.theme.colors.shadow};
      }
@media (${breakpoints.tablet}) {
    width: 380px;
    font-size: ${p => p.theme.fontSizes.m};
  };
  @media (${breakpoints.laptop}) {
    width: 500px;
    font-size: ${p => p.theme.fontSizes.l};
  };

  /* &:hover {
    outline: none;
    background-color: ${p => p.theme.colors.shade};
    box-shadow: 
  -10px -10px 15px rgba(255, 255, 255, 0.5),
  10px 10px 15px rgba(70, 70, 70, 0.12),
  inset -10px -10px 15px rgba(255, 255, 255, 0.5),
  inset 10px 10px 15px rgba(70, 70, 70, 0.12);
  };
  &:focus {
    outline: none;
    background-color: ${p => p.theme.colors.shadow};
    box-shadow: 
  -10px -10px 15px rgba(255, 255, 255, 0.5),
  10px 10px 15px rgba(70, 70, 70, 0.12),
  inset -10px -10px 15px rgba(255, 255, 255, 0.5),
  inset 10px 10px 15px rgba(70, 70, 70, 0.12);
  }; */
`;

export const InputWrapper = styled.div`
position: relative;
`;
export const ErrorText = styled.p`
  color: ${p => p.theme.colors.errorColor};
  background-color: ${p => p.theme.colors.shadow};
  padding: 0 ${p => p.theme.space[0]}px;
  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  margin-bottom: ${p => p.theme.space[1]}px;
  padding: 0 ${p => p.theme.space[0]}px;
  min-width: 340px;
  @media (${breakpoints.tablet}) {
    width: 380px;
  };
  @media (${breakpoints.laptop}) {
    width: 500px;
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.semibold};
  };
`;
export const Label = styled.label`
position: absolute;
  svg{
    margin-right: ${p => p.theme.space[0]}px;
    color: ${p => p.theme.colors.border};
    }
`;
export const PrimaryButton = styled.button`
transition: all .3s ease;
margin-top: ${p => p.theme.space[3]}px;
padding: ${p => p.theme.space[0]}px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-family:inherit;
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.s};
  @media (${breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.m};
  };
  @media (${breakpoints.laptop}) {
    font-size: ${p => p.theme.fontSizes.l};
  };
color: ${p => p.theme.colors.white};
background: transparent;
border-radius: ${p => p.theme.radii.normal};
outline: none;
border: none;
box-shadow: 0 2px 8px rgba(18, 92, 55 , 0.75), inset 0 1px rgba(255, 255, 255, 0.35),
      inset 0 10px rgba(255, 255, 255, 0.2), inset 0 10px 20px rgba(255, 255, 255, 0.25),
      inset 0 -15px 30px rgba(18, 92, 55 , 0.75);
  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.accent};
    box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
  };
`;
export const ShowPasswordButton = styled.button`
transition: all .3s ease;
position: absolute;
top: 0;
right: 0;
width: 35px;
height: 35px;
border: transparent;
border-bottom-right-radius: ${p => p.theme.radii.normal};
border-top-right-radius: ${p => p.theme.radii.normal};
padding-right: ${p => p.theme.space[0]}px;
background-color: transparent;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  };
`;