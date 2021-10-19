import React from 'react';
import { Table } from 'antd';
import { useTranslation } from 'react-i18next';

import columns from './columns';

function generalData() {
  const data: any = [];
  for (let i = 0; i < 8; i++) {
    data.push({
      id: i,
      name_model: 'SM-G981NW' + i,
      new: i + 1000,
      number_movement: '',
      change: '',
    });
  }
  return data;
}

const TemplateTable: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Table
      rowKey="id"
      columns={columns(t)}
      dataSource={generalData()}
      pagination={false}
      bordered
      size="middle"
      scroll={{ x: 'calc(700px + 50%)', y: 240 }}
    />
  );
};

export default TemplateTable;
