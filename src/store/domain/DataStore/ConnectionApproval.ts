import { createSlice } from '@reduxjs/toolkit';

import { fetchResources } from 'src/useCase/DataStore/ConnectionApproval';

type State = {
  status: App.Status;
  entities: Response.DataStoreConnectionApproval[];
  errors: App.Error | null;
  entity: any;
  typeForm: string;
};

const initialState: State = {
  status: 'fulfilled',
  entity: {},
  entities: [],
  errors: null,
  typeForm: '',
};

const { actions, reducer } = createSlice({
  // TODO: remember change the name of store
  name: 'app',
  initialState,
  reducers: {},
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
