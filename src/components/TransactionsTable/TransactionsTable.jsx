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
} from './TransactionsTable.styled';

const TransactionsTable = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(transactionsSelectors.getTransactions);
  console.log(transactions);
  const categories = useSelector(categoriesSelectors.getCategories);
  console.log(categories);

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
      render: category => (
        <>{categories.map(elem => (elem.id === category ? elem.name : '0'))}</>
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
      // render: sum => (<>
      //   { if (columns.type === 'income') { return (<span>{sum.toFixed(2)}</span>)
      //   } else {return (<span>{sum.toFixed(3)}</span>)}
      //   }
      // </>),
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
  console.log();

  return (
    <div>
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
                    {item.type === 'income' ? '+' : '-'}
                  </ListItem>
                  <ListItem>
                    <ListText>Category</ListText>
                    {item.category}
                    {/* {categories.find(elem => elem.id === item.category).name} */}
                  </ListItem>
                  <ListItem>
                    <ListText>Comment</ListText>
                    {item.comment}
                  </ListItem>
                  <ListItem>
                    <ListText>Sum</ListText>
                    {item.sum.toFixed(2)}
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
            </>
          )
        }
      </Media>
    </div>
  );
};

export default TransactionsTable;
