import { ShopOutlined } from '@ant-design/icons';
import { TFunction } from 'i18next';

import { IRouter } from 'src/interfaces/route';
import StockManagement, { PATH } from 'src/pages/stockManagement';

const PARENT_PART = '/stock';

export default (t: TFunction): IRouter[] => [
  {
    path: PARENT_PART,
    icon: ShopOutlined,
    exact: true,
    title: t('title.stock_management'),
    redirect: true,
    redirectPath: PATH.STATUS,
  },
  {
    path: PATH.STATUS,
    parent: PARENT_PART,
    exact: true,
    title: t('title.stock_status'),
    component: StockManagement.Status,
    requiredAuth: true,
  },
  {
    path: PATH.DELIVERY_CHECK,
    parent: PARENT_PART,
    exact: true,
    title: t('title.delivery_check'),
    component: StockManagement.DeliveryCheck,
    requiredAuth: true,
  },
  {
    path: PATH.REGISTER_SHIPMENT,
    parent: PARENT_PART,
    exact: true,
    title: t('title.register_shipment'),
    component: StockManagement.RegisterShipment,
    requiredAuth: true,
  },
  {
    path: PATH.CHANGE_STATUS,
    parent: PARENT_PART,
    exact: true,
    title: t('title.stock_change_status'),
    component: StockManagement.ChangeStatus,
    requiredAuth: true,
  },
  {
    path: PATH.SHIPMENT_CHECK,
    parent: PARENT_PART,
    exact: true,
    title: t('title.shipment_check'),
    component: StockManagement.ShipmentCheck,
    requiredAuth: true,
  },
  {
    path: PATH.lOST_GOODS,
    parent: PARENT_PART,
    exact: true,
    title: t('title.lost'),
    component: StockManagement.LostGoods,
    requiredAuth: true,
  },
];
