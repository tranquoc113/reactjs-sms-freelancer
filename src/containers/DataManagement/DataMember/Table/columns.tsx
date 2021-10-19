import { Button, Divider } from 'antd';
import React from 'react';
import GlobalModal from 'src/components/common/GlobalModal';
import EditMember from '../Popup/EditForm';
import { EditOutlined } from '@ant-design/icons';
import DeleteMemeber from '../Popup/Delete';
import usePopup, { TYPE } from '../Popup';

const columns: App.ColumnsFnc<Response.DataMember> = (t) => [
  {
    title: t('data_management.members.column.no'),
    dataIndex: 'id',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.members.column.member_group'),
    dataIndex: 'memberGroup',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.members.column.member_id'),
    dataIndex: 'memberId',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.members.column.member_name'),
    dataIndex: 'memberName',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.members.column.store_agency'),
    dataIndex: 'storeAgency',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.members.column.ceo_name'),
    dataIndex: 'ceoName',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.members.column.business_number'),
    dataIndex: 'businessNumber',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.members.column.phone_number'),
    dataIndex: 'phoneNumber',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.members.column.memo'),
    dataIndex: 'memo',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.members.column.management'),
    dataIndex: 'id',
    className: 'cell-nowrap',
    render(id) {
      const { handleSetTypePopup } = usePopup();
      return (
        <>
          <GlobalModal
            modalProps={{
              title: t(
                'data_management.authority_management.member.member_approval',
              ),
              width: 700,
              footer: null,
            }}
            content={({ onClose }) => <EditMember onClose={onClose} />}
          >
            <Button
              type="text"
              onClick={() => handleSetTypePopup(TYPE.UPDATE, id)}
            >
              <EditOutlined />
            </Button>
          </GlobalModal>

          <Divider type="vertical" />
          <DeleteMemeber id={id} />
        </>
      );
    },
  },
  {
    title: t('data_management.members.column.status'),
    dataIndex: 'status',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.members.column.last_modified_by'),
    dataIndex: 'lastModifiedBy',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.members.column.last_modified_date'),
    dataIndex: 'lastModifiedDate',
    className: 'cell-nowrap',
  },
];

export default columns;
