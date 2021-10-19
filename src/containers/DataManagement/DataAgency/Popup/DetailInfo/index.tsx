import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Descriptions } from 'antd';
import styled from 'styled-components';
import useDetail from './useDetail';
type Props = {
  onClose?: () => void;
};

const DetailAgency: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const { entity, getBusinessType, getBusinessTypeDepth } = useDetail({ t });

  return (
    <Div>
      <div className="agency-detail">
        <Row gutter={24}>
          <Descriptions bordered size="small" column={2} colon={true}>
            <Descriptions.Item
              label={t('data_management.data_agency.code_num')}
            >
              {entity?.id}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_agency.branch_nm')}
            >
              {entity?.name}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_agency.company_nm')}
            >
              {entity?.company_name}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_agency.manager_name')}
            >
              {entity?.manager_name}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_agency.cell_phone_nm')}
            >
              {entity?.manager_phone}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_agency.business_num')}
            >
              {entity?.business_number}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_agency.business_type')}
            >
              {getBusinessType(entity?.business_type_level_1)?.label}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_agency.business_type_depth2')}
            >
              {getBusinessTypeDepth(entity?.business_type_level_2)?.label}
            </Descriptions.Item>
            <Descriptions.Item label={t('data_management.data_agency.phone_1')}>
              {entity?.phone_contacts?.length && entity?.phone_contacts[0]}
            </Descriptions.Item>
            <Descriptions.Item label={t('data_management.data_agency.phone_2')}>
              {entity?.phone_contacts?.length && entity?.phone_contacts[1]}
            </Descriptions.Item>
            <Descriptions.Item label={t('data_management.data_agency.phone_3')}>
              {entity?.phone_contacts?.length && entity?.phone_contacts[2]}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_agency.tax_bill')}
            >
              {entity?.tax_bill}
            </Descriptions.Item>
            <Descriptions.Item label={t('data_management.data_agency.email')}>
              {entity?.email}
            </Descriptions.Item>
            <Descriptions.Item label={t('data_management.data_agency.fax_num')}>
              {entity?.fax}
            </Descriptions.Item>
            <Descriptions.Item label={t('data_management.data_agency.address')}>
              {entity?.area?.name}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_agency.bank_name')}
            >
              {entity?.bank_name}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_agency.depositor')}
            >
              {entity?.depositor_name}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_agency.account_num')}
            >
              {entity?.account_number}
            </Descriptions.Item>
          </Descriptions>
        </Row>
      </div>
    </Div>
  );
};

const Div = styled.div`
  .agency-detail {
    > div {
      padding: 10px 0;
      border-bottom: 1px solid #f2f2f2;
    }
    label {
      font-weight: bold;
    }
    .ant-descriptions {
      width: 100%;
    }
  }
`;

export default DetailAgency;
