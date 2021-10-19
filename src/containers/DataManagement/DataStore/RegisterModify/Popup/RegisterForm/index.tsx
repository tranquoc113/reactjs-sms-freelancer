import React from 'react';
import { Button, Col, Divider, Form, Row } from 'antd';
import { useTranslation } from 'react-i18next';

import { DatePickerField, InputField, SelectField } from 'src/components/Form';
import useForm from './useForm';
import { SALESPERSON_GROUP } from 'src/constants/options/dataStore';
import { DATE_TIME_FORMAT } from 'src/constants/app';
import AreaSearch from 'src/containers/DataManagement/DataStore/RegisterModify/Popup/AreaSearch';

type Props = {
  id?: number;
  onClose?: () => void;
};

const RegisterForm: React.FC<Props> = ({ id }) => {
  const { t } = useTranslation();
  const { formik, handleCloseModal, resultStoreGroup } = useForm({ t });
  const { getFieldProps, setFieldValue, errors, touched, submitForm } = formik;

  // @ts-ignore
  return (
    <Form>
      <Row gutter={24}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.data_store.column.code_number')}
            field={getFieldProps('id')}
            name="id"
            inputProps={{
              allowClear: true,
              readOnly: true,
              disabled: true,
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.id}
            touched={touched.id}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <AreaSearch
            label={t('data_management.data_store.region')}
            field={getFieldProps('area_id')}
            setFieldValue={setFieldValue}
            errors={errors.area_id}
            touched={touched.area_id}
            labelCol={{ xs: 24, md: 8, lg: 8 }}
            wrapperCol={{ xs: 24, md: 16, lg: 16 }}
            labelAlign={'left'}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <SelectField
            label={t('data_management.data_store.store_group')}
            field={getFieldProps('store_group_id')}
            optionsSelect={resultStoreGroup}
            setFieldValue={setFieldValue}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.store_group_id}
            touched={touched.store_group_id}
            selectProps={{
              placeholder: t('data_management.data_store.store_group'),
            }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <SelectField
            label={t('data_management.data_store.column.salesperson_group')}
            field={getFieldProps('salesperson_id')}
            optionsSelect={SALESPERSON_GROUP(t)}
            setFieldValue={setFieldValue}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.salesperson_id}
            touched={touched.salesperson_id}
            selectProps={{
              placeholder: t(
                'data_management.data_store.column.salesperson_group',
              ),
            }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.data_store.ceo_name')}
            field={getFieldProps('manager_name')}
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.ceo_name'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.manager_name}
            touched={touched.manager_name}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.data_store.name')}
            field={getFieldProps('name')}
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.name'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.name}
            touched={touched.name}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.data_store.business_number')}
            field={getFieldProps('business_number')}
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.business_number'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.business_number}
            touched={touched.business_number}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <SelectField
            label={t('data_management.data_store.column.business_type')}
            field={getFieldProps('business_type_level_1')}
            optionsSelect={SALESPERSON_GROUP(t)}
            setFieldValue={setFieldValue}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.business_type_level_1}
            touched={touched.business_type_level_1}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <SelectField
            label={t('data_management.data_store.column.business_type_depth2')}
            field={getFieldProps('business_type_level_2')}
            optionsSelect={SALESPERSON_GROUP(t)}
            setFieldValue={setFieldValue}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.business_type_level_2}
            touched={touched.business_type_level_2}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.data_store.contact1')}
            field={getFieldProps('contacts[0]')}
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.contact1'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.contacts}
            touched={touched.contacts}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.data_store.contact2')}
            field={getFieldProps('contacts[1]')}
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.contact2'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.contacts}
            touched={touched.contacts}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.data_store.contact3')}
            field={getFieldProps('contacts[2]')}
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.contact3'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.contacts}
            touched={touched.contacts}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.data_store.column.email')}
            field={getFieldProps('email')}
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.column.email'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.email}
            touched={touched.email}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.data_store.column.tax_bill')}
            field={getFieldProps('tax_bill')}
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.column.tax_bill'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.tax_bill}
            touched={touched.tax_bill}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.data_store.fax_number')}
            field={getFieldProps('fax')}
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.faxNumber'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.fax}
            touched={touched.fax}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.data_store.column.store_address')}
            field={getFieldProps('address')}
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.column.storeAddress'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.address}
            touched={touched.address}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.data_store.column.bank_name')}
            field={getFieldProps('bank_name')}
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.column.bank_name'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.bank_name}
            touched={touched.bank_name}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.data_store.column.depositor')}
            field={getFieldProps('depositor_name')}
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.column.depositor'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.depositor_name}
            touched={touched.depositor_name}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.data_store.account_number')}
            field={getFieldProps('account_number')}
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.accountNumber'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.account_number}
            touched={touched.account_number}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <DatePickerField
            label={t('data_management.data_store.from_date')}
            format={DATE_TIME_FORMAT}
            setFieldValue={setFieldValue}
            field={getFieldProps('insured_date_from')}
            labelAlign="left"
            error={errors.insured_date_from}
            touched={touched.insured_date_from}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <DatePickerField
            label={t('data_management.data_store.to_date')}
            format={DATE_TIME_FORMAT}
            setFieldValue={setFieldValue}
            field={getFieldProps('insured_date_to')}
            labelAlign="left"
            error={errors.insured_date_to}
            touched={touched.insured_date_to}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <SelectField
            label={t('data_management.data_store.unit_price')}
            field={getFieldProps('unit_price_id')}
            optionsSelect={SALESPERSON_GROUP(t)}
            setFieldValue={setFieldValue}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.unit_price_id}
            touched={touched.unit_price_id}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.data_store.url')}
            field={getFieldProps('url')}
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.data_store.url'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.url}
            touched={touched.url}
          />
        </Col>
      </Row>
      <Divider />
      <Row gutter={24} justify={'end'}>
        <div className="button-action">
          <Button type="primary" onClick={() => submitForm()}>
            {t('button.create')}
          </Button>
          <Button
            type="default"
            onClick={() => {
              handleCloseModal();
            }}
          >
            {t('button.cancel')}
          </Button>
        </div>
      </Row>
    </Form>
  );
};

export default RegisterForm;
