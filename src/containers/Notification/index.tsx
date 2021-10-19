import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';

import notificationActions from 'src/store/ui/notification';
import Notification from 'src/components/application/Notification';
import { useAppSelector } from 'src/store';

const ContainerComponent = () => {
  const dispatch = useDispatch();
  const handleOffNotification = useCallback(
    () => dispatch(notificationActions.offNotification()),
    [dispatch],
  );

  const notification = useAppSelector(
    (state) => state.ui.notification,
    (left, right) => _.isEqual(left, right),
  );

  const containerProps = {
    handleOffNotification,
    ...notification,
  };

  return <Notification {...containerProps} />;
};

export default ContainerComponent;
