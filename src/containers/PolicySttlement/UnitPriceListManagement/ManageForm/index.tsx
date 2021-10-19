import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import GlobalModal from 'src/components/common/GlobalModal';

import {
  DatePickerField,
  InputField,
  RadioGroupField,
  SelectField,
} from 'src/components/Form';
import TimeFileld from './TimeField';
import useForm from './useForm';
import { DATE_TIME_FORMAT, HOUR_FORMAT } from 'src/constants/app';
import {
  STORE_GROUP,
  PAYMENT_METHOD,
  UNIT,
  TEMPLATE,
} from 'src/constants/options/policySettlement';
import usePopup from 'src/containers/PolicySttlement/UnitPriceListManagement/Popup';
import { useAppSelector } from 'src/store';

const ManageForm: React.FC = () => {
  const { t } = useTranslation();
  const { formik, onChangeBuyingMethod, handleClear } = useForm();
  const { getFieldProps, setFieldValue, submitForm, errors, touched } = formik;

  const { Template } = usePopup();

  const props = useAppSelector((state) => state.domain.unitPriceList);

  return (
    <Wrapper>
      <Card
        title={
          <React.Fragment>
            <span style={{ marginLeft: 8 }}>
              {t('policy_settlement.unit_price_list_management')}
            </span>
          </React.Fragment>
        }
      >
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={7}>
            <SelectField
              label={t('policy_settlement.store_group')}
              field={getFieldProps('store_group')}
              optionsSelect={STORE_GROUP(t)}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 24, md: 16, lg: 16 }}
              labelAlign="left"
              error={errors.store_group}
              touched={touched.store_group}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <RadioGroupField
              field={getFieldProps('buying_method')}
              optionsSelect={PAYMENT_METHOD(t)}
              onChange={onChangeBuyingMethod}
              error={errors.buying_method}
              touched={touched.buying_method}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={5}>
            <InputField
              label={t('policy_settlement.version')}
              field={getFieldProps('version')}
              labelCol={{ xs: 24, md: 6, lg: 8 }}
              wrapperCol={{ xs: 24, md: 18, lg: 16 }}
              labelAlign="left"
              error={errors.version}
              touched={touched.version}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={4}>
            <SelectField
              label={t('policy_settlement.unit')}
              field={getFieldProps('unit')}
              optionsSelect={UNIT(t)}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 24, md: 6, lg: 10 }}
              wrapperCol={{ xs: 24, md: 18, lg: 14 }}
              labelAlign="left"
              error={errors.unit}
              touched={touched.unit}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={19} sm={19} md={8} lg={7}>
            <DatePickerField
              label={t('policy_settlement.apply_date')}
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('from_date')}
              labelAlign="left"
              error={errors.from_date}
              touched={touched.from_date}
              labelCol={{ xs: 24, md: 8, lg: 8 }}
              wrapperCol={{ xs: 20, md: 16, lg: 16 }}
            />
          </Col>
          <Col xs={5} sm={5} md={5} lg={2} style={{ paddingLeft: 0 }}>
            <TimeFileld
              format={HOUR_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('from_time')}
              error={errors.from_time}
              touched={touched.from_time}
            />
          </Col>
          <Col xs={19} sm={19} md={8} lg={4}>
            <DatePickerField
              format={DATE_TIME_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('to_date')}
              labelAlign="left"
              error={errors.to_date}
              touched={touched.to_date}
            />
          </Col>
          <Col xs={5} sm={5} md={5} lg={2} style={{ paddingLeft: 0 }}>
            <TimeFileld
              format={HOUR_FORMAT}
              setFieldValue={setFieldValue}
              field={getFieldProps('to_time')}
              error={errors.to_time}
              touched={touched.to_time}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={9}>
            <SelectField
              label={t('policy_settlement.template')}
              field={getFieldProps('template')}
              optionsSelect={TEMPLATE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ xs: 24, md: 6, lg: 6 }}
              wrapperCol={{ xs: 24, md: 18, lg: 18 }}
              labelAlign="left"
              error={errors.template}
              touched={touched.template}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <GlobalModal
              modalProps={{
                title: t('policy_settlement.modal.title', {
                  value:
                    '6_1 Effective: 2021-09-01 19: 30 ~ 2021-09-02 19: 30 ',
                }),
                width: 1024,
                footer: null,
              }}
              content={({ onClose }) => <Template onClose={onClose} />}
            >
              <Button
                type="primary"
                disabled={!formik.getFieldProps('template').value}
              >
                {t('policy_settlement.check_template')}
              </Button>
            </GlobalModal>
          </Col>
        </Row>
        <Row gutter={24} justify={'end'}>
          <div className="button-action">
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={() => submitForm()}
            >
              {t('policy_settlement.create_new_template')}
            </Button>
            <Button
              type="primary"
              style={{ width: '100%' }}
              disabled={!props.showList}
            >
              {t('button.save')}
            </Button>
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={handleClear}
            >
              {t('button.reset')}
            </Button>
          </div>
        </Row>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-radio-button-wrapper {
    margin-right: 8px;
  }
  label.ant-radio-button-wrapper {
    margin-bottom: 10px !important;
  }
  .ant-col.ant-form-item-label.ant-form-item-label-left {
    white-space: pre-wrap !important;
    overflow: unset;
  }
`;

export default ManageForm;
