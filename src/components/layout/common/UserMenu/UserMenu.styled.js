import styled from 'styled-components';
import { ExportOutlined } from '@ant-design/icons';
import { breakpoints } from 'styleConfig/breakpoints';

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
  color: ${({ theme }) => theme.colors.shadow};

  @media screen and (${breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.l};
    border-right: 1px solid ${({ theme }) => theme.colors.shadow};
    padding-right: 12px;
    margin-right: 0;
  }
`;

export const LogOutButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  height: 18px;

  @media screen and (${breakpoints.tablet}) {
    margin-left: 12px;
  }
`;

export const LogOutIcon = styled(ExportOutlined)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.shadow};
`;

export const LogOutText = styled.div`
  display: none;
  @media screen and (${breakpoints.tablet}) {
    display: block;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-size: ${({ theme }) => theme.fontSizes.l};
    line-height: ${({ theme }) => theme.lineHeights.body};
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.shadow};
  }
`;
