export const USER_TYPE_SEARCH: App.OptionsFnc = (t) => [
  { label: t('이름'), value: 'name' },
  { label: t('닉네임'), value: 'nickname' },
  { label: t('지역'), value: 'region' },
  { label: t('휴대전화'), value: 'phone' },
];

export const USER_TTUTA_PROFILE: App.OptionsFnc = (t) => [
  { label: t('전체'), value: '' },
  { label: t('Y'), value: 'yes' },
  { label: t('N'), value: 'no' },
];

export const USER_ACTIVITY_STATUS: App.OptionsFnc = (t) => [
  { label: t('전체'), value: '' },
  { label: t('활동중'), value: 'normal' },
  { label: t('N일시정지'), value: 'blocked' },
];

export const USER_LEVELS: App.OptionsFnc = (t) => [
  { label: t('전체'), value: '' },
  { label: t('배터리1'), value: 1 },
  { label: t('배터리2'), value: 2 },
  { label: t('배터리3'), value: 3 },
  { label: t('배터리4'), value: 4 },
  { label: t('배터리5'), value: 5 },
];

export const TIME_TYPE: App.OptionsFnc = (t) => [
  { label: t('가입일시'), value: 'sign_up_date' },
  { label: t('탈퇴일시'), value: 'withdraw_date' },
  { label: t('최근 로그인'), value: 'last_visit_date' },
];

export const RANGE_PICKERS: App.OptionsFnc = (t) => [
  { label: t('오늘'), value: 'today' },
  { label: t('어제'), value: 'yesterday' },
  { label: t('일주일'), value: 'week' },
  { label: t('지난달'), value: 'month' },
];
