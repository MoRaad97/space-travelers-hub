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




const storeSlice = createSlice({
  name: 'spacex-project-solo/rockets',
  initialState: [],
  extraReducers: {
    [loadRocketsThunk.fulfilled]: (state, action) => action.payload,
  },
});

export default storeSlice.reducer;