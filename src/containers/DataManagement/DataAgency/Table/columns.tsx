import { CopyOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import usePopup, { TYPE } from 'src/containers/DataManagement/DataAgency/Popup';
import GlobalModal from 'src/components/common/GlobalModal';

const columns: App.ColumnsFnc<Response.Agency> = (t) => [
  {
    title: t('data_management.data_agency.code_num'),
    dataIndex: 'id',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_agency.branch_nm'),
    dataIndex: 'name',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_agency.company_nm'),
    dataIndex: 'company_name',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_agency.manager_name'),
    dataIndex: 'manager_name',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_agency.business_num'),
    dataIndex: 'business_number',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_agency.phone'),
    dataIndex: 'manager_phone',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_agency.email'),
    dataIndex: 'email',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_agency.fax_num'),
    dataIndex: 'fax',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_agency.address'),
    dataIndex: 'address',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_agency.bank_name'),
    dataIndex: 'bank_name',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_agency.depositor'),
    dataIndex: 'depositor',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_agency.account_num'),
    dataIndex: 'account_number',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_agency.action'),
    dataIndex: 'id',
    className: 'cell-nowrap text-center',
    render(id) {
      const {
        handleSetTypePopup,
        RegisterAgencyComponent,
        DetailAgencyComponent,
      } = usePopup();
      return (
        <>
          <GlobalModal
            modalProps={{
              title: t('data_management.data_agency.agency_info'),
              width: 700,
              footer: null,
            }}
            content={({ onClose }) => (
              <DetailAgencyComponent onClose={onClose} />
            )}
          >
            <Button
              type="text"
              onClick={() => handleSetTypePopup(TYPE.DETAIL, id)}
            >
              <CopyOutlined />
            </Button>
          </GlobalModal>
          <GlobalModal
            modalProps={{
              title: t('data_management.data_agency.agency_update'),
              width: 950,
              footer: null,
            }}
            content={({ onClose }) => (
              <RegisterAgencyComponent onClose={onClose} />
            )}
          >
            <Button
              type="text"
              onClick={() => handleSetTypePopup(TYPE.UPDATE, id)}
            >
              <EditOutlined />
            </Button>
          </GlobalModal>
        </>
      );
    },
  },
];

export default columns;
