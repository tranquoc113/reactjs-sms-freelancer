import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/store';
import agencyActions from 'src/store/domain/agency';
import RegisterAgencyComponent from './RegisterForm';
import DetailAgencyComponent from './DetailInfo';
import { detailAgency } from 'src/useCase/agency';

export const TYPE = {
  REGISTER: 'register',
  UPDATE: 'update',
  DETAIL: 'detail',
};

const PopupAgency = () => {
  const dispatch = useDispatch();
  const { popupType } = useAppSelector((state) => state.domain.agency);

  const handleSetTypePopup = async (type: string, id: any) => {
    let agency = {};
    if (id) {
      // @ts-ignore
      const { payload, error } = await dispatch(detailAgency({ id }));
      if (error) {
        return null;
      }
      agency = {
        ...payload,
        phone_contacts: payload.contacts.map((item) => item.phone),
      };
    }

    dispatch(
      agencyActions.setDataAgency({
        dataAgency: agency,
        popupType: type,
      }),
    );
  };

  return {
    popupType,
    handleSetTypePopup,
    RegisterAgencyComponent,
    DetailAgencyComponent,
  };
};

export default PopupAgency;
