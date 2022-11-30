import styled from 'styled-components';
import { DatePicker } from 'antd';
import { breakpoints } from '../../styleConfig/breakpoints';

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
   margin-bottom: ${p => p.theme.space[4]}px;
  @media screen and (${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (${breakpoints.laptop}) {
    margin-top: ${p => p.theme.space[12]}px;
  }
`;

export const CustomPicker = styled(DatePicker)`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.large};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  text-align: center;
  outline: none;
  cursor: pointer;
  input {
    font-size: ${p => p.theme.fontSizes.s};
    @media screen and (${breakpoints.tablet}) {
      font-size: ${p => p.theme.fontSizes.xs};
    }
  }
  @media screen and (${breakpoints.tablet}) {
    width: 160px;
  }
  @media screen and (${breakpoints.laptop}) {
    width: 180px;
  }
  &:hover, &:focus {
     border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  }
  &:first-child {
    margin-bottom: ${p => p.theme.space[4]}px;
    @media screen and (${breakpoints.tablet}) {
      margin-bottom: 0;
      margin-right: ${p => p.theme.space[3]}px;
    }
    @media screen and (${breakpoints.laptop}) {
      margin-bottom: 0;
      margin-right: ${p => p.theme.space[6]}px;
    }
  }
`;