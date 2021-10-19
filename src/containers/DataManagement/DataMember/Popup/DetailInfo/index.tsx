import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Descriptions } from 'antd';
import useDetail from './useDetail';
import styled from 'styled-components';

type Props = {
  id?: number;
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
              label={t('data_management.data_store.column.no')}
            >
              {entity?.id}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.region')}
            >
              {entity?.region}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.code_number')}
            >
              {entity?.codeNumber}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.store_group')}
            >
              {entity?.branch_nm}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.salesperson_group')}
            >
              {entity?.salespersonGroup}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.business_name')}
            >
              {entity?.businessName}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.ceo_name')}
            >
              {entity?.ceoName}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.business_number')}
            >
              {entity?.businessNumber}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.business_type')}
            >
              {entity?.businessType}
            </Descriptions.Item>
            <Descriptions.Item label={t('data_management.data_store.contact1')}>
              {entity?.contact1}
            </Descriptions.Item>
            <Descriptions.Item
              label={t(
                'data_management.data_store.column.business_type_depth2',
              )}
            >
              {entity?.businessTypeDepth2}
            </Descriptions.Item>
            <Descriptions.Item label={t('data_management.data_store.contact2')}>
              {entity?.contact2}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.email')}
            >
              {entity?.email}
            </Descriptions.Item>
            <Descriptions.Item label={t('data_management.data_store.contact3')}>
              {entity?.contact3}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.tax_bill')}
            >
              {entity?.taxBill}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.fax_number')}
            >
              {entity?.faxNumber}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.store_address')}
            >
              {entity?.storeAddress}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.bank_name')}
            >
              {entity?.bankName}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.depositor')}
            >
              {entity?.depositor}
            </Descriptions.Item>
            <Descriptions.Item
              label={t('data_management.data_store.column.account_number')}
            >
              {entity?.accountNumber}
            </Descriptions.Item>
            <Descriptions.Item label={t('data_management.data_store.link_url')}>
              {entity?.linkUrl}
            </Descriptions.Item>
            <Descriptions.Item
              label={t(
                'data_management.data_store.column.guarantee_insurance_period',
              )}
            >
              {entity?.guaranteeInsurancePeriod}
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
