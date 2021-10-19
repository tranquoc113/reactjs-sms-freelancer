import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchResources } from 'src/useCase/memberGroup';

type State = {
  status: App.Status;
  entities: Response.MemberGroup[];
  errors: App.Error | null;
  popupType: string;
  entity: any;
  typeForm: string;
};

const initialState: State = {
  status: 'fulfilled',
  entity: {},
  entities: [],
  errors: null,
  typeForm: '',
  popupType: '',
};

const { actions, reducer } = createSlice({
  // TODO: remember change the name of store
  name: 'app',
  initialState,
  reducers: {
    setPopup: (state, action: PayloadAction<any>) => {
      state.popupType = action.payload;
    },
    setMemberGroup: (state, action: PayloadAction<any>) => {
      state.entity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResources.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.status = action.meta.requestStatus;
      })
      .addCase(fetchResources.pending, (state, action) => {
        state.status = action.meta.requestStatus;
      })
      .addCase(fetchResources.rejected, (state, action) => {
        state.errors = action.payload as App.Error;
        state.status = action.meta.requestStatus;
      });
  },
});

export { reducer };
export default actions;
