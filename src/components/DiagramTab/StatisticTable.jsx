import PropTypes from 'prop-types';
import {
  CustomTable,
  StatisticTableContainer,
  CategoryColor,
  CategoryCeilStyled,
  AmountCeilStyled,
} from './StatisticTable.styled';
import { findColorById } from '../../helpers/helpers';

export const StatisticTable = ({ data }) => {
  const dataSource = data.map(({ totalSum, id, name }) => {
    return {
      key: id,
      title: {
        text: name,
        color: findColorById(id),
      },
      amount: totalSum.toFixed(2),
    };
  });
  const filteredSource = dataSource.sort((a, b) => b.amount - a.amount);

  const columns = [
    {
      title: 'Category',
      dataIndex: 'title',
      key: 'title',
      render: title => (
        <CategoryCeilStyled>
          <CategoryColor accent={title.color}></CategoryColor>
          <p>{title.text}</p>
        </CategoryCeilStyled>
      ),
    },
    {
      title: 'Sum',
      dataIndex: 'amount',
      key: 'amount',
      render: amount => <AmountCeilStyled>{amount} </AmountCeilStyled>,
    },
  ];

  return (
    <StatisticTableContainer>
      {data.length > 0 && (
        <CustomTable
          dataSource={filteredSource}
          columns={columns}
          pagination={false}
        />
      )}
    </StatisticTableContainer>
  );
};

StatisticTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
