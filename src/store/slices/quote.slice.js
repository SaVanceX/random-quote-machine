import { createSlice } from "@reduxjs/toolkit";

const initialState = { quote: {} };

export const quoteSlice = createSlice({
  name: "quoteslice",
  initialState,
  reducers: {
    pageLoad: (state, action) => {
      state.quote = action.payload;
    },
    getQuote: (state, action) => {
      state.quote = action.payload;
    },
  },
});

export const { pageLoad, getQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
