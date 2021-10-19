import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchResources } from 'src/useCase/agency';

type State = {
  status: App.Status;
  entity: any;
  entities: Response.Agency[];
  popupType: string;
  errors: App.Error | null;
};

const initialState: State = {
  status: 'fulfilled',
  entity: {},
  entities: [],
  popupType: '',
  errors: null,
};

const { actions, reducer } = createSlice({
  name: 'agency',
  initialState,
  reducers: {
    setDataAgency: (state, action: PayloadAction<any>) => {
      state.entity = action.payload?.dataAgency;
      state.popupType = action.payload.popupType;
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
