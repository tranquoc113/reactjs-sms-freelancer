import { Button } from 'antd';
import React from 'react';

const columns: App.ColumnsFnc<Response.UnitPriceList> = (t) => [
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
    title: (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
          }}
        >
          <span style={{ marginRight: '10px' }}>
            {t('policy_settlement.group', {
              value: 1,
            })}
          </span>
          <Button type="primary">{t('policy_settlement.add_plan')}</Button>
        </div>
      </>
    ),
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
    title: (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
          }}
        >
          <span style={{ marginRight: '10px' }}>
            {t('policy_settlement.group', {
              value: 2,
            })}
          </span>
          <Button type="primary">{t('policy_settlement.add_plan')}</Button>
        </div>
      </>
    ),
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
    title: (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
          }}
        >
          <span style={{ marginRight: '10px' }}>
            {t('policy_settlement.group', {
              value: 3,
            })}
          </span>
          <Button type="primary">{t('policy_settlement.add_plan')}</Button>
        </div>
      </>
    ),
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
