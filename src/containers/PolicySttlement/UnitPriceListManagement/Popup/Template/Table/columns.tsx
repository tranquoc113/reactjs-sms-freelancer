const columns = (t) => [
  {
    title: t('policy_settlement.name_model'),
    dataIndex: 'name_model',
    className: 'cell-nowrap',
    children: [
      {
        dataIndex: 'name_model',
        width: 150,
      },
    ],
  },

  {
    title: t('policy_settlement.group', {
      value: 1,
    }),
    dataIndex: 'group',
    className: 'cell-nowrap',
    children: [
      {
        title: t('policy_settlement.new'),
        dataIndex: 'new',
        width: 100,
      },
      {
        title: t('policy_settlement.number_movement'),
        dataIndex: 'number_movement',
        width: 100,
      },
      {
        title: t('policy_settlement.change'),
        dataIndex: 'change',
        width: 100,
      },
    ],
  },
  {
    title: t('policy_settlement.name_model'),
    className: 'cell-nowrap',
    children: [
      {
        width: 150,
      },
    ],
  },

  {
    title: t('policy_settlement.group', {
      value: 2,
    }),
    className: 'cell-nowrap',
    children: [
      {
        title: t('policy_settlement.new'),
        width: 100,
      },
      {
        title: t('policy_settlement.number_movement'),
        width: 100,
      },
      {
        title: t('policy_settlement.change'),
        width: 100,
      },
    ],
  },
  {
    title: t('policy_settlement.name_model'),
    className: 'cell-nowrap',
    children: [
      {
        width: 150,
      },
    ],
  },

  {
    title: t('policy_settlement.group', {
      value: 3,
    }),
    className: 'cell-nowrap',
    children: [
      {
        title: t('policy_settlement.new'),
        width: 100,
      },
      {
        title: t('policy_settlement.number_movement'),
        width: 100,
      },
      {
        title: t('policy_settlement.change'),
        width: 100,
      },
    ],
  },
];

export default columns;
