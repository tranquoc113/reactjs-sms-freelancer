import React from 'react';
import GlobalModal from 'src/components/common/GlobalModal';
import usePopup from 'src/containers/PolicySttlement/CostListManagement/Popup';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
type Props = {
  onClose?: () => void;
};

const ButtonAddPlan: React.FC<Props> = () => {
  const { AddPlan } = usePopup();
  const { t } = useTranslation();

  return (
    <GlobalModal
      modalProps={{
        title: t('policy_settlement.add_plan'),
        width: 800,
        footer: null,
      }}
      content={() => <AddPlan />}
    >
      <Button type="primary">{t('policy_settlement.add_plan')}</Button>
    </GlobalModal>
  );
};

export default ButtonAddPlan;
