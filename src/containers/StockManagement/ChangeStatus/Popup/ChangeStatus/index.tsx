import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Descriptions, Button, Col, Card, Table } from 'antd';
import styled from 'styled-components';

import useChangeStatus from './useChangeStatus';
import { InputField, SelectField } from 'src/components/Form';
import { BARCODE } from 'src/constants/options/StockManagement/changeStatus';
import { SearchOutlined } from '@ant-design/icons';
import columns from './columns';
import useTable from 'src/hooks/useTable';

type Props = {
  id?: number;
  onClose?: () => void;
};

const ChangeStatusComponent: React.FC<Props> = ({ id }) => {
  const { t } = useTranslation();
  const { entities, formik } = useChangeStatus();
  const { getFieldProps, setFieldValue, submitForm } = formik;
  const { pagination, rowSelection } = useTable<Response.ChangeStatus>();

  return (
    <Div>
      <div className="stock-change-status">
        <Row gutter={[8, 8]}>
          <Col xs={24} sm={24} md={10} lg={10}>
            <SelectField
              label={t('stock_management.change_status.barcode')}
              field={getFieldProps('barcode')}
              optionsSelect={BARCODE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 24, md: 6, lg: 6 }}
              wrapperCol={{ xs: 24, md: 18, lg: 18 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={7} lg={7}>
            <InputField
              field={getFieldProps('serial_number')}
              inputProps={{
                prefix: <SearchOutlined />,
                allowClear: true,
                placeholder: t('stock_management.change_status.serial_number'),
              }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={7} lg={7}>
            <Button type="primary" onClick={() => submitForm()}>
              {t('button.search')}
            </Button>
          </Col>
          <Descriptions bordered size="small" column={1} colon={true}>
            <Descriptions.Item
              label={t('stock_management.change_status.delivery_date')}
            >
              2021-07-25
            </Descriptions.Item>
            <Descriptions.Item
              label={t('stock_management.change_status.receiving_agent')}
            >
              xxxxxx
            </Descriptions.Item>
            <Descriptions.Item
              label={t('stock_management.change_status.device_name')}
            >
              TM-4000
            </Descriptions.Item>
            <Descriptions.Item
              label={t('stock_management.change_status.color_name')}
            >
              블랙
            </Descriptions.Item>
            <Descriptions.Item
              label={t('stock_management.change_status.actual_price')}
            >
              12,000,000
            </Descriptions.Item>
            <Descriptions.Item
              label={t('stock_management.change_status.shipment_store')}
            >
              폰세일
            </Descriptions.Item>
            <Descriptions.Item
              label={t('stock_management.change_status.receipt_price')}
            >
              780,000
            </Descriptions.Item>
            <Descriptions.Item
              label={t('stock_management.change_status.receipt_type')}
            >
              정상
            </Descriptions.Item>
            <Descriptions.Item
              label={t('stock_management.change_status.serial_number')}
            >
              XXXXXXXX
            </Descriptions.Item>
            <Descriptions.Item label={t('stock_management.change_status.note')}>
              <InputField
                field={getFieldProps('note')}
                inputProps={{
                  allowClear: true,
                }}
              />
            </Descriptions.Item>
          </Descriptions>
        </Row>
        <Row gutter={[8, 8]}>
          <Col xs={24} sm={24} md={8} lg={4}>
            <Button type="primary">
              {t('stock_management.change_status.btn_tmp_storage')}
            </Button>
          </Col>
          <Col xs={24} sm={24} md={8} lg={4}>
            <Button type="primary">
              {t('stock_management.change_status.btn_bad_register')}
            </Button>
          </Col>
          <Col xs={24} sm={24} md={8} lg={4}>
            <Button type="primary">
              {t('stock_management.change_status.btn_del_tmp_storage')}
            </Button>
          </Col>
          <Col xs={24} sm={24} md={8} lg={4}>
            <Button type="primary">
              {t('stock_management.change_status.btn_history')}
            </Button>
          </Col>
          <Col xs={24} sm={24} md={8} lg={4}>
            <Button type="primary">
              {t('stock_management.change_status.btn_used')}
            </Button>
          </Col>
          <Col xs={24} sm={24} md={8} lg={4}>
            <Button type="primary">
              {t('stock_management.change_status.btn_refund_completed')}
            </Button>
          </Col>
        </Row>
        <Row gutter={[8, 8]}>
          <Card>
            <Table
              rowKey="id"
              columns={columns(t)}
              dataSource={entities}
              pagination={pagination}
              rowSelection={rowSelection}
              scroll={{ y: 150, x: 300 }}
            />
          </Card>
        </Row>
      </div>
    </Div>
  );
};

const Div = styled.div`
  .stock-change-status {
    > div {
      padding: 10px 0;
      border-bottom: 1px solid #f2f2f2;
    }
    label {
      font-weight: bold;
    }
    .ant-descriptions {
      width: 100%;
    }
    .ant-descriptions-item-content .ant-form-item {
      margin: 0;
    }
    .ant-btn {
      width: 100%;
    }
  }
`;

export default ChangeStatusComponent;
