import React from 'react';
import { Card, Col, Row, Button, Collapse } from 'antd';
import {
  FilterOutlined,
  SearchOutlined,
  CaretRightOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import useForm from './useForm';
import { DATE_TIME_FORMAT } from 'src/constants/app';
import {
  SelectField,
  InputField,
  DatePickerField,
  RadioGroupField,
  CheckboxGroupField,
} from 'src/components/Form';
import {
  LIST_STORE,
  GROUP_STORE,
  RANGE_PICKERS,
  STATE_CLS,
} from 'src/constants/options/shipmentCheck';

const Search: React.FC = () => {
  const { t } = useTranslation();
  const { formik, handleClear, onChangeQuickPeriod, onChangeStateCls } =
    useForm();
  const { getFieldProps, setFieldValue, submitForm, errors, touched } = formik;
  const { Panel } = Collapse;

  return (
    <Wrapper>
      <Card
        title={
          <React.Fragment>
            <FilterOutlined />
            <span style={{ marginLeft: 8 }}>
              {t('stock_management.shipment_check.basic_search')}
            </span>
          </React.Fragment>
        }
      >
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <InputField
              label={t('stock_management.shipment_check.outlet_store')}
              field={getFieldProps('outlet_store')}
              inputProps={{
                prefix: <SearchOutlined />,
                allowClear: true,
                placeholder: t('stock_management.shipment_check.outlet_store'),
              }}
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 15 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <SelectField
              label={t('stock_management.shipment_check.shipment_store')}
              field={getFieldProps('shipment_store')}
              optionsSelect={LIST_STORE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 15 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <SelectField
              label={t('stock_management.shipment_check.device_name')}
              field={getFieldProps('device_name')}
              optionsSelect={GROUP_STORE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 15 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <SelectField
              label={t('stock_management.shipment_check.terminal')}
              field={getFieldProps('terminal')}
              optionsSelect={GROUP_STORE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 15 }}
              labelAlign="left"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <SelectField
              label={t('stock_management.shipment_check.store_group')}
              field={getFieldProps('store_group')}
              optionsSelect={GROUP_STORE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 15 }}
              labelAlign="left"
            />
          </Col>
          <Col lg={8}>
            <Button style={{ float: 'right' }} type={'primary'}>
              {t('button.search')}
            </Button>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <Collapse
              ghost
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
            >
              <Panel
                header={t('stock_management.shipment_check.advanced')}
                key="1"
              >
                <Row gutter={24}>
                  <Col xs={24} sm={24} md={12} lg={8}>
                    <InputField
                      label={t('stock_management.shipment_check.processor_nm')}
                      field={getFieldProps('processor_nm')}
                      inputProps={{
                        prefix: <SearchOutlined />,
                        allowClear: true,
                        placeholder: t(
                          'stock_management.shipment_check.processor_nm',
                        ),
                      }}
                      labelCol={{ span: 9 }}
                      wrapperCol={{ span: 15 }}
                      labelAlign="left"
                    />
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8}>
                    <InputField
                      label={t('stock_management.shipment_check.serial_number')}
                      field={getFieldProps('serial_number')}
                      inputProps={{
                        prefix: <SearchOutlined />,
                        allowClear: true,
                        placeholder: t(
                          'stock_management.shipment_check.serial_number',
                        ),
                      }}
                      labelCol={{ span: 9 }}
                      wrapperCol={{ span: 15 }}
                      labelAlign="left"
                    />
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={4}>
                    <DatePickerField
                      // label={t(
                      //   'stock_management.shipment_check.last_modified_date',
                      // )}
                      format={DATE_TIME_FORMAT}
                      setFieldValue={setFieldValue}
                      field={getFieldProps('modified_from_date')}
                      error={errors.from_date}
                      touched={touched.from_date}
                    />
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={4}>
                    <DatePickerField
                      format={DATE_TIME_FORMAT}
                      setFieldValue={setFieldValue}
                      field={getFieldProps('modified_to_date')}
                      labelAlign="left"
                      error={errors.to_date}
                      touched={touched.to_date}
                    />
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={12} lg={8}>
            <DatePickerField
              label={t('stock_management.shipment_check.from_date')}
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('from_date')}
              callBackOnChange={() =>
                setFieldValue('quick_period_search', undefined)
              }
              error={errors.from_date}
              touched={touched.from_date}
              labelAlign="left"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 15 }}
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={8}>
            <DatePickerField
              label={t('stock_management.shipment_check.to_date')}
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('to_date')}
              callBackOnChange={() =>
                setFieldValue('quick_period_search', undefined)
              }
              error={errors.to_date}
              touched={touched.to_date}
              labelAlign="left"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 15 }}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24}>
            <RadioGroupField
              field={getFieldProps('quick_period_search')}
              optionsSelect={RANGE_PICKERS(t)}
              onChange={onChangeQuickPeriod}
              radioProps={{
                optionType: 'button',
              }}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <CheckboxGroupField
              label={t('stock_management.shipment_check.state_cls')}
              labelAlign="left"
              field={getFieldProps('state_cls')}
              optionsSelect={STATE_CLS(t)}
              onChange={onChangeStateCls}
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Row gutter={24} justify={'end'}>
              <div className="button-action">
                <Button type="primary" style={{ width: '100%' }}>
                  {t('stock_management.shipment_check.cancel_sales')}
                </Button>
                <Button
                  type="primary"
                  style={{ width: '100%' }}
                  onClick={() => submitForm()}
                >
                  {t('button.search')}
                </Button>
                <Button
                  type="default"
                  style={{ width: '100%' }}
                  onClick={() => handleClear()}
                >
                  {t('button.clear')}
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
        <Row gutter={24} style={{ marginBottom: 10 }}></Row>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-radio-button-wrapper {
    margin-right: 8px;
  }
  .ant-collapse-header {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .ant-collapse-content-box {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  button {
    margin-bottom: 24px;
  }
`;

export default Search;
