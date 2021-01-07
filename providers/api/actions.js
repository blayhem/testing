import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import initialState from './initial-state';

const slice = createSlice({
  name: 'api',
  initialState: {
    ...initialState,
  },
  reducers: {
    setURL(state, action) {
      state.url = action.payload;
    },
    setStage(state, action) {
      state.stage = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setCatsNumber(state, action) {
      state.cats = action.payload;
    },
  },
});

export const postData = createAsyncThunk(
  'api/postData',
  async (url, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { setStage, setError, setCatsNumber } = slice.actions;

    try {
      const response = await fetch('/api/cats', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }), // body data type must match "Content-Type" header
      });
      const data = await response.json();

      dispatch(setCatsNumber(data.number));
      dispatch(setError(false));
      dispatch(setStage(3));
      return data.number;
    } catch (e) {
      dispatch(setError(true));
      return null;
    }
  }
);

export default slice;
