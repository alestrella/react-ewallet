import PropTypes from 'prop-types';
import { Pie } from '@ant-design/plots';
import { ChartDiagramContainer } from './ChartDiagram.styled';
import { theme } from '../../styleConfig/theme';

const TemplatePie = () => {
  const data = [
    {
      value: 1,
    },
  ];
  const config = {
    data,
    autofit: true,
    angleField: 'value',
    legend: false,
    color: theme.colors.shade,
    pieStyle: {
      lineWidth: ''
    },
    radius: 1,
    innerRadius: 0.7,
    label: { content: '' },
    statistic: {
      title: false,
      content: {
        style: {
          fontWeight: theme.fontWeights.bold,
          fontSize: theme.fontSizes.l,
        },
        content: '₴ 0,00',
      },
    },
   };
  
  return (
    <Pie {...config} />
  );
};

export const ChartDiagram = ({ data, total }) => {
    const config = {
    data,
    autofit: true,
    angleField: 'totalSum', 
    legend: false,
    colorField: 'name',
    color: data.map(item => item.color),
    pieStyle: {
      lineWidth: ''
    },
    radius: 1,
    innerRadius: 0.7,
    label: { content: '' },
    statistic: {
      title: false,
      content: {
        style: {
          fontWeight: theme.fontWeights.bold,
          fontSize: theme.fontSizes.l,
        },
        content: `₴ ${total}`,
      },
    },
  };

  return (
    <ChartDiagramContainer>
      {data.length > 0 ? <Pie {...config} /> : <TemplatePie />}
    </ChartDiagramContainer>
  );
};

ChartDiagram.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};