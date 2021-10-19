import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/store';
import MemoComponent from './MemoForm';
import dataStoreActions from 'src/store/domain/DataStore/dataStore';

export const TYPE = {
  MEMO: 'memo',
};

const PopupDataStore = () => {
  const dispatch = useDispatch();
  const { entities, typeForm } = useAppSelector(
    (state) => state.domain.datastore,
  );

  const handleSetTypePopup = (type: string, id: any) => {
    dispatch(
      dataStoreActions.setDataStore({
        dataStore: entities.find((item) => item.id === id),
        typeForm: type,
      }),
    );
  };

  return {
    typeForm,
    handleSetTypePopup,
    MemoComponent,
  };
};

export default PopupDataStore;
