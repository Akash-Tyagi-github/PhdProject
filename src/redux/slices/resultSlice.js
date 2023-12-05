import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: {
    accessibilityScore: null,
  },
  reducers: {
    addAccessibilityScore: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
   
  },
});

export const { addAccessibilityScore} = resultSlice.actions;
export default resultSlice.reducer;