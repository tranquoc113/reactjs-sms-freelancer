import { MoneyCollectOutlined } from '@ant-design/icons';
import { TFunction } from 'i18next';

import { IRouter } from 'src/interfaces/route';
import PolicySttlement, { PATH } from 'src/pages/policySettlement';

const PARENT_PART = '/policy-settlement';

export default (t: TFunction): IRouter[] => [
  {
    path: PARENT_PART,
    icon: MoneyCollectOutlined,
    exact: true,
    title: t('policy_settlement'),
    redirect: true,
    redirectPath: PATH.COST_LIST_MANAGEMENT,
  },
  {
    path: PATH.COST_LIST_MANAGEMENT,
    parent: PARENT_PART,
    exact: true,
    title: t('policy_settlement.cost_list'),
    component: PolicySttlement.CostListManagement,
    requiredAuth: true,
  },
  {
    path: PATH.UNIT_PRICE_LIST_MANAGEMENT,
    parent: PARENT_PART,
    exact: true,
    title: t('policy_settlement.unit_price_list_management'),
    component: PolicySttlement.UnitPriceListManagement,
    requiredAuth: true,
  },
];
