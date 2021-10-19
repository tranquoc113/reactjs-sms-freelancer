import React from 'react';
import { Alert, Button, Col, Form, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

import useForm from './useForm';
import { InputField } from 'src/components/Form';
import styled from 'styled-components';
import bg from 'src/assets/vector-AUG-2020-01.jpg';

const Container: React.FC = () => {
  const { t } = useTranslation();
  const { formik } = useForm();
  const {
    submitForm,
    getFieldProps,
    errors,
    touched,
    status,
    isSubmitting,
    setStatus,
  } = formik;

  return (
    <Wrapper>
      <Row justify="center">
        <Col xs={20} md={12} lg={8} xl={8}>
          <Form
            className="login_form"
            layout="vertical"
            onFinish={() => submitForm()}
          >
            <Typography.Title
              level={2}
              style={{ marginBottom: 30, textAlign: 'center' }}
            >
              {t('LOGIN')}
            </Typography.Title>
            <InputField
              label={t('email')}
              field={getFieldProps('email')}
              error={errors.email}
              touched={touched.email}
              inputProps={{
                prefix: <MailOutlined />,
                allowClear: true,
                size: 'large',
              }}
              callbackOnChange={() => setStatus(undefined)}
            />
            <InputField
              label={t('password')}
              field={getFieldProps('password')}
              error={errors.password}
              touched={touched.password}
              inputProps={{
                prefix: <LockOutlined />,
                allowClear: true,
                type: 'password',
                size: 'large',
              }}
              callbackOnChange={() => setStatus(undefined)}
            />
            {status && (
              <Alert
                showIcon
                type="error"
                message={t('message.incorrect_email_or_password')}
                style={{ marginBottom: 20 }}
              />
            )}
            <Button
              block
              size="large"
              type="primary"
              htmlType="submit"
              loading={isSubmitting}
            >
              {t('login')}
            </Button>
          </Form>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .ant-row {
    width: 100%;
    .ant-btn {
      margin-top: 12px;
    }
  }
  background: url(${bg});
  background-size: cover;
`;

export default Container;
