import { useDispatch } from 'react-redux';

import useModel from 'src/components/common/CustomModal/useModel';
import { useAppSelector } from 'src/store';
import dataMemberActions from 'src/store/domain/dataMember';

const useDetail = () => {
  const { showModal } = useModel();
  const dispatch = useDispatch();
  const { entity } = useAppSelector((state) => state.domain.dataMember);

  const handleAddDataStore = (typeForm) => {
    let dataStore = {};
    dispatch(dataMemberActions.setDataMember({ dataStore, typeForm }));
    showModal();
  };

  return { entity, handleAddDataStore };
};

export default useDetail;
