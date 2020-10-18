import { configureStore } from '@reduxjs/toolkit';
import provider from 'providers/api';

export default configureStore({
  reducer: provider.reducers
});
