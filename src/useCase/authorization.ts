import history from 'src/libs/history';
import LocalStorage from 'src/utils/LocalStorage';
import uiActions from 'src/store/ui/notification';
import appActions from 'src/store/ui/app';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const authorization = createAsyncThunk(
  'authorization',
  (_, { dispatch }) => {
    if (history.location.pathname !== '/login') {
      LocalStorage.removeInfo();
      history.push('/login');

      dispatch(appActions.updateAuthInfo(null));

      dispatch(
        uiActions.onNotification({
          type: 'error',
          message: 'Unauthorized',
        }),
      );
    }

    return false;
  },
);

// export const authorization = (): Action => {
//   return async (dispatch) => {
//     if (history.location.pathname !== '/login') {
//       LocalStorage.removeInfo();
//       history.push('/login');
//
//       dispatch(
//         uiActions.onNotification({
//           type: 'error',
//           message: 'Unauthorized',
//         }),
//       );
//     }
//
//     return Promise.resolve(false);
//   };
// };
