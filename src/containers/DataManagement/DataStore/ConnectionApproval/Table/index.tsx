import React from 'react';
import { Card, Table } from 'antd';
import { useTranslation } from 'react-i18next';

import useTable from 'src/hooks/useTable';
import columns from './columns';

type Props = {
  status: App.Status;
  entities: Response.DataStoreConnectionApproval[];
};

const DataStoreTable: React.FC<Props> = ({ status, entities }) => {
  const { t } = useTranslation();
  const { pagination } = useTable<Response.DataStoreConnectionApproval>();

  return (
    <Card>
      <Table
        rowKey="id"
        columns={columns(t)}
        dataSource={entities}
        loading={status === 'pending'}
        pagination={pagination}
        scroll={{ x: 1400 }}
      />
    </Card>
  );
};

export default DataStoreTable;
