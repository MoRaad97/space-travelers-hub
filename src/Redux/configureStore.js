import { configureStore } from '@reduxjs/toolkit';
import RocketsSlice from './Rockets/Rockets';
import missionsSlice from './Missions/Missions';

const store = configureStore({
  reducer: {
    rockets: RocketsSlice,
    mission: missionsSlice,
  },
});

export default store;
