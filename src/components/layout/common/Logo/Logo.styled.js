import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.img`
  height: 30px;
  width: 30px;
`;

export const LogoText = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-left: 16px;
`;
