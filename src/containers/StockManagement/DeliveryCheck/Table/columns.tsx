import { formatDate } from 'src/utils/helpers';
import { Tag } from 'antd';
import React from 'react';

const columns: App.ColumnsFnc<Response.DeliveryCheck> = (t) => [
  {
    title: t('stock_management.delivery_check.no'),
    dataIndex: 'id',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.delivery_check.delivery_date'),
    dataIndex: 'deliveryDate',
    className: 'cell-nowrap',
    render(text) {
      return formatDate(text, 'DD/MM');
    },
  },
  {
    title: t('stock_management.delivery_check.delivery_group'),
    dataIndex: 'deliveryGroup',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.delivery_check.shipment_store'),
    dataIndex: 'shipmentStore',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.delivery_check.holding'),
    dataIndex: 'holding',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.delivery_check.division'),
    dataIndex: 'division',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.delivery_check.device_name'),
    dataIndex: 'deviceName',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.delivery_check.serial_number'),
    dataIndex: 'serialNumber',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.delivery_check.actual_price'),
    dataIndex: 'actualPrice',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.delivery_check.color'),
    dataIndex: 'color',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.delivery_check.handler'),
    dataIndex: 'handler',
    className: 'cell-nowrap',
  },
  {
    title: t('button.edit'),
    dataIndex: 'id',
    className: 'cell-nowrap',
    render(text) {
      return <Tag color="green">{t('button.edit')}</Tag>;
    },
  },
  {
    title: t('button.delete'),
    dataIndex: 'id',
    className: 'cell-nowrap',
    render(text) {
      return <Tag color="red">{t('button.delete')}</Tag>;
    },
  },
  {
    title: t('stock_management.delivery_check.last_modified_date'),
    dataIndex: 'lastUpdated',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.delivery_check.unique_number'),
    dataIndex: 'uniqueNumber',
    className: 'cell-nowrap',
  },
];

export default columns;
