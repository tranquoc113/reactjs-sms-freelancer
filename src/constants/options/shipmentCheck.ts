export const LIST_STORE: App.OptionsFnc = (t) => [
  { label: t('all'), value: '0' },
  { label: t('stock_management.status.store_option_1'), value: '1' },
  { label: t('stock_management.status.store_option_2'), value: '2' },
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

export const STATE_CLS: App.OptionsFnc = (t) => [
  {
    label: t('stock_management.shipment_check.state_normal'),
    value: 'normal',
  },
  {
    label: t('stock_management.shipment_check.air_sales'),
    value: 'air_sales',
  },
];
