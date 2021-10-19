import { createSlice } from '@reduxjs/toolkit';

import { searchAreas } from 'src/useCase/area';

type State = {
  status: App.Status;
  areas: Response.Area[];
  popupType: string;
  errors: App.Error | null;
};

const initialState: State = {
  status: 'fulfilled',
  areas: [],
  popupType: '',
  errors: null,
};

const { actions, reducer } = createSlice({
  name: 'areas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchAreas.fulfilled, (state, action) => {
        state.areas = action.payload;
        state.status = action.meta.requestStatus;
      })
      .addCase(searchAreas.pending, (state, action) => {
        state.status = action.meta.requestStatus;
      })
      .addCase(searchAreas.rejected, (state, action) => {
        state.errors = action.payload as App.Error;
        state.status = action.meta.requestStatus;
        state.areas = [];
      });
  },
});

export { reducer };
export default actions;
