import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchResources } from 'src/useCase/StockManagement/changeStatus';

type State = {
  status: App.Status;
  entities: Response.ChangeStatus[];
  errors: App.Error | null;
  entity: any;
  popupType: string;
};

const initialState: State = {
  status: 'fulfilled',
  entities: [],
  entity: {},
  popupType: '',
  errors: null,
};

const { actions, reducer } = createSlice({
  name: 'stock_change_status',
  initialState,
  reducers: {
    setStockPopup: (state, action: PayloadAction<any>) => {
      state.entity = action.payload?.stock;
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
