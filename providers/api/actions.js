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
    const { data } = await fetch(
      'https://whispering-ravine-32505.herokuapp.com'
    ).then((res) => res.json());

    dispatch(setCatsNumber(data.number));
    dispatch(setStage(3));
  } catch (e) {
    console.error(e);
    dispatch(setError(true));
    return [];
  }
};

export default slice;
