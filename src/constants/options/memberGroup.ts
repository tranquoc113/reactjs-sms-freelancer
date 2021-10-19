export const LIST_PERMISSION: App.OptionsFnc = (t) => [
  {
    title: '홈',
    key: '0-0',
  },
  {
    title: '재고관리',
    key: '0-1',
    children: [
      {
        title: '입고',
        key: '0-1-0',
        children: [
          {
            title: 'lea입고수정 (POPUP)',
            key: '0-1-0-0',
          },
          {
            title: '입고등록 (POPUP)',
            key: '0-1-0-1',
          },
        ],
      },
      {
        title: '출고등록',
        key: '0-0-1',
      },
    ],
  },
];
