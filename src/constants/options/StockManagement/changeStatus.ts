export const RANGE_PICKERS: App.OptionsFnc = (t) => [
  { label: t('button.today'), value: 'today' },
  { label: t('button.yesterday'), value: 'yesterday' },
  { label: t('button.week'), value: 'week' },
  { label: t('button.month'), value: 'month' },
];

export const PROCESS_TYPE: App.OptionsFnc = (t) => [
  { label: t('stock_management.change_status.type_defective'), value: '1' },
  { label: t('stock_management.change_status.type_exchange'), value: '2' },
  {
    label: t('stock_management.change_status.type_history_terminal'),
    value: '3',
  },
  { label: t('stock_management.change_status.type_used'), value: '4' },
  { label: t('stock_management.change_status.type_refund'), value: '5' },
];

export const SHIPMENT_STORE: App.OptionsFnc = (t) => [
  { label: t('all'), value: '0' },
];
export const BARCODE: App.OptionsFnc = (t) => [
  { label: t('stock_management.change_status.barcode'), value: '0' },
  { label: t('stock_management.change_status.serial_number'), value: '1' },
];
