import { Table } from 'antd';
import qs from 'qs';
import React, { useEffect, useState } from 'react';
const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    sorter: true,
    width: '15%',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    filters: [
      {
        text: '+',
        value: '+',
      },
      {
        text: '-',
        value: '-',
      },
    ],
    width: '15%',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    width: '15%',
  },
  {
    title: 'Comment',
    dataIndex: 'comment',
    width: '20%',
  },
  {
    title: 'Sum',
    dataIndex: 'sum',
    width: '15%',
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
  },
];

const getRandomuserParams = params => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const TransactionTable = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(
        getRandomuserParams(tableParams)
      )}`
    )
      .then(res => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  return (
    <Table
      columns={columns}
      rowKey={record => record.login.uuid}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
      scroll={{
        y: 255,
      }}
    />
  );
};

export default TransactionTable;
