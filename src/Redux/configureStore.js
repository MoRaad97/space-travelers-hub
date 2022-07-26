import { configureStore } from '@reduxjs/toolkit';
import { rocketsReducer } from './Rockets/Rockets';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
