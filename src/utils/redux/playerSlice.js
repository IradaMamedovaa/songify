import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  track: null,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setIsPlaying: (state) => {
      return { ...state, isPlaying: !state.isPlaying };
    },
    setTrack: (state, action) => {
      const track = action.payload;
      return { ...state, isPlaying: true, track };
    },
  },
});

export const { setIsPlaying, setTrack } = playerSlice.actions;

export default playerSlice.reducer;
