import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters, fetchSingleCharacter } from "./actions";

const singleCharactersReducer = createSlice({
  name: "character",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    limit: 6,
    filter: "",
  },
  reducers: {
    applyFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCharacter.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSingleCharacter.fulfilled, (state, action) => {
        state.data = [...action.payload];
        console.log(state.data, "results form slice");
        state.isLoading = false;
      })
      .addCase(fetchSingleCharacter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export default singleCharactersReducer.reducer;
export const { applyFilter } = fetchSingleCharacter.actions;
