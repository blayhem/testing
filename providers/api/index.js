import * as _selectors from './selectors';
import slice, { postData } from './actions';

export const actions = slice.actions;
export const reducers = slice.reducer;
export const selectors = _selectors;

export default {
  actions: {
    ...actions,
    postData
  },
  reducers,
  selectors
}