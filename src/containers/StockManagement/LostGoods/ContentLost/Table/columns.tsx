const columns: App.ColumnsFnc<Response.LostGoods> = (t) => [
  {
    title: t('stock_management.lost.column.no'),
    dataIndex: 'id',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.lost.column.state_classification'),
    dataIndex: 'stateClassification',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.lost.column.processing_date'),
    dataIndex: 'processingDate',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.lost.column.delivery_date'),
    dataIndex: 'deliveryDate',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.lost.column.receiver_name'),
    dataIndex: 'receiverName',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.lost.column.wear'),
    dataIndex: 'wear',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.lost.column.release_date'),
    dataIndex: 'releaseDate',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.lost.column.shipment_name'),
    dataIndex: 'shipmentName',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.lost.column.memo'),
    dataIndex: 'memo',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.lost.column.serial_number'),
    dataIndex: 'serialNumber',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.lost.column.unique_number'),
    dataIndex: 'uniqueNumber',
    className: 'cell-nowrap',
  },
];

export default columns;
