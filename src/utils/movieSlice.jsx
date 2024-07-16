import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    }
  }
});

// Export the actions correctly
export const { addNowPlayingMovies } = movieSlice.actions;
// Export the reducer correctly
export default movieSlice.reducer;
