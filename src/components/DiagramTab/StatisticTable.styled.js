import styled from 'styled-components';
import { Table } from 'antd';

export const StatisticTableContainer = styled.div`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const CustomTable = styled(Table)`
  .ant-table {
    background-color: transparent;
  }
  .ant-table-container table > thead > tr:first-child th {
    background-color: ${p => p.theme.colors.primary};
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  } 
  .ant-table-container table > thead > tr:first-child th:first-child {
    border-radius: ${p => p.theme.radii.large} 0 0 ${p => p.theme.radii.large};
    text-align: left;
  }
  .ant-table-container table > thead > tr:first-child th:last-child {
    border-radius: 0 ${p => p.theme.radii.large} ${p => p.theme.radii.large} 0;
    overflow: hidden;
    text-align: right;
  }
  .ant-table-tbody .ant-table-cell {
    border-bottom: ${p => p.theme.borders.normal} #DCDCDF;
  }
`;

export const CategoryColor = styled.span`
  display: block;
  width: ${p => p.theme.space[5]}px;
  height: ${p => p.theme.space[5]}px;
  margin-right: ${p => p.theme.space[3]}px;
  background-color: ${p => p.accent};
`;

export const CategoryCeilStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  background-color: transparent;
`;

export const AmountCeilStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
`;