import styled from "styled-components";
import { Form} from 'formik';
import { breakpoints } from "styleConfig/breakpoints";
import { Input } from 'antd';
import { Link } from "react-router-dom";


export const FormWrapper = styled.div`
margin: 0 auto;
text-align: center;
width: 280px;
padding-top: ${p => p.theme.space[6]}px;
background-color: ${p => p.theme.colors.primary};
  @media (${breakpoints.tablet}) {
    width: 533px;
    padding: ${p => p.theme.space[8]}px ${p => p.theme.space[10]}px ${p => p.theme.space[12]}px ${p => p.theme.space[12]}px;
    border-radius: ${p => p.theme.radii.medium};
  };
`
export const StyledForm = styled(Form)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
margin-top: ${p => p.theme.space[11]}px;
width: 280px;
  @media (${breakpoints.tablet}) {
    width: 410px;
  };
`;
export const StyledInput = styled(Input)`
transition: all .3s ease;
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
  };
  &:hover {
    outline: none;
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  };
  &:focus {
    outline: none;
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  };
 
  &::selection {
    color: ${p => p.theme.colors.shadow};
    background: ${p => p.theme.colors.primary};
};
`;
export const StyledInputPassword = styled(Input.Password)`
transition: all .3s ease;
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
  };
  &:hover {
    outline: none;
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  };
  &:focus {
    outline: none;
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  };

  &::selection {
    color: ${p => p.theme.colors.shadow};
    background: ${p => p.theme.colors.primary};
}
`

export const InputWrapper = styled.div`
position: relative;
margin-bottom: ${p => p.theme.space[8]}px;
& .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
  background-color: transparent;
    border-color: ${p => p.theme.colors.secondary};
}
`;
export const ErrorText = styled.p`
text-align: left;
  color: ${p => p.theme.colors.errorColor};
  font-size: ${p => p.theme.fontSizes.xs};
  padding: 0 ${p => p.theme.space[1]}px;
  width: 280px;
  @media (${breakpoints.tablet}) {
    width: 410px;
    font-size: ${p => p.theme.fontSizes.s};
  };
`;

export const PrimaryButton = styled.button`
transition: all .3s ease;
width: 280px;
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
@media (${breakpoints.tablet}) {
    width: 300px;
  };
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;
  };
`;
export const StyledLink = styled(Link)`
transition: all .3s ease;
width: 280px;
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
@media (${breakpoints.tablet}) {
    width: 300px;
  };
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;
  };
`;
