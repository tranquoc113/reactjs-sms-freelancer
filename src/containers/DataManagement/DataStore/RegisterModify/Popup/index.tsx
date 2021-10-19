import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/store';
import RegisterForm from './RegisterForm';
import DetailComponent from './DetailInfo';
import dataStoreActions from 'src/store/domain/DataStore/dataStore';
import { detailStoresRegistration } from 'src/useCase/DataStore/dataStore';

export const TYPE = {
  REGISTER: 'register',
  UPDATE: 'update',
  DETAIL: 'detail',
};

const PopupDataStore = () => {
  const dispatch = useDispatch();
  const { typeForm } = useAppSelector((state) => state.domain.datastore);

  const handleSetTypePopup = async (type: string, id: any) => {
    let storesRegistration = {};
    if (id) {
      // @ts-ignore
      const { payload, error } = await dispatch(
        detailStoresRegistration({ id }),
      );
      if (error) {
        return null;
      }
      storesRegistration = {
        ...payload,
        contacts: payload.contacts.map((item) => item.phone),
      };
    }
    dispatch(
      dataStoreActions.setDataStore({
        dataStore: storesRegistration,
        typeForm: type,
      }),
    );
  };

  return {
    typeForm,
    handleSetTypePopup,
    RegisterForm,
    DetailComponent,
  };
};

export default PopupDataStore;
