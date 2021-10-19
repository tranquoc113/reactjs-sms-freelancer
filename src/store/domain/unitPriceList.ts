import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchResources } from 'src/useCase/unitPriceList';

type State = {
  status: App.Status;
  entities: Response.UnitPriceList[];
  errors: App.Error | null;
  entity: any;
  popupType: string;
  showList: boolean;
};

const initialState: State = {
  status: 'fulfilled',
  entity: {},
  entities: [],
  errors: null,
  popupType: '',
  showList: false,
};

const { actions, reducer } = createSlice({
  // TODO: remember change the name of member
  name: 'unit_price',
  initialState,

  reducers: {
    setPopup: (state, action: PayloadAction<any>) => {
      state.popupType = action.payload;
    },
    setUnitPriceList: (state, action: PayloadAction<boolean>) => {
      state.showList = action.payload;
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
