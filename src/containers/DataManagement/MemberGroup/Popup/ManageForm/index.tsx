import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Col, Row, Form, Tree, Card, Space, Divider } from 'antd';
import { InputField } from 'src/components/Form';
import useForm from './useForm';
import useModal from 'src/components/common/CustomModal/useModel';
import { LIST_PERMISSION } from 'src/constants/options/memberGroup';
import { useAppSelector } from 'src/store';
import { TYPE } from 'src/containers/DataManagement/MemberGroup/Popup';

type Props = {
  onClose?: () => void;
};

const ManageMemberGroupComponent: React.FC<Props> = () => {
  const { t } = useTranslation();

  const { popupType } = useAppSelector((state) => state.domain.memberGroup);

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
              field={getFieldProps('memberGroup')}
              wrapperCol={{ span: 24 }}
              labelAlign={'left'}
              error={errors.memberGroup}
              touched={touched.memberGroup}
            />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Card>
              <Tree
                checkable
                defaultExpandedKeys={['0-0', '0-1', '0-1-0-1']}
                defaultSelectedKeys={['0-0', '0-0-1', '0-1-0-1']}
                defaultCheckedKeys={['0-0', '0-0-1', '0-1-0-1']}
                treeData={LIST_PERMISSION(t)}
              />
            </Card>
          </Col>
        </Row>

        <Divider />
        <Row justify="end">
          <Space>
            <Button type="primary" onClick={() => submitForm()}>
              {popupType == TYPE.EDIT ? t('button.edit') : t('button.create')}
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

export default ManageMemberGroupComponent;
