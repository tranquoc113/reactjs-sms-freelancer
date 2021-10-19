import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchResources } from 'src/useCase/DataStore/dataStore';

type State = {
  status: App.Status;
  entities: Response.DataStore[];
  errors: App.Error | null;
  entity: any;
  storeGroup: any;
  typeForm: string;
};

const initialState: State = {
  status: 'fulfilled',
  entity: {},
  entities: [],
  storeGroup: [],
  errors: null,
  typeForm: '',
};

const { actions, reducer } = createSlice({
  // TODO: remember change the name of store
  name: 'app',
  initialState,
  reducers: {
    setDataStore: (state, action: PayloadAction<any>) => {
      state.entity = action.payload?.dataStore;
      state.typeForm = action.payload.typeForm;
    },
    setDataStoreGroup: (state, action: PayloadAction<any>) => {
      state.storeGroup = action.payload?.storeGroup;
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
