import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "./actions";

const charactersReducer = createSlice({
  name: "characters",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    respLength: null,
    limit: 6,
    filter: "",
  },
  reducers: {
    onPageChange(state, action) {
      state.currentPage = action.payload;
    },
    applyFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.data = [...action.payload.results];
        state.isLoading = false;
        state.respLength = action.payload.info.count;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export default charactersReducer.reducer;
export const { onPageChange, applyFilter } = charactersReducer.actions;
