import {
  combineReducers,
  configureStore,
  ThunkAction,
  AnyAction,
  isRejectedWithValue,
  isRejected,
  isFulfilled,
} from '@reduxjs/toolkit';
import {
  useDispatch,
  TypedUseSelectorHook,
  useSelector,
  useStore,
} from 'react-redux';
import { Middleware } from 'redux';

import domain from './domain';
import ui from './ui';
import LocalStorage from 'src/utils/LocalStorage';

const rootReducer = combineReducers({
  domain,
  ui,
});

const endLoadingMiddleWare: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  if (
    isRejectedWithValue(action) ||
    isRejected(action) ||
    isFulfilled(action)
  ) {
    next({ type: 'app/updateLoading', payload: false });
  }

  return result;
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(endLoadingMiddleWare);
  },
  devTools: process.env.NODE_ENV !== 'production',
});

const initDispatch = () => {
  store.dispatch({
    type: 'app/updateTheme',
    payload: LocalStorage.theme,
  });

  store.dispatch({
    type: 'app/updateAuthInfo',
    payload: LocalStorage.authInfo,
  });
};
initDispatch();

export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
export type Store = typeof store;
export type Action<R = any> = ThunkAction<
  Promise<R>,
  RootState,
  null,
  AnyAction
>;

export const useAppDispatch = () => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = () => useStore<RootState, AnyAction>();
