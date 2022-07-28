import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const LOAD_MISSIONS = 'spacex-project-solo/rockets/LOAD_MISSIONS';

// Url
const baseUrl = 'https://api.spacexdata.com/v3/missions';

// create ASYNC Thunks
export const loadMissionsThunk = createAsyncThunk(LOAD_MISSIONS, async () => {
  // fetch Misisons
  const response = await axios.get(`${baseUrl}`).catch((err) => {
    console.log('Error', err);
  });
  const res = response.data;
  return res;
});

const missionsSlice = createSlice({
  name: 'spacex-project-solo/missions',
  initialState: [],
  reducers: {
    joinAction(state, action) {
      const newState = state.map((object) => {
        if (object.mission_id === action.payload.id) {
          return {
            ...object,
            joined: !object.joined,
          };
        }
        return {
          ...object,
        };
      });
      return newState;
    },
  },
  extraReducers: {
    [loadMissionsThunk.fulfilled]: (state, action) => {
      const newState = action.payload.map((object) => ({
        mission_id: object.mission_id,
        mission_name: object.mission_name,
        description: object.description,
        joined: false,
      }));
      return newState;
    },
  },
});

export const missionsReducer = missionsSlice.actions;
export default missionsSlice.reducer;
