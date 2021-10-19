import React from 'react';
import { Button, Col, Divider, Form, Row, Space } from 'antd';
import { useTranslation } from 'react-i18next';

import { InputField, SelectField, TextAreaField } from 'src/components/Form';
import useForm from './useForm';
import { LIST_REGION } from 'src/constants/options/dataMember';

type Props = {
  id?: number;
  onClose?: () => void;
};

const MemberForm: React.FC<Props> = ({ id }) => {
  const { t } = useTranslation();
  const { formik } = useForm();
  const { getFieldProps, setFieldValue, errors, touched, submitForm } = formik;

  return (
    <Form>
      <Row gutter={24}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.members.member_form.member_id')}
            field={getFieldProps('memberId')}
            name="id"
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.members.member_form.member_id'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.memberId}
            touched={touched.memberId}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.members.member_form.name')}
            field={getFieldProps('name')}
            name="id"
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.members.member_form.name'),
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
            label={t('data_management.members.member_form.business_name')}
            field={getFieldProps('businessName')}
            name="id"
            inputProps={{
              allowClear: true,
              placeholder: t(
                'data_management.members.member_form.business_name',
              ),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.businessName}
            touched={touched.businessName}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.members.member_form.phone_number')}
            field={getFieldProps('phoneNumber')}
            name="id"
            inputProps={{
              allowClear: true,
              placeholder: t(
                'data_management.members.member_form.phone_number',
              ),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.phoneNumber}
            touched={touched.phoneNumber}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <InputField
            label={t('data_management.members.member_form.email')}
            field={getFieldProps('email')}
            name="id"
            inputProps={{
              allowClear: true,
              placeholder: t('data_management.members.member_form.email'),
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.memo}
            touched={touched.memo}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <SelectField
            label={t('data_management.members.member_form.member_group')}
            field={getFieldProps('memberGroup')}
            optionsSelect={LIST_REGION(t)}
            setFieldValue={setFieldValue}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            error={errors.memberGroup}
            touched={touched.memberGroup}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <TextAreaField
            label={t('data_management.members.member_form.memo')}
            field={getFieldProps('memo')}
            labelAlign="left"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ height: '40px' }}
          />
        </Col>
      </Row>
      <Divider />
      <Space>
        <Button type="primary" onClick={() => submitForm()}>
          OK
        </Button>
        <Button onClick={() => formik.resetForm()}>Clear</Button>
      </Space>
    </Form>
  );
};

export default MemberForm;
