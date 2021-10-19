import { Button } from 'antd';
import GlobalModal from 'src/components/common/GlobalModal';
import usePopup, {
  TYPE,
} from 'src/containers/DataManagement/MemberGroup/Popup';
import React from 'react';
import { EditOutlined } from '@ant-design/icons';

const columns: App.ColumnsFnc<Response.MemberGroup> = (t) => [
  {
    title: t('data_management.member_group.column.no'),
    dataIndex: 'id',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.member_group.column.member_group'),
    dataIndex: 'memberGroup',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.member_group.column.category'),
    dataIndex: 'category',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.member_group.column.menu_name'),
    dataIndex: 'menuName',
    className: 'cell-nowrap',
    align: 'center',
  },
  {
    title: t('data_management.member_group.column.function'),
    dataIndex: 'function',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.member_group.column.management'),
    dataIndex: 'id',
    className: 'cell-nowrap',
    render(id) {
      const { handleSetTypePopup, ManageMemberGroupComponent } = usePopup();
      return (
        <>
          <GlobalModal
            modalProps={{
              title: t(
                'data_management.member_group.tilte_update_manage_member_group',
              ),
              width: 700,
              footer: null,
            }}
            content={({ onClose }) => (
              <ManageMemberGroupComponent onClose={onClose} />
            )}
          >
            <Button
              type="text"
              onClick={() => handleSetTypePopup(TYPE.MANAGE, id)}
            >
              <EditOutlined />
            </Button>
          </GlobalModal>
        </>
      );
    },
  },
  {
    title: t('data_management.member_group.column.last_modified_by'),
    dataIndex: 'lastModifiedBy',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.member_group.column.last_modified_date'),
    dataIndex: 'lastModifiedDate',
    className: 'cell-nowrap',
  },
];

export default columns;
