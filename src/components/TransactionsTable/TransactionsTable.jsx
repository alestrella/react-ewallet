import { Popconfirm, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTransactions,
  deleteTransaction,
  transactionsSelectors,
  categoriesSelectors,
  getCategories,
} from '../../redux';

import Media from 'react-media';
import {
  List,
  ListItem,
  ListText,
  StyledTable,
  SumStyled,
  TableWrapper,
} from './TransactionsTable.styled';

const TransactionsTable = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(transactionsSelectors.getTransactions);
  const categories = useSelector(categoriesSelectors.getCategories);

  const handleDelete = id => {
    dispatch(deleteTransaction(id));
  };

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: record => record.slice(0, 10).replaceAll('-', '.'),
      width: '17%',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: type => (type === 'income' ? '+' : '-'),

      filters: [
        {
          text: '+',
          value: 'income',
        },
        {
          text: '-',
          value: 'expense',
        },
      ],
      width: '10%',
      onFilter: (value, item) => item.type.includes(value),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: category => (
        <>
          {categories.filter(elem => elem.id === category).map(el => el.name)}
        </>
      ),
      width: '15%',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      width: '15%',
    },
    {
      title: 'Sum',
      dataIndex: 'sum',
      key: 'sum',
      render: (sum, item) => (
        <SumStyled type={item.type}>{sum.toFixed(2)} </SumStyled>
      ),
      width: '15%',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      render: (_, { balance }) => balance.toFixed(2),
      width: '15%',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record) =>
        transactions.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="link">
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        ) : null,
    },
  ];

  return (
    <TableWrapper>
      <Media query="(min-width: 768px)">
        {matches =>
          matches ? (
            <StyledTable
              columns={columns}
              dataSource={transactions?.map(item => ({
                ...item,
                key: item.id,
              }))}
              pagination={{
                defaultPageSize: '10',
                showSizeChanger: true,
                pageSizeOptions: [5, 10, 15],
                position: ['bottomRight'],
              }}
              scroll={{
                y: 255,
              }}
            />
          ) : (
            <TableWrapper>
              {transactions?.map(item => (
                <List type={item.type} key={item.id}>
                  <ListItem>
                    <ListText>Date</ListText>
                    {item.date.slice(0, 10).replaceAll('-', '.')}
                  </ListItem>
                  <ListItem>
                    <ListText>Type</ListText>
                    {item.type === 'income' ? '+' : '-'}
                  </ListItem>
                  <ListItem>
                    <ListText>Category</ListText>
                    {categories
                      .filter(elem => elem.id === item.category)
                      .map(el => el.name)}
                  </ListItem>
                  <ListItem>
                    <ListText>Comment</ListText>
                    {item.comment}
                  </ListItem>
                  <ListItem>
                    <ListText>Sum</ListText>
                    <SumStyled type={item.type}>
                      {item.sum.toFixed(2)}
                    </SumStyled>
                  </ListItem>
                  <ListItem>
                    <ListText>Balance</ListText>
                    {item.balance.toFixed(2)}
                  </ListItem>
                  <ListItem>
                    <ListText>Actions</ListText>
                    <Popconfirm
                      title="Sure to delete?"
                      onConfirm={() => handleDelete(item.id)}
                    >
                      <Button type="link">
                        <DeleteOutlined />
                      </Button>
                    </Popconfirm>
                  </ListItem>
                </List>
              ))}
            </TableWrapper>
          )
        }
      </Media>
    </TableWrapper>
  );
};

export default TransactionsTable;
