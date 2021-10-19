import { formatDate } from 'src/utils/helpers';

const columns: App.ColumnsFnc<Response.StockStatus> = (t) => [
  {
    title: t('stock_management.status.no'),
    dataIndex: 'id',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.status.type'),
    dataIndex: 'type',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.status.delivery_date'),
    dataIndex: 'deliveryDate',
    className: 'cell-nowrap',
    render(text) {
      return formatDate(text);
    },
  },
  {
    title: t('stock_management.status.agency'),
    dataIndex: 'agency',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.status.release_date'),
    dataIndex: 'releaseDate',
    className: 'cell-nowrap',
    render(text) {
      return formatDate(text);
    },
  },
  {
    title: t('stock_management.status.store'),
    dataIndex: 'store',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.status.group_store'),
    dataIndex: 'groupStore',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.status.device_name'),
    dataIndex: 'deviceName',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.status.serial_number'),
    dataIndex: 'serialNumber',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.status.shipping_unit_price'),
    dataIndex: 'shippingUnitPrice',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.status.color'),
    dataIndex: 'color',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.status.status'),
    dataIndex: 'status',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.status.detail_type'),
    dataIndex: 'detailType',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.status.update_user'),
    dataIndex: 'updateUser',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.status.update_time'),
    dataIndex: 'updateTime',
    className: 'cell-nowrap',
    render(text) {
      return formatDate(text);
    },
  },
  {
    title: t('stock_management.status.unique_number'),
    dataIndex: 'uniqueNumber',
    className: 'cell-nowrap',
  },
];

export default columns;
