import React from 'react';
import { Button, Card, Divider, Table } from 'antd';
import {
  SyncOutlined,
  DownloadOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import useTable from 'src/hooks/useTable';
import columns from './columns';

type Props = {
  status: App.Status;
  entities: Response.DeliveryCheck[];
};

const DeliveryCheckTable: React.FC<Props> = ({ status, entities }) => {
  const { t } = useTranslation();
  const { pagination, rowSelection, Selected, rowSelected } =
    useTable<Response.DeliveryCheck>();

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
          <Divider type="vertical" />
          <Button type="default" icon={<UploadOutlined />}>
            {t('stock_management.delivery_check.excel_upload_sk')}
          </Button>
          <Divider type="vertical" />
          <Button type="default" icon={<UploadOutlined />}>
            {t('stock_management.delivery_check.excel_upload_kt')}
          </Button>
          <Divider type="vertical" />
          <Button type="default" icon={<UploadOutlined />}>
            {t('stock_management.delivery_check.excel_upload_lg')}
          </Button>
          <Divider type="vertical" />
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

export default DeliveryCheckTable;
