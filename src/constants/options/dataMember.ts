export const MEMBER_TYPE: App.OptionsFnc = (t) => [
  { label: t('data_management.members.member_type.member'), value: 'member' },
  {
    label: t('data_management.members.member_type.apply_for_member_ship'),
    value: 'apply_for_member_ship',
  },
];

export const MEMBER_LIST: App.OptionsFnc = (t) => [
  { label: t('Vương Bình'), value: '1' },
  { label: t('Mây'), value: '2' },
  { label: t('BagWell'), value: '3' },
];

export const LIST_REGION: App.OptionsFnc = (t) => [
  { label: t('all'), value: '0' },
  { label: t('data_management.data_store.region_option1'), value: 'sigg' },
  { label: t('data_management.data_store.region_option2'), value: 'emd' },
  { label: t('data_management.data_store.region_option3'), value: 'sido' },
];
