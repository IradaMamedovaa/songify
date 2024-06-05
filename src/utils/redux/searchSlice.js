import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:'',
    result: null
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setValue: (state, action) => {
        const value = action.payload
      return { ...state, value };
    },
    setResult: (state, action) => {
      const result = action.payload;
      return { ...state, result };
    },
  },
});

export const { setValue, setResult } = searchSlice.actions;

export default searchSlice.reducer;
