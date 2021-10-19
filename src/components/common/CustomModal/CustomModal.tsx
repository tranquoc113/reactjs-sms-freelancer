import React from 'react';
import { Modal, ModalProps } from 'antd';
import useModel from './useModel';
import styled from 'styled-components';

type Props = {
  title: string;
  size: string;
  customModal?: ModalProps;
  content?: React.ReactElement;
};

const ModalCustom: React.FC<Props> = (props) => {
  const { title, content, customModal, size } = props;
  const { visibleModal, closeModal } = useModel();

  return (
    <Style>
      <Modal
        title={title}
        visible={visibleModal}
        onOk={closeModal}
        onCancel={closeModal}
        {...customModal}
        className={size}
        footer={null}
      >
        {content}
      </Modal>
    </Style>
  );
};

const Style = styled.div`
  .medium {
    width: 680px;
  }
`;

export default ModalCustom;
