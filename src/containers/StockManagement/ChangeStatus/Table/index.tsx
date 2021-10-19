import React from 'react';
import { Button, Card, Divider, Table } from 'antd';
import { SyncOutlined, TransactionOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import useTable from 'src/hooks/useTable';
import columns from './columns';
import ChangeStatusPopup, {
  TYPE,
} from 'src/containers/StockManagement/ChangeStatus/Popup';
import GlobalModal from 'src/components/common/GlobalModal';

type Props = {
  status: App.Status;
  entities: Response.ChangeStatus[];
};

const StockStatusTable: React.FC<Props> = ({ status, entities }) => {
  const { t } = useTranslation();
  const { pagination, rowSelection, Selected, rowSelected } =
    useTable<Response.ChangeStatus>();
  const { handleSetTypePopup, ChangeStatusComponent, ExchangeComponent } =
    ChangeStatusPopup();

  return (
    <Card
      title={
        <React.Fragment>
          <GlobalModal
            modalProps={{
              title: t('stock_management.change_status.popup_status_change'),
              width: 900,
              footer: null,
              keyboard: false,
              maskClosable: false,
            }}
            content={({ onClose }) => (
              <ChangeStatusComponent onClose={onClose} />
            )}
          >
            <Button
              type="primary"
              icon={<SyncOutlined />}
              onClick={() => handleSetTypePopup(TYPE.EXCHANGE, null)}
            >
              {t('stock_management.change_status.btn_change_status')}
            </Button>
          </GlobalModal>
          <Divider type="vertical" />
          <GlobalModal
            modalProps={{
              title: t('stock_management.change_status.popup_exchange'),
              width: 1000,
              footer: null,
              keyboard: false,
              maskClosable: false,
            }}
            content={({ onClose }) => <ExchangeComponent onClose={onClose} />}
          >
            <Button
              type="primary"
              icon={<TransactionOutlined />}
              onClick={() => handleSetTypePopup(TYPE.REFUND, null)}
            >
              {t('stock_management.change_status.btn_refund')}
            </Button>
          </GlobalModal>
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

export default StockStatusTable;
