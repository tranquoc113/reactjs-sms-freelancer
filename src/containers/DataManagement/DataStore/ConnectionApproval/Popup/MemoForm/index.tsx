import React from 'react';
import { Button, Col, Divider, Form, Row } from 'antd';
import { useTranslation } from 'react-i18next';

import { TextAreaField } from 'src/components/Form';
import useForm from './useForm';

type Props = {
  id?: number;
  record?: Response.DataStoreConnectionApproval;
  onClose?: () => void;
};

const MemoForm: React.FC<Props> = ({ record }) => {
  const { t } = useTranslation();
  const { formik, handleClear } = useForm(record);
  const { getFieldProps, errors, touched, submitForm } = formik;

  return (
    <Form>
      <Row gutter={24} justify={'center'}>
        <Col xs={24} sm={24} md={12} lg={18}>
          <TextAreaField
            label={t('data_management.data_store.memo')}
            field={getFieldProps('memo')}
            labelAlign="left"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            style={{ height: '40px' }}
            error={errors.id}
            touched={touched.id}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={18}>
          <Divider />
          <Row gutter={24} justify={'end'}>
            <Col xs={24} sm={24} md={12} lg={6}>
              <Button
                type="primary"
                onClick={() => submitForm()}
                style={{ float: 'right' }}
              >
                {t('data_management.data_store.sub_connection_admission')}
              </Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6}>
              <Button onClick={() => handleClear()} style={{ float: 'right' }}>
                {t('data_management.data_store.btn_rejection')}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default MemoForm;
