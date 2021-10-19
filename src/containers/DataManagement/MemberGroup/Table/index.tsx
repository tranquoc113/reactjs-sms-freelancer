import React from 'react';
import { Button, Card, Divider, Table } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import useTable from 'src/hooks/useTable';
import columns from './columns';
import GlobalModal from 'src/components/common/GlobalModal';
import usePopup, {
  TYPE,
} from 'src/containers/DataManagement/MemberGroup/Popup';

type Props = {
  status: App.Status;
  entities: Response.MemberGroup[];
};

const AgencyTable: React.FC<Props> = ({ status, entities }) => {
  const { t } = useTranslation();
  const { pagination, rowSelection, Selected, rowSelected } =
    useTable<Response.MemberGroup>();

  const {
    handleSetTypePopup,
    AddMemberGroupComponent,
    ManageMemberGroupComponent,
  } = usePopup();

  return (
    <Card
      title={
        <React.Fragment>
          <Button
            type="primary"
            disabled={!rowSelected.length}
            icon={<DownloadOutlined />}
          >
            {t('button.download_excel')}
          </Button>
          <Divider type="vertical" />
          <GlobalModal
            modalProps={{
              title: t('button.manage_member_group'),
              width: 700,
              footer: null,
            }}
            content={({ onClose }) => (
              <ManageMemberGroupComponent onClose={onClose} />
            )}
          >
            <Button
              type="primary"
              onClick={() => handleSetTypePopup(TYPE.MANAGE, null)}
            >
              {t('button.manage_member_group')}
            </Button>
          </GlobalModal>
          <Divider type="vertical" />
          <GlobalModal
            modalProps={{
              title: t('button.add_member_group'),
              width: 700,
              footer: null,
            }}
            content={({ onClose }) => (
              <AddMemberGroupComponent onClose={onClose} />
            )}
          >
            <Button
              type="primary"
              onClick={() => handleSetTypePopup(TYPE.ADD, null)}
            >
              {t('button.add_member_group')}
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

export default AgencyTable;
