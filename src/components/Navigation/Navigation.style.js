import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { SlGraph } from 'react-icons/sl';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { breakpoints } from 'styleConfig/breakpoints';

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 19px;  
`;

export const NavigLink = styled(NavLink)`
  color: gray;
  display: flex;
  align-items: center;  
  
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (${breakpoints.tablet}) {
    display: block;
  }
  @media screen and (${breakpoints.laptop}) {
    display: block;
  }
`;

export const NavText = styled.span`
  display: none;
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 700;
  line-height: 27px;
  @media screen and (${breakpoints.tablet}) {
    display: block;
  }
  @media screen and (${breakpoints.laptop}) {
    display: block;
  }
`;


export const IconWrapper = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 23px;
`;

export const IconHome = styled(FaHome)`
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.small};
`;
export const IconGraph = styled(SlGraph)`
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.small};
`;

export const IconCurrency = styled(MdOutlineAttachMoney)`
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.small};
`;