import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Col, Row, Form } from 'antd';
import {
  CheckboxGroupField,
  SelectField,
  InputField,
} from 'src/components/Form';
import { MEMBER_LIST } from 'src/constants/options/dataMember';
import useForm from './useForm';
import useModal from 'src/components/common/CustomModal/useModel';
type Props = {
  onClose?: () => void;
};

const AddMemberToGroup: React.FC<Props> = (props) => {
  const { t } = useTranslation();

  const { closeModal } = useModal();
  const { formik, onChangeListMember } = useForm();
  const { getFieldProps, setFieldValue, submitForm } = formik;
  return (
    <div>
      <Form>
        <Row gutter={24}>
          <Col span={24}>
            <InputField
              label={t('data_management.members.member_form.store_agency')}
              field={getFieldProps('storeAgency')}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 20 }}
              labelAlign={'left'}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <CheckboxGroupField
              label={t('data_management.members.member_form.list_member')}
              labelAlign="left"
              field={getFieldProps('listMember')}
              optionsSelect={MEMBER_LIST(t)}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 4 }}
              onChange={onChangeListMember}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <SelectField
              label={t('data_management.members.member_form.member_group')}
              field={getFieldProps('memberGroup')}
              optionsSelect={MEMBER_LIST(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 20 }}
              labelAlign={'left'}
            />
          </Col>
        </Row>

        <Row gutter={24} justify={'end'}>
          <div className="button-action">
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={() => submitForm()}
            >
              {t('button.create')}
            </Button>
            <Button
              type="default"
              style={{ width: '100%' }}
              onClick={() => closeModal()}
            >
              {t('button.cancel')}
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default AddMemberToGroup;
