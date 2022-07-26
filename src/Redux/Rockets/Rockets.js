import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const LOAD_ROCKETS = 'spacex-project-solo/rockets/LOAD_ROCKETS';

// Url
const baseUrl = 'https://api.spacexdata.com/v3/rockets';

// create ASYNC Thunks
export const loadRocketsThunk = createAsyncThunk(LOAD_ROCKETS, async () => {
  // fetch Books
  const response = await axios.get(`${baseUrl}`).catch((err) => {
    console.log('Error', err);
  });
  const res = response.data;
  return res;
});

const RocketsSlice = createSlice({
  name: 'spacex-project-solo/rockets',
  initialState: [],
  reducers: {
    ReservationAction(state, action) {
      const newState = state.map((object) => {
        if (object.rocket_id === action.payload.id) {
          return {
            ...object,
            reserved: !object.reserved,
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
    [loadRocketsThunk.fulfilled]: (state, action) => {
      const newState = action.payload.map((object) => ({
        rocket_id: object.rocket_id,
        rocket_name: object.rocket_name,
        description: object.description,
        flickr_images: object.flickr_images,
        reserved: false,
      }));
      return newState;
    },
  },
});

export const rocketsReducer = RocketsSlice.actions;
export default RocketsSlice.reducer;
