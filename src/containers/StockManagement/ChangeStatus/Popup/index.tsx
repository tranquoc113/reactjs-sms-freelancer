import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/store';
import changeStatusActions from 'src/store/domain/StockManagement/changeStatus';
import ChangeStatusComponent from './ChangeStatus';
import ExchangeComponent from './Exchange';

export const TYPE = {
  CHANGE_STATUS: 'change_status',
  REFUND: 'refund',
  EXCHANGE: 'exchange',
};

const ChangeStatusPopup = () => {
  const dispatch = useDispatch();
  const { entities, popupType } = useAppSelector(
    (state) => state.domain.changeStatus,
  );

  const handleSetTypePopup = (type: string, id: any) => {
    dispatch(
      changeStatusActions.setStockPopup({
        dataStore: entities.find((item) => item.id === id),
        typeForm: type,
      }),
    );
  };

  return {
    popupType,
    handleSetTypePopup,
    ChangeStatusComponent,
    ExchangeComponent,
  };
};

export default ChangeStatusPopup;
