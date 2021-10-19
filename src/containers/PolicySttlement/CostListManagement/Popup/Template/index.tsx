import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Row, Space, Divider } from 'antd';
import TemplateTable from './Table';
import appActions from 'src/store/ui/app';
import { useAppDispatch } from 'src/store';

type Props = {
  onClose?: () => void;
};

const Template: React.FC<Props> = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(appActions.updateVisibleModal(false));
  };

  return (
    <div>
      <TemplateTable />
      <Divider />
      <Row justify="end">
        <Space>
          <Button
            type="default"
            style={{ width: '100%' }}
            onClick={handleCloseModal}
          >
            {t('button.cancel')}
          </Button>
        </Space>
      </Row>
    </div>
  );
};

export default Template;
