import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/store';
import memberActions from 'src/store/domain/memberGroup';
import ManageMemberGroupComponent from './ManageForm';
import AddMemberGroupComponent from './AddForm';

export const TYPE = {
  EDIT: 'edit',
  ADD: 'add',
  MANAGE: 'manage',
};

const PopupMember = () => {
  const dispatch = useDispatch();
  const { entities, popupType } = useAppSelector(
    (state) => state.domain.memberGroup,
  );

  const handleSetTypePopup = (type: string, id: any) => {
    if (type != TYPE.EDIT) {
      dispatch(memberActions.setMemberGroup({}));
    }
    if (id) {
      const member = entities.find((item) => item.id === id);
      if (member) {
        dispatch(memberActions.setMemberGroup(member));
      }
    }
    dispatch(memberActions.setPopup(type));
  };

  return {
    popupType,
    handleSetTypePopup,
    ManageMemberGroupComponent,
    AddMemberGroupComponent,
  };
};

export default PopupMember;
