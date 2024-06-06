import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "utils/redux/playerSlice";
import searchReducer from "utils/redux/searchSlice";
import homeReducer from "utils/redux/homeSlice";

export const store = configureStore({
  reducer: { player: playerReducer, search: searchReducer, home: homeReducer },
});
