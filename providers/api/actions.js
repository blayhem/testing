import { createSlice } from '@reduxjs/toolkit';
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

export const postData = () => async (dispatch) => {
  const { setStage, setError, setCatsNumber } = slice.actions;
  try {
    const response = await fetch('https://whispering-ravine-32505.herokuapp.com');
    const data = await response.json();

    dispatch(setCatsNumber(data.number));
    dispatch(setStage(3));
    return data.number;
  } catch (e) {
    dispatch(setError(true));
    return null;
  }
};

export default slice;
