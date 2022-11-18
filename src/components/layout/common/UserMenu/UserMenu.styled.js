import styled from 'styled-components';
import { LogoutOutlined } from '@ant-design/icons';

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: ${({ theme }) => theme.lineHeights.body};
  margin-right: 8px;
  color: ${({theme}) => theme.colors.shadow};
`;

export const LogOutIcon = styled(LogoutOutlined)`
  font-size: 18px;
  color: ${({theme}) => theme.colors.shadow};
`;
