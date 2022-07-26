import { configureStore } from '@reduxjs/toolkit';
import RocketsSlice from './Rockets/Rockets';

const store = configureStore({
  reducer: {
    rockets: RocketsSlice,
  },
});

export default store;
