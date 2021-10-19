import React, { useEffect, useState } from 'react';
import { Dropdown, DropDownProps } from 'antd';

type Props = {
  dropDownProps?: DropDownProps;
  menu: React.ReactElement;
};

const CustomDropdown: React.FC<Props> = (props) => {
  const { menu, dropDownProps, children } = props;

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (visible) {
      document.getElementById('root')!.onclick = (e) => {
        e.stopPropagation();
        setVisible(false);
      };
    }

    return () => {
      document.getElementById('root')!.onclick = null;
    };
  }, [visible]);

  const childrenWithClick = React.cloneElement(children as React.ReactElement, {
    onClick: () => setVisible(true),
  });

  return (
    <Dropdown
      trigger={['click']}
      visible={visible}
      {...dropDownProps}
      overlay={menu}
    >
      {childrenWithClick}
    </Dropdown>
  );
};

export default CustomDropdown;
