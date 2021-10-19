export const STORE_GROUP: App.OptionsFnc = (t) => [
  {
    label: t('policy_settlement.store_group_option', { value: 0 }),
    value: '0',
  },
  {
    label: t('policy_settlement.store_group_option', { value: 1 }),
    value: '1',
  },
  {
    label: t('policy_settlement.store_group_option', { value: 3 }),
    value: '3',
  },
];

export const PAYMENT_METHOD: App.OptionsFnc = (t) => [
  { label: t('policy_settlement.all'), value: '0' },
  {
    label: t('policy_settlement.buying_method.disclosure'),
    value: '1',
  },
  {
    label: t('policy_settlement.buying_method.optional_agreement'),
    value: '3',
  },
];

export const UNIT: App.OptionsFnc = (t) => [
  { label: t('policy_settlement.all'), value: '0' },
  {
    label: t('policy_settlement.one_won'),
    value: '1',
  },
  {
    label: t('policy_settlement.ten_thousand'),
    value: '3',
  },
];

export const TEMPLATE: App.OptionsFnc = (t) => [
  { label: 6.1, value: '0' },
  { label: 1.1, value: '1' },
  { label: 1.2, value: '3' },
];

export const ACTIVE_AGENCY: App.OptionsFnc = (t) => [
  {
    label: t('policy_settlement.active_agency_option', { value: 0 }),
    value: '0',
  },
  {
    label: t('policy_settlement.active_agency_option', { value: 1 }),
    value: '1',
  },
  {
    label: t('policy_settlement.active_agency_option', { value: 3 }),
    value: '3',
  },
];

export const PLAN: App.OptionsFnc = (t) => [
  { label: t('policy_settlement.plan_option', { value: 0 }), value: '0' },
  { label: t('policy_settlement.plan_option', { value: 1 }), value: '1' },
  { label: t('policy_settlement.plan_option', { value: 3 }), value: '3' },
];
