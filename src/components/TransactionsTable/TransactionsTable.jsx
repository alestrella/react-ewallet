import { Popconfirm, Button } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTransactions,
  deleteTransaction,
  transactionsSelectors,
} from '../../redux';

import Media from 'react-media';
import {
  List,
  ListItem,
  ListText,
  StyledTable,
  TableWrapper,
} from './TransactionsTable.styled';

const TransactionsTable = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(transactionsSelectors.getTransactions);
  // console.log(transactions);

  const handleDelete = id => {
    dispatch(deleteTransaction(id));
  };

  useEffect(() => {
    dispatch(getTransactions());
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
      render: (_, { type }) => (type === 'income' ? '+' : '-'),

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
      title: 'Operation',
      dataIndex: 'operation',
      render: (_, record) =>
        transactions.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="link">Delete</Button>
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
            <>
              {transactions?.map(item => (
                <List key={item.id}>
                  <ListItem>
                    <ListText>Date</ListText>
                    {item.date.slice(0, 10).replaceAll('-', '.')}
                  </ListItem>
                  <ListItem>
                    <ListText>Type</ListText>
                    {item.type}
                  </ListItem>
                  <ListItem>
                    <ListText>Category</ListText>
                    {item.category}
                  </ListItem>
                  <ListItem>
                    <ListText>Comment</ListText>
                    {item.comment}
                  </ListItem>
                  <ListItem>
                    <ListText>Sum</ListText>
                    {item.sum}
                  </ListItem>
                  <ListItem>
                    <ListText>Balance</ListText>
                    {item.balance.toFixed(2)}
                  </ListItem>
                  <ListItem>
                    <ListText>Operation</ListText>
                    <Popconfirm
                      title="Sure to delete?"
                      onConfirm={() => handleDelete(item.id)}
                    >
                      <Button type="link">Delete</Button>
                    </Popconfirm>
                  </ListItem>
                </List>
              ))}
            </>
          )
        }
      </Media>
    </TableWrapper>
  );
};

export default TransactionsTable;
