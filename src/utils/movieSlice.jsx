import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload
    }
  }
});

// Export the actions correctly
export const { addNowPlayingMovies,addTrailerVideo } = movieSlice.actions;
// Export the reducer correctly
export default movieSlice.reducer;
