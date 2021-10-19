import { combineReducers } from '@reduxjs/toolkit';

import { reducer as user } from './user';
import { reducer as stockStatus } from './stockStatus';
import { reducer as RegisterShipment } from './registerShipment';
import { reducer as datastore } from './DataStore/dataStore';
import { reducer as ConnectionApproval } from './DataStore/ConnectionApproval';
import { reducer as deliveryCheck } from './deliveryCheck';
import { reducer as agency } from './agency';
import { reducer as shipmentCheck } from './shipmentCheck';
import { reducer as lostGoods } from './lostGoods';
import { reducer as changeStatus } from './StockManagement/changeStatus';
import { reducer as dataMember } from './dataMember';
import { reducer as memberGroup } from './memberGroup';
import { reducer as unitPriceList } from './unitPriceList';
import { reducer as area } from './area';
import { reducer as costList } from './costList';

export default combineReducers({
  user,
  stockStatus,
  RegisterShipment,
  datastore,
  deliveryCheck,
  agency,
  shipmentCheck,
  lostGoods,
  changeStatus,
  ConnectionApproval,
  dataMember,
  memberGroup,
  unitPriceList,
  area,
  costList,
});
