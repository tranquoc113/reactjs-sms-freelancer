import { useAppDispatch, useAppSelector } from 'src/store';
import appActions from 'src/store/ui/app';

const useModal = () => {
  const dispatch = useAppDispatch();
  const visibleModal = useAppSelector((state) => state.ui.app.visibleModal);

  const showModal = () => {
    dispatch(appActions.updateVisibleModal(true));
  };

  const closeModal = () => {
    dispatch(appActions.updateVisibleModal(false));
  };

  return { visibleModal, showModal, closeModal };
};

export default useModal;
