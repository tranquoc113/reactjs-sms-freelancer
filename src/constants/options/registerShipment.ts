export const LIST_STORE: App.OptionsFnc = (t) => [
  { label: t('all'), value: '0' },
  { label: t('stock_management.status.store_option_1'), value: '1' },
  { label: t('stock_management.status.store_option_2'), value: '2' },
];

export const STOCK_STATUS_TYPE: App.OptionsFnc = (t) => [
  { label: t('all'), value: '' },
  { label: t('stock_management.status.type_device'), value: 'device' },
  { label: t('stock_management.status.type_usim'), value: 'usim' },
];

export const GROUP_STORE: App.OptionsFnc = (t) => [
  { label: t('all'), value: '0' },
  { label: t('stock_management.status.store_option_1'), value: '1' },
  { label: t('stock_management.status.store_option_2'), value: '2' },
];

export const RANGE_PICKERS: App.OptionsFnc = (t) => [
  { label: t('button.today'), value: 'today' },
  { label: t('button.yesterday'), value: 'yesterday' },
  { label: t('button.week'), value: 'week' },
  { label: t('button.month'), value: 'month' },
];

export const DEVICE_STATUS: App.OptionsFnc = (t) => [
  { label: t('stock_management.status.type_device_wearing'), value: '' },
  { label: t('stock_management.status.type_device_release'), value: 'release' },
  { label: t('stock_management.status.type_device_opening'), value: 'opening' },
  { label: t('stock_management.status.type_device_lost'), value: 'lost' },
  {
    label: t('stock_management.status.type_device_state_change'),
    value: 'state_change',
  },
  { label: t('other'), value: 'other' },
];

export const SERIAL_NUMBER: App.OptionsFnc = (t) => [
  { label: t('all'), value: '0' },
  {
    label: t('stock_management.register_shipment.serial_number_1'),
    value: 'barcode',
  },
  {
    label: t('stock_management.register_shipment.serial_number_2'),
    value: 'barcode',
  },
];

export const SHIPMENT_TYPE: App.OptionsFnc = (t) => [
  {
    label: t(
      'stock_management.register_shipment.shipment_type.terminal_shipment',
    ),
    value: 'terminal_shipment',
  },
  {
    label: t('stock_management.register_shipment.shipment_type.usim'),
    value: 'usim',
  },
  {
    label: t('stock_management.register_shipment.shipment_type.air_sales'),
    value: 'air_sales',
  },
];
