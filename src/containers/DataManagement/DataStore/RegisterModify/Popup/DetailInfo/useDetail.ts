import { useDispatch } from 'react-redux';

import useModel from 'src/components/common/CustomModal/useModel';
import { useAppSelector } from 'src/store';
import dataStoreActions from 'src/store/domain/DataStore/dataStore';

const useDetail = () => {
  const { showModal } = useModel();
  const dispatch = useDispatch();
  const { entity } = useAppSelector((state) => state.domain.datastore);

  const handleAddDataStore = (typeForm) => {
    let dataStore = {};
    dispatch(dataStoreActions.setDataStore({ dataStore, typeForm }));
    showModal();
  };

  return { entity, handleAddDataStore };
};

export default useDetail;
