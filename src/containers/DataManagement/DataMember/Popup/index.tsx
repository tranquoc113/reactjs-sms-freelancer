import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/store';
import RegisterComponent from './MemberForm';
import DetailComponent from './DetailInfo';
import dataMemberActions from 'src/store/domain/dataMember';

export const TYPE = {
  REGISTER: 'register',
  UPDATE: 'update',
  DETAIL: 'detail',
};

const PopupDataMember = () => {
  const dispatch = useDispatch();
  const { entities, typeForm } = useAppSelector(
    (state) => state.domain.dataMember,
  );

  const handleSetTypePopup = (type: string, id: any) => {
    dispatch(
      dataMemberActions.setDataMember({
        dataMember: entities.find((item) => item.id === id),
        typeForm: type,
      }),
    );
  };

  return {
    typeForm,
    handleSetTypePopup,
    RegisterComponent,
    DetailComponent,
  };
};

export default PopupDataMember;
