import React from 'react';
import { Avatar, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { formatDate } from 'src/utils/helpers';

const columns: App.ColumnsFnc<Response.User> = (t) => [
  {
    title: t('Name'),
    dataIndex: 'name',
    render(text: string, row) {
      return (
        <Link to="#">
          <Avatar src={row.avatar} />
          <span style={{ marginLeft: 8 }}>{text}</span>
        </Link>
      );
    },
    className: 'cell-nowrap',
  },
  {
    title: t('Nickname'),
    dataIndex: 'nickname',
  },
  {
    title: t('Region'),
    dataIndex: 'region',
  },
  {
    title: t('Phone'),
    dataIndex: 'phone',
    className: 'cell-nowrap',
  },
  {
    title: t('Battery'),
    dataIndex: 'battery',
  },
  {
    title: t('Ttuta Profile'),
    dataIndex: 'ttutaProfile',
  },
  {
    title: t('Login Times'),
    dataIndex: 'loginTimes',
  },
  {
    title: t('Last Visit'),
    dataIndex: 'lastVisit',
    className: 'cell-nowrap',
    render(text) {
      return formatDate(text);
    },
  },
  {
    title: t('Signup Date'),
    dataIndex: 'signupDate',
    className: 'cell-nowrap',
    render(text) {
      return formatDate(text);
    },
  },
  {
    title: t('Withdraw Date'),
    dataIndex: 'withdrawDate',
    className: 'cell-nowrap',
    render(text) {
      return formatDate(text);
    },
  },
  {
    title: t('Activity Status'),
    dataIndex: 'activityStatus',
    render(text) {
      return <Tag color="green">{text}</Tag>;
    },
  },
];

export default columns;
