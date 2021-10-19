import React, { useEffect, useState } from 'react';
import { Modal, ModalProps } from 'antd';
import { useAppDispatch, useAppSelector } from 'src/store';
import appActions from 'src/store/ui/app';

type Props = {
  modalProps?: ModalProps;
  content: ({ onClose }: { onClose: () => void }) => React.ReactElement;
  onCancel?: () => void;
  children?: React.ReactElement;
};

const GlobalModal: React.FC<Props> = (props) => {
  const { children, modalProps, content, onCancel } = props;
  const [visible, setVisible] = useState(false);
  const visibleModal = useAppSelector((state) => state.ui.app.visibleModal);
  const dispatch = useAppDispatch();

  const childrenWithClick = React.cloneElement(children as React.ReactElement, {
    onClick: () => {
      if (typeof children?.props?.onClick !== 'undefined') {
        children?.props?.onClick.call(window);
      }
      setVisibleModal(true);
    },
  });

  const setVisibleModal = (value) => {
    setVisible(value);
    dispatch(appActions.updateVisibleModal(value));
  };

  useEffect(() => {
    if (!visibleModal) {
      setVisibleModal(visibleModal);
    }
  }, [visibleModal]);

  return (
    <React.Fragment>
      {childrenWithClick}
      <Modal
        {...modalProps}
        destroyOnClose
        visible={visible}
        onCancel={() => {
          onCancel && onCancel();
          setVisible(false);
        }}
      >
        {content({ onClose: () => setVisible(false) })}
      </Modal>
    </React.Fragment>
  );
};

export default GlobalModal;
