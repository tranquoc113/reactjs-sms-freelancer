import { Button, Tag } from 'antd';
import React from 'react';
import GlobalModal from 'src/components/common/GlobalModal';
import usePopup from 'src/containers/DataManagement/DataStore/ConnectionApproval/Popup';

const columns: App.ColumnsFnc<Response.DataStoreConnectionApproval> = (t) => [
  {
    title: t('data_management.data_store.column.no'),
    dataIndex: 'id',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.member_id'),
    dataIndex: 'member_id',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.member_name'),
    dataIndex: 'member_name',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.business_name'),
    dataIndex: 'business_name',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.ceo_name'),
    dataIndex: 'ceo_name',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.business_number'),
    dataIndex: 'business_number',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.phone_number'),
    dataIndex: 'phone_number',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.memo'),
    dataIndex: 'memo',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.management'),
    dataIndex: 'connect',
    className: 'cell-nowrap',
    align: 'center',
    render(connect, record, index) {
      const { MemoComponent } = usePopup();

      return (
        <div style={{ textAlign: 'center' }}>
          {connect ? (
            <GlobalModal
              modalProps={{
                title: t('data_management.data_store.memo'),
                maskClosable: false,
                footer: null,
              }}
              content={({ onClose }) => <MemoComponent onClose={onClose} />}
            >
              <Button type="text">
                <Tag color="green">
                  {t('data_management.data_store.status_connect')}
                </Tag>
              </Button>
            </GlobalModal>
          ) : (
            <Tag color="red">
              {t('data_management.data_store.status_disconnect')}
            </Tag>
          )}
        </div>
      );
    },
  },
  {
    title: t('data_management.data_store.status'),
    dataIndex: 'status',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.last_modified_by'),
    dataIndex: 'update_user',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.last_modified_date'),
    dataIndex: 'update_time',
    className: 'cell-nowrap',
  },
];

export default columns;
