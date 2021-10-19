import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Descriptions } from 'antd';
import useDetail from './useDetail';
import styled from 'styled-components';

type Props = {
  id?: number;
  onClose?: () => void;
};

const Detail: React.FC<Props> = ({ id }) => {
  const { t } = useTranslation();
  const { entity } = useDetail();
  return (
    <Wrapper>
      <div className="store-detail">
        <Row gutter={24}>
          <Descriptions bordered size="small" column={2} colon={true}>
            <Descriptions.Item
              label={t('data_management.data_store.column.code_number')}
            >
              {entity?.id}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.region')}
            >
              {entity?.area?.name}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.store_group')}
            >
              {entity?.store_group_id}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.salesperson_group')}
            >
              {entity?.salesperson_id}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.business_name')}
            >
              {entity?.business_number}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.ceo_name')}
            >
              {entity?.manager_name}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.business_number')}
            >
              {entity?.business_number}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.business_type')}
            >
              {entity?.business_type_level_1}
            </Descriptions.Item>
            <Descriptions.Item label={t('data_management.data_store.contact1')}>
              {entity?.contacts && entity?.contacts[0]}
            </Descriptions.Item>
            <Descriptions.Item
              label={t(
                'data_management.data_store.column.business_type_depth2',
              )}
            >
              {entity?.business_type_level_2}
            </Descriptions.Item>
            <Descriptions.Item label={t('data_management.data_store.contact2')}>
              {entity?.contacts && entity?.contacts[1]}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.email')}
            >
              {entity?.email}
            </Descriptions.Item>
            <Descriptions.Item label={t('data_management.data_store.contact3')}>
              {entity?.contacts && entity?.contacts[2]}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.tax_bill')}
            >
              {entity?.tax_bill}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.fax_number')}
            >
              {entity?.fax}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.store_address')}
            >
              {entity?.address}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.bank_name')}
            >
              {entity?.bank_name}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.depositor')}
            >
              {entity?.depositor_name}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.account_number')}
            >
              {entity?.account_number}
            </Descriptions.Item>
            <Descriptions.Item label={t('data_management.data_store.link_url')}>
              {entity?.url}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.form_date')}
            >
              {entity?.insured_date_from}
            </Descriptions.Item>
            <Descriptions.Item label={t('data_management.data_store.to_date')}>
              {entity?.insured_date_to}
            </Descriptions.Item>
          </Descriptions>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .store-detail {
    .ant-descriptions {
      width: 100%;
    }
  }
`;

export default Detail;
