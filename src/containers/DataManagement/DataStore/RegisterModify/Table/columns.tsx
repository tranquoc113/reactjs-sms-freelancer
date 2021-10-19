import { CopyOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import GlobalModal from 'src/components/common/GlobalModal';
import usePopup, {
  TYPE,
} from 'src/containers/DataManagement/DataStore/RegisterModify/Popup';

const columns: App.ColumnsFnc<Response.DataStore> = (t) => [
  {
    title: t('data_management.data_store.column.code_number'),
    dataIndex: 'id',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.region'),
    // dataIndex: 'area',
    className: 'cell-nowrap',
    render(row) {
      return row.area.name;
    },
  },
  {
    title: t('data_management.data_store.column.name'),
    dataIndex: 'name',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.manager_name'),
    dataIndex: 'manager_name',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.business_number'),
    dataIndex: 'business_number',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.business_type'),
    dataIndex: 'business_type_level_1',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.business_type_depth2'),
    dataIndex: 'business_type_level_2',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.tax_bill'),
    dataIndex: 'tax_bill',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.email'),
    dataIndex: 'email',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.phone_number'),
    // dataIndex: 'contacts',
    className: 'cell-nowrap',
    render(row) {
      return (
        <span>
          {row.contacts.map((item, index) => {
            return <span key={index}>{item.phone} </span>;
          })}
        </span>
      );
    },
  },
  {
    title: t('data_management.data_store.column.unit_price'),
    dataIndex: 'unit_price_id',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.salesperson_id'),
    dataIndex: 'salesperson_id',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.store_address'),
    dataIndex: 'address',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.bank_name'),
    dataIndex: 'bank_name',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.depositor_name'),
    dataIndex: 'depositor_name',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.account_number'),
    dataIndex: 'account_number',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.link_url'),
    dataIndex: 'url',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.guarantee_insurance_period'),
    dataIndex: 'insured_date_from',
    className: 'cell-nowrap',
  },
  {
    title: t('data_management.data_store.column.action'),
    dataIndex: 'id',
    className: 'cell-nowrap text-center',
    render(id) {
      const { handleSetTypePopup, RegisterForm, DetailComponent } = usePopup();

      return (
        <>
          <GlobalModal
            modalProps={{
              title: t('data_management.data_store.title_detail_store'),
              width: 700,
              footer: null,
            }}
            content={({ onClose }) => <DetailComponent onClose={onClose} />}
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
              title: t('data_management.data_store.title_edit_store'),
              width: 950,
              footer: null,
            }}
            content={({ onClose }) => <RegisterForm onClose={onClose} />}
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
