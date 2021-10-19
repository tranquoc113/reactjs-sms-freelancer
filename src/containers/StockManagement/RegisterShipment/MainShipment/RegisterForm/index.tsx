import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import {
  SelectField,
  InputField,
  DatePickerField,
  RadioGroupField,
  TextAreaField,
} from 'src/components/Form';
import {
  SHIPMENT_TYPE,
  SERIAL_NUMBER,
} from 'src/constants/options/registerShipment';
import useForm from './useForm';
import { DATE_TIME_FORMAT } from 'src/constants/app';

const Search: React.FC = () => {
  const { t } = useTranslation();
  const { formik, onChangeShipmentType } = useForm();
  const { getFieldProps, setFieldValue, submitForm, errors, touched } = formik;

  return (
    <Wrapper>
      <Card
        title={
          <React.Fragment>
            <FilterOutlined />
            <span style={{ marginLeft: 8 }}>
              {t('stock_management.register_shipment.register_form')}
            </span>
          </React.Fragment>
        }
      >
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <DatePickerField
              label={t(
                'stock_management.register_shipment.delivery_date_first',
              )}
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('release_date')}
              labelAlign="left"
              error={errors.release_date}
              touched={touched.release_date}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <SelectField
              label={t('stock_management.register_shipment.store_stock')}
              field={getFieldProps('store_stock')}
              optionsSelect={SERIAL_NUMBER(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <InputField
              label={t(
                'stock_management.register_shipment.shipment_unit_price',
              )}
              field={getFieldProps('shipment_unit_price')}
              inputProps={{
                prefix: <SearchOutlined />,
                allowClear: true,
                placeholder: t(
                  'stock_management.register_shipment.shipment_unit_price',
                ),
              }}
              labelAlign="left"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
            />
          </Col>
        </Row>

        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <TextAreaField
              label={t('stock_management.register_shipment.memo')}
              field={getFieldProps('memo')}
              labelAlign="left"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ height: '40px' }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={13}>
            <RadioGroupField
              field={getFieldProps('shipment_type')}
              optionsSelect={SHIPMENT_TYPE(t)}
              onChange={onChangeShipmentType}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={3}>
            <Row gutter={24} justify={'end'}>
              <div className="button-action">
                <Button
                  type="primary"
                  style={{ width: '100%' }}
                  onClick={() => submitForm()}
                >
                  {t('button.register_shipment')}
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-radio-button-wrapper {
    margin-right: 8px;
  }
`;

export default Search;
