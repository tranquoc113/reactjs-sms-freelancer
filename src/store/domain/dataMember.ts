import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchResources } from 'src/useCase/dataMember';

type State = {
  status: App.Status;
  entities: Response.DataMember[];
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
  // TODO: remember change the name of member
  name: 'app',
  initialState,
  reducers: {
    setDataMember: (state, action: PayloadAction<any>) => {
      state.entity = action.payload?.dataMember;
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
