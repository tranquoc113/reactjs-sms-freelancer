import { formatDate } from 'src/utils/helpers';

const columns: App.ColumnsFnc<Response.ShipmentCheck> = (t) => [
  {
    title: t('stock_management.shipment_check.no'),
    dataIndex: 'id',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.shipment_check.release_date'),
    dataIndex: 'deliveryDate',
    className: 'cell-nowrap',
    render(text) {
      return formatDate(text, 'DD/MM');
    },
  },
  {
    title: t('stock_management.shipment_check.warehousing_agency'),
    dataIndex: 'warehousingAgency',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.shipment_check.outlet_store'),
    dataIndex: 'outletStore',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.shipment_check.delivery_date'),
    dataIndex: 'deliveryDate',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.shipment_check.store_group'),
    dataIndex: 'storeGroup',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.shipment_check.terminal_name'),
    dataIndex: 'terminalName',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.shipment_check.serial_number'),
    dataIndex: 'serialNumber',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.shipment_check.shipping_unit_price'),
    dataIndex: 'shippingUnitPrice',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.shipment_check.color_name'),
    dataIndex: 'colorName',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.shipment_check.current_status'),
    dataIndex: 'currentStatus',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.shipment_check.manager'),
    dataIndex: 'manager',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.shipment_check.last_modified_date'),
    dataIndex: 'lastUpdated',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.shipment_check.unique_number'),
    dataIndex: 'uniqueNumber',
    className: 'cell-nowrap',
  },
];

export default columns;
