import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions, transactionsSelectors } from '../../redux';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    sorter: true,
    width: '15%',
  },
  {
    title: 'Type',
    dataIndex: 'income',
    key: 'income',
    render: (_, { income }) => (income === 'increase' ? '+' : '-'),

    filters: [
      {
        text: '+',
        value: 'increase',
      },
      {
        text: '-',
        value: 'decrease',
      },
    ],
    width: '15%',
    onFilter: (value, item) => item.income.includes(value),
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
    width: '20%',
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
  },
];

// const getRandomuserParams = params => ({
//   results: params.pagination?.pageSize,
//   page: params.pagination?.current,
//   ...params,
// });

const TransactionsTable = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(transactionsSelectors.getTransactions);
  console.log(transactions);

  // // const [data, setData] = useState();

  // const [tableParams, setTableParams] = useState({
  //   pagination: {
  //     current: 1,
  //     pageSize: 10,
  //   },
  // });

  // const fetchData = () => {
  //   setLoading(true);
  //   fetch(
  //     `https://randomuser.me/api?${qs.stringify(
  //       getRandomuserParams(tableParams)
  //     )}`
  //   )
  //     .then(res => res.json())
  //     .then(({ results }) => {
  //       setData(results);
  //       setLoading(false);
  //       setTableParams({
  //         ...tableParams,
  //         pagination: {
  //           ...tableParams.pagination,
  //           total: 200,
  //           // 200 is mock data, you should read it from server
  //           // total: data.totalCount,
  //         },
  //       });
  //     });
  // };

  // useEffect(() => {
  //   dispatch(getTransactions());
  // }, [dispatch]);

  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [JSON.stringify(tableParams)]);

  // const handleTableChange = (pagination, filters, sorter) => {
  //   setTableParams({
  //     pagination,
  //     filters,
  //     ...sorter,
  //   });
  // };

  return (
    <Table
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
      // pagination={tableParams.pagination}
      // loading={loading}
      // onChange={handleTableChange}
      scroll={{
        y: 255,
      }}
    />
  );
};

export default TransactionsTable;
