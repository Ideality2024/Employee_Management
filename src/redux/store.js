import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    // other reducers...
  },
});

export default store;