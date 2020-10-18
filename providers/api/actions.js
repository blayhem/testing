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
  async (_, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { setStage, setError, setCatsNumber } = slice.actions;
    // setTimeout(() => setStage(2), 2500);
    try {
      const response = await fetch(
        'https://whispering-ravine-32505.herokuapp.com/cats',
        {
          method: 'POST',
          cache: 'no-cache',
        }
      );
      const data = await response.json();

      dispatch(setCatsNumber(data.number));
      dispatch(setStage(3));
      return data.number;
    } catch (e) {
      dispatch(setError(true));
      return null;
    }
  }
);

export default slice;
