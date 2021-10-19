import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Col, Row, Form, Space, Divider } from 'antd';
import { InputField } from 'src/components/Form';
import useForm from './useForm';
import useModal from 'src/components/common/CustomModal/useModel';

type Props = {
  onClose?: () => void;
};

const AddMemberGroup: React.FC<Props> = () => {
  const { t } = useTranslation();

  const { closeModal } = useModal();
  const { formik } = useForm();
  const { getFieldProps, submitForm, errors, touched } = formik;
  return (
    <div>
      <Form>
        <Row gutter={24}>
          <Col span={24}>
            <InputField
              label={t('data_management.data_member.member_group')}
              field={getFieldProps('member_group')}
              wrapperCol={{ span: 24 }}
              labelAlign={'left'}
              error={errors.member_group}
              touched={touched.member_group}
            />
          </Col>
        </Row>

        <Divider />
        <Row justify="end">
          <Space>
            <Button type="primary" onClick={() => submitForm()}>
              {t('button.create')}
            </Button>
            <Button
              type="default"
              style={{ width: '100%' }}
              onClick={() => closeModal()}
            >
              {t('button.cancel')}
            </Button>
          </Space>
        </Row>
      </Form>
    </div>
  );
};

export default AddMemberGroup;
