import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Descriptions, Button, Col } from 'antd';
import styled from 'styled-components';

import useExchange from './useExchange';
import { InputField, SelectField } from 'src/components/Form';
import { BARCODE } from 'src/constants/options/StockManagement/changeStatus';
import { SearchOutlined, DoubleRightOutlined } from '@ant-design/icons';

type Props = {
  onClose?: () => void;
};

const ExchangeComponent: React.FC<Props> = () => {
  const { t } = useTranslation();
  const { formik } = useExchange();
  const { getFieldProps, setFieldValue, submitForm } = formik;

  return (
    <Div>
      <div className="stock-change-status">
        <Row gutter={[48, 8]}>
          <Col xs={24} sm={24} md={10} lg={10}>
            <Row gutter={[8, 8]}>
              <Col xs={24} sm={24} md={8} lg={8}>
                <SelectField
                  field={getFieldProps('barcode')}
                  optionsSelect={BARCODE(t)}
                  setFieldValue={setFieldValue}
                />
              </Col>
              <Col xs={24} sm={24} md={7} lg={8}>
                <InputField
                  field={getFieldProps('serial_number')}
                  inputProps={{
                    prefix: <SearchOutlined />,
                    allowClear: true,
                    placeholder: t(
                      'stock_management.change_status.serial_number',
                    ),
                  }}
                  labelAlign="left"
                />
              </Col>
              <Col xs={24} sm={24} md={7} lg={8}>
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
                <Descriptions.Item
                  label={t('stock_management.change_status.note')}
                >
                  XXXXXXXX
                </Descriptions.Item>
              </Descriptions>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={4} lg={4}>
            <Row
              gutter={24}
              align={'middle'}
              justify={'center'}
              style={{ height: '100%' }}
            >
              <DoubleRightOutlined style={{ fontSize: 30 }} />
            </Row>
          </Col>
          <Col xs={24} sm={24} md={10} lg={10}>
            <Row gutter={[8, 8]}>
              <Col xs={24} sm={24} md={8} lg={8}>
                <SelectField
                  field={getFieldProps('barcode')}
                  optionsSelect={BARCODE(t)}
                  setFieldValue={setFieldValue}
                />
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                <InputField
                  field={getFieldProps('serial_number')}
                  inputProps={{
                    prefix: <SearchOutlined />,
                    allowClear: true,
                    placeholder: t(
                      'stock_management.change_status.serial_number',
                    ),
                  }}
                  labelAlign="left"
                />
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
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
                <Descriptions.Item
                  label={t('stock_management.change_status.note')}
                >
                  XXXXXXXX
                </Descriptions.Item>
              </Descriptions>
            </Row>
          </Col>
        </Row>
        <Row gutter={[8, 8]} justify={'center'}>
          <Col xs={24} sm={24} md={8} lg={4}>
            <Button type="primary">
              {t('stock_management.change_status.btn_refund')}
            </Button>
          </Col>
          <Col xs={24} sm={24} md={8} lg={4}>
            <Button type="primary">{t('button.clear')}</Button>
          </Col>
          <Col xs={24} sm={24} md={8} lg={4}>
            <Button type="primary">{t('button.close')}</Button>
          </Col>
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

export default ExchangeComponent;
