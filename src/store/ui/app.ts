import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import LocalStorage from 'src/utils/LocalStorage';

export type Theme = 'dark' | 'light';
export type AuthInfo = { name: string; email: string };

type State = {
  loading: boolean;
  theme: Theme;
  collapsed: boolean;
  authInfo: AuthInfo | null;
  selectedKey?: string;
  pagination: App.Pagination | null;
  visibleModal: boolean;
};

const initialState: State = {
  loading: false,
  theme: 'light',
  collapsed: false,
  authInfo: null,
  pagination: null,
  visibleModal: false,
};

const { actions, reducer } = createSlice({
  // TODO: remember change the name of store
  name: 'app',
  initialState,
  reducers: {
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateCollapsed: (state, action: PayloadAction<boolean>) => {
      state.collapsed = action.payload;
    },
    updateTheme: (state, action: PayloadAction<Theme>) => {
      LocalStorage.changeTheme(action.payload);
      state.theme = action.payload;
    },
    updateAuthInfo: (state, action: PayloadAction<AuthInfo | null>) => {
      LocalStorage.saveAuthInfo(action.payload);
      state.authInfo = action.payload;
    },
    updateSelectedKey: (state, action: PayloadAction<string | undefined>) => {
      state.selectedKey = action.payload;
    },
    updatePagination: (state, action: PayloadAction<App.Pagination>) => {
      state.pagination = action.payload;
    },
    updateVisibleModal: (state, action: PayloadAction<boolean>) => {
      state.visibleModal = action.payload;
    },
  },
});

export { reducer };
export default actions;
