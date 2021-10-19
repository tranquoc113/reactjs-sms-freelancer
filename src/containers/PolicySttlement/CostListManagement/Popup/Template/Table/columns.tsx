const columns = (t) => [
  {
    title: t('policy_settlement.unit_price_list_management.name_model'),
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
    title: t('policy_settlement.unit_price_list_management.group', {
      value: 1,
    }),
    dataIndex: 'group',
    className: 'cell-nowrap',
    children: [
      {
        title: t('policy_settlement.unit_price_list_management.new'),
        dataIndex: 'new',
        width: 100,
      },
      {
        title: t(
          'policy_settlement.unit_price_list_management.number_movement',
        ),
        dataIndex: 'number_movement',
        width: 100,
      },
      {
        title: t('policy_settlement.unit_price_list_management.change'),
        dataIndex: 'change',
        width: 100,
      },
    ],
  },
  {
    title: t('policy_settlement.unit_price_list_management.name_model'),
    className: 'cell-nowrap',
    children: [
      {
        width: 150,
      },
    ],
  },

  {
    title: t('policy_settlement.unit_price_list_management.group', {
      value: 2,
    }),
    className: 'cell-nowrap',
    children: [
      {
        title: t('policy_settlement.unit_price_list_management.new'),
        width: 100,
      },
      {
        title: t(
          'policy_settlement.unit_price_list_management.number_movement',
        ),
        width: 100,
      },
      {
        title: t('policy_settlement.unit_price_list_management.change'),
        width: 100,
      },
    ],
  },
  {
    title: t('policy_settlement.unit_price_list_management.name_model'),
    className: 'cell-nowrap',
    children: [
      {
        width: 150,
      },
    ],
  },

  {
    title: t('policy_settlement.unit_price_list_management.group', {
      value: 3,
    }),
    className: 'cell-nowrap',
    children: [
      {
        title: t('policy_settlement.unit_price_list_management.new'),
        width: 100,
      },
      {
        title: t(
          'policy_settlement.unit_price_list_management.number_movement',
        ),
        width: 100,
      },
      {
        title: t('policy_settlement.unit_price_list_management.change'),
        width: 100,
      },
    ],
  },
];

export default columns;
