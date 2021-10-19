const columns: App.ColumnsFnc<Response.ChangeStatus> = (t) => [
  {
    title: t('stock_management.change_status.no'),
    dataIndex: 'id',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.change_status.name_holder'),
    dataIndex: 'nameHolder',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.change_status.device_name'),
    dataIndex: 'deviceName',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.change_status.color'),
    dataIndex: 'color',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.change_status.processor'),
    dataIndex: 'processor',
    className: 'cell-nowrap',
  },
  {
    title: t('stock_management.change_status.serial_number'),
    dataIndex: 'serialNumber',
    className: 'cell-nowrap',
  },
];

export default columns;
