import React from 'react';
import { Button, Card, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import columns from './columns';

type Props = {
  status: App.Status;
  entities: Response.UnitPriceList[];
};

const StockStatusTable: React.FC<Props> = ({ status, entities }) => {
  const { t } = useTranslation();

  return (
    <Card
      title={
        <React.Fragment>
          <Button type="primary" icon={<PlusOutlined />}>
            {t('policy_settlement.add_group')}
          </Button>
        </React.Fragment>
      }
    >
      <Table
        rowKey="id"
        columns={columns(t)}
        dataSource={entities}
        scroll={{ x: 1400 }}
        bordered
        pagination={false}
      />
    </Card>
  );
};

export default StockStatusTable;
