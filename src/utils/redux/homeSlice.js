import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlists: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setNewPlaylist: (state, action) => {
      const newPlaylist = action.payload;
      return { ...state, playlists: [...state.playlists, newPlaylist] };
    },
    setMorePlaylists: (state, action) => {
      const newPlaylists = action.payload;
      return { ...state, playlists: [...state.playlists, ...newPlaylists] };
    },
    resetHome: () => {
      return initialState;
    },
  },
});

export const { setNewPlaylist, setMorePlaylists, resetHome } =
  homeSlice.actions;

export default homeSlice.reducer;
