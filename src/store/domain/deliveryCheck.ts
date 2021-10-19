import { createSlice } from '@reduxjs/toolkit';

import { fetchResources } from 'src/useCase/deliveryCheck';

type State = {
  status: App.Status;
  entities: Response.DeliveryCheck[];
  errors: App.Error | null;
};

const initialState: State = {
  status: 'fulfilled',
  entities: [],
  errors: null,
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
