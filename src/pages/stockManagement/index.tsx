import Status, { PATH as STATUS } from './StockStatus';
import RegisterShipment, {
  PATH as REGISTER_SHIPMENT,
} from './RegisterShipment';
import DeliveryCheck, { PATH as DELIVERY_CHECK } from './DeliveryCheck';
import ShipmentCheck, { PATH as SHIPMENT_CHECK } from './ShipmentCheck';
import LostGoods, { PATH as lOST_GOODS } from './LostGoods';
import ChangeStatus, { PATH as CHANGE_STATUS } from './ChangeStatus';

export default {
  Status,
  RegisterShipment,
  DeliveryCheck,
  ShipmentCheck,
  LostGoods,
  ChangeStatus,
};

export const PATH = {
  STATUS,
  REGISTER_SHIPMENT,
  DELIVERY_CHECK,
  SHIPMENT_CHECK,
  lOST_GOODS,
  CHANGE_STATUS,
};
