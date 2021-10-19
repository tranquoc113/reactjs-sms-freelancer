import { formatDate } from 'src/utils/helpers';

const columns: App.ColumnsFnc<Response.RegisterShipment> = (t) => [
  {
    title: t('stock_management.register_shipment.no'),
    dataIndex: 'id',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.register_shipment.delivery_date'),
    dataIndex: 'deliveryDate',
    className: 'cell-nowrap',
    render(text) {
      return formatDate(text);
    },
  },
  {
    title: t('stock_management.register_shipment.delivery_group'),
    dataIndex: 'deliveryGroup',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.register_shipment.receiving_agent'),
    dataIndex: 'agent',
    className: 'cell-nowrap',
    render(text) {
      return formatDate(text);
    },
  },
  {
    title: t('stock_management.register_shipment.device_name'),
    dataIndex: 'deviceName',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.register_shipment.unit_price'),
    dataIndex: 'unitPrice',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.register_shipment.serial_number'),
    dataIndex: 'serialNumber',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.register_shipment.unique_number'),
    dataIndex: 'uniqueNumber',
    className: 'cell-nowrap',
  },
];

export default columns;
