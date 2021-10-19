import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Col, Row, Form } from 'antd';
import { InputField, SelectField } from 'src/components/Form';
import { LIST_REGION } from 'src/constants/options/dataMember';
import useForm from './useForm';
import useModal from 'src/components/common/CustomModal/useModel';
import { Descriptions } from 'antd';
import { useAppSelector } from 'src/store';
import styled from 'styled-components';

type Props = {
  id?: number;
  onClose?: () => void;
};

const EditMember: React.FC<Props> = ({ id }) => {
  const { t } = useTranslation();
  const { entity } = useAppSelector((state) => state.domain.dataMember);
  const { closeModal } = useModal();
  const { formik } = useForm();
  const { getFieldProps, setFieldValue, submitForm, errors, touched } = formik;
  return (
    <Wrapper>
      <Form>
        <Row gutter={24}>
          <Col span={24}>
            <Descriptions bordered>
              <Descriptions.Item
                label={t('data_management.members.column.member_id')}
                span={3}
              >
                {entity.id}
              </Descriptions.Item>
              <Descriptions.Item
                label={t('data_management.members.member_form.name')}
                span={3}
              >
                {entity.memberGroup}
              </Descriptions.Item>
              <Descriptions.Item
                label={t('data_management.members.member_form.business_name')}
                span={3}
              >
                {entity.registrationBusinessNumber}
              </Descriptions.Item>
              <Descriptions.Item
                label={t('data_management.members.member_form.phone_number')}
                span={3}
              >
                {entity.phoneNumber}
              </Descriptions.Item>
              <Descriptions.Item
                label={t('data_management.members.member_form.email')}
                span={3}
              >
                {entity.email}
              </Descriptions.Item>
              <Descriptions.Item
                label={t('data_management.members.member_form.memo')}
                span={3}
              >
                <InputField
                  field={getFieldProps('memo')}
                  inputProps={{
                    allowClear: true,
                  }}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  labelAlign="left"
                />
              </Descriptions.Item>
              <Descriptions.Item
                label={t('data_management.members.member_group')}
                span={3}
              >
                {' '}
                <SelectField
                  field={getFieldProps('memberGroup')}
                  optionsSelect={LIST_REGION(t)}
                  setFieldValue={setFieldValue}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  labelAlign={'left'}
                  error={errors.memberGroup}
                  touched={touched.memberGroup}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row gutter={24} justify={'end'} style={{ marginTop: '20px' }}>
          <div className="button-action">
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={() => submitForm()}
            >
              {t('button.save')}
            </Button>
            <Button
              type="default"
              style={{ width: '100%' }}
              onClick={() => closeModal()}
            >
              {t('button.back')}
            </Button>
          </div>
        </Row>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-row .ant-form-item {
    margin-bottom: 0px;
  }
`;

export default EditMember;
