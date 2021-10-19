import React from 'react';
import { Button, Card, Divider, Table } from 'antd';
import { SyncOutlined, DownloadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import useTable from 'src/hooks/useTable';
import columns from './columns';

type Props = {
  status: App.Status;
  entities: Response.RegisterShipment[];
};

const RegisterShipmentTable: React.FC<Props> = ({ status, entities }) => {
  const { t } = useTranslation();
  const { pagination, rowSelection, Selected, rowSelected } =
    useTable<Response.RegisterShipment>();

  return (
    <Card
      title={
        <React.Fragment>
          <Button
            type="primary"
            disabled={!rowSelected.length}
            icon={<SyncOutlined />}
          >
            {t('button.reset_pass')}
          </Button>
          <Divider type="vertical" />
          <Button
            type="primary"
            disabled={!rowSelected.length}
            icon={<DownloadOutlined />}
          >
            {t('button.download_excel')}
          </Button>
          <Divider type="vertical" />
          <span>
            <Selected>{`${rowSelected.length} ${t('rows_selected', {
              name: t('user'),
            })}`}</Selected>
          </span>
        </React.Fragment>
      }
    >
      <Table
        rowKey="id"
        columns={columns(t)}
        dataSource={entities}
        loading={status === 'pending'}
        pagination={pagination}
        rowSelection={rowSelection}
        scroll={{ x: 1400 }}
      />
    </Card>
  );
};

export default RegisterShipmentTable;
