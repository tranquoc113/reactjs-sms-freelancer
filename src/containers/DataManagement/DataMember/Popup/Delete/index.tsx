import React from 'react';
import { useTranslation } from 'react-i18next';
import { Popconfirm, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';

interface Props {
  id: number;
}

const DeleteMemeber: React.FC<Props> = (props: Props) => {
  const { id } = props;
  const { t } = useTranslation();

  const handleOk = () => {
    console.log(id);
  };

  return (
    <Popconfirm
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      title={t('data_management.authority_management.member.delete.content')}
      onConfirm={handleOk}
    >
      <Button danger type="text">
        <DeleteOutlined />
      </Button>
    </Popconfirm>
  );
};

export default DeleteMemeber;
