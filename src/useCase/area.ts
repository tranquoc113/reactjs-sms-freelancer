import { createAsyncThunk } from '@reduxjs/toolkit';
import AreaRequest, { SearchArea } from 'src/api/requests/area';

export const searchAreas = createAsyncThunk<any, SearchArea>(
  'areas/search',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await AreaRequest.searchArea(payload);

      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);
